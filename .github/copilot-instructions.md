# Helix Modern Angular Guidelines

This workspace runs **Angular 22.1.x, zoneless, standalone, Vitest**. Write new code for
that baseline. Legacy code is being migrated incrementally — do not mass-refactor it unless
asked.

## 1. Baseline

| Thing            | Value                                                                     |
| ---------------- | ------------------------------------------------------------------------- |
| Angular          | 22.1.x — keep all `@angular/*` on the same patch                          |
| Change detection | Zoneless (`provideZonelessChangeDetection()`); `zone.js` is not installed |
| Components       | Standalone by default — never write `standalone: true`                    |
| Tests            | Vitest + `@analogjs/vitest-angular` (`setupTestBed()`), not Karma/Jest    |
| Bootstrap        | `app.config.ts` with `provideBrowserGlobalErrorListeners()`               |

Zoneless implications: nothing outside Angular triggers change detection. Anything the
template reads must be a **signal**. Mutating a plain field from `setTimeout`, an event
listener, or a promise callback will not repaint.

---

## 2. Core Rules

- **`inject()` only** — no constructor parameter injection.
  ```ts
  private readonly usersApi = inject(UsersApi);
  ```
- **`@Service()`** from `@angular/core` for global services (this repo's convention). Do not
  write `@Injectable({ providedIn: 'root' })` in new code. Use plain `@Injectable()` only for
  a service scoped to a component or route provider.
- **Signals in components, RxJS in services.**
- **Control flow blocks only**: `@if` / `@else` / `@for` / `@switch` / `@let`. `*ngIf`,
  `*ngFor` and `NgSwitch` are gone from this codebase — do not reintroduce them, and do not
  import `NgIf` / `NgFor` / `NgSwitch`.
- **No `CommonModule`.** Import only the pipes you need (`DatePipe`, `DecimalPipe`). A few
  older NgModule libs still import it; leave them, don't copy them.
- **No new `NgModule`.** Standalone components/directives plus provider functions.
- **`styleUrl`** (singular) unless there really are several stylesheets.
- **`host` object** over `@HostBinding` / `@HostListener` in new components.
  ```ts
  @Component({ host: { class: 'cdx-section', '[class.is-open]': 'open()' } })
  ```
- **Push data down**: components receive _state ready to render_.
- Clear names, small files, one pattern per folder.

---

## 3. Signals

| Need                                    | API                                                     |
| --------------------------------------- | ------------------------------------------------------- |
| Local writable state                    | `signal()`                                              |
| Derived state                           | `computed()`                                            |
| Writable state that resets from a source | `linkedSignal()`                                        |
| Async data                              | `httpResource()` / `resource()` / `rxResource()`        |
| Bridge an existing Observable           | `toSignal()`                                            |
| Inputs / two-way / outputs              | `input()`, `input.required()`, `model()`, `output()`    |
| Queries                                 | `viewChild()`, `viewChildren()`, `contentChild()`       |
| Real side effects only                  | `effect()`                                              |

```ts
@Component({ selector: 'cdx-user-card' })
export class UserCard {
  readonly user = input.required<User>();
  readonly selected = output<User>();

  protected readonly initials = computed(() => this.user().name.charAt(0));
}
```

- Prefer `computed()` over logic in the template.
- `effect()` is for synchronising with something **outside** Angular (URL, localStorage,
  analytics, a third-party widget). Never use it to derive state — that is `computed()`.
- Mark signal fields `readonly`.
- No `async` pipe in new components; use `toSignal()` at the boundary.
- Use the signal query functions, not `@ViewChild` / `@ContentChild`.

---

## 4. Data Fetching

```ts
// API — HTTP only, knows nothing about UI or state.
@Service()
export class UsersApi {
  private readonly http = inject(HttpClient);

  getUsers() {
    return this.http.get<User[]>('/api/users');
  }
}
```

```ts
// Store — owns state, exposes signals.
@Service()
export class UsersStore {
  private readonly usersResource = httpResource<User[]>(() => '/api/users');

  readonly users = computed(() => this.usersResource.value() ?? []);
  readonly loading = this.usersResource.isLoading;
  readonly error = this.usersResource.error;

  reload() {
    this.usersResource.reload();
  }
}
```

- `httpResource` lives in a **store or component**, never in a plain API service.
- Use it when the request depends on reactive inputs and you want built-in
  `isLoading` / `error` / `reload`.
- Use `HttpClient` plus a store method when there is real business logic or sequencing.
- Name resources after the **data**, not the action: `users`, not `loadUsers`.
- One store per feature.

---

## 5. Components

```html
@if (store.error(); as error) {
  <cdx-error [message]="error.message" />
} @else if (store.loading()) {
  <mat-progress-spinner mode="indeterminate" />
} @else {
  <ul>
    @for (user of store.users(); track user.id) {
      <li>{{ user.name }}</li>
    } @empty {
      <li>No users</li>
    }
  </ul>
}
```

- Components never call `HttpClient` directly.
- No `subscribe()` in components — use `toSignal()`, or `takeUntilDestroyed()` in a service.
- Always `track` in `@for`; use `@empty` instead of a sibling `@if`.
- Use `@let` for a value reused several times in a template.
- No business logic in HTML.

---

## 6. Forms

New forms use the signal forms API (`@angular/forms/signals`) — reference usage in
[home.ts](packages/ngx-reference-app/src/app/pages/home/home.ts).

```ts
readonly contactData = signal({ name: '', email: '' });

readonly contactForm = form(this.contactData, (path) => {
  required(path.name, { message: 'Name is required' });
  email(path.email, { message: 'Enter a valid email' });
});
```

`ReactiveFormsModule` remains in older screens; keep it there, and never mix both APIs in
one form.

---

## 7. Cleanup

- `takeUntilDestroyed()` (with `DestroyRef` when outside an injection context) for
  subscriptions in services.
- `effect()` and `httpResource()` clean themselves up with their injection context.
- No manual `ngOnDestroy` unsubscribe bookkeeping.

---

## 8. Styling

Helix/Material specifics — theme setup, `hlx-*` classes, tokens — live in the
`helix-project-setup` and `helix-components` skills. Consult those before adding custom CSS
for a component Material already provides.

---

## 9. Testing

```ts
await TestBed.configureTestingModule({ imports: [UserCard] }).compileComponents();
```

- Vitest (`describe` / `it` / `expect` / `vi`), not Jasmine.
- Zoneless: after changing a signal, call `fixture.detectChanges()` or
  `await fixture.whenStable()` before asserting on the DOM.
- Target ≥80% coverage (see [CONTRIBUTING.md](CONTRIBUTING.md)).

---

## 10. Anti-patterns (DO NOT generate)

- `constructor(private x: X)` injection
- `subscribe()` in a component
- `BehaviorSubject` as component state
- New `NgModule`
- `*ngIf`, `*ngFor`, `NgSwitch`, `CommonModule`
- `standalone: true`
- `@Injectable({ providedIn: 'root' })` for new global services
- `effect()` used to derive state
- Relying on zone.js behaviour (mutating a plain field and expecting a repaint)

---

## 11. Review Checklist

- [ ] Does the component only render?
- [ ] Does state live in a store, exposed as signals?
- [ ] `@if` / `@for` with `track`?
- [ ] `inject()` and `@Service()`?
- [ ] Signals instead of RxJS in the component layer?
- [ ] Would this still work zoneless?
- [ ] Names describe data, not actions?
