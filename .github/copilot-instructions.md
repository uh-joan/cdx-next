# Helix Modern Angular Guidelines

## 1. General Principles

- **No constructor injection**: Do not use constructor-based dependency
  injection. Instead, use the `inject()` function for dependencies:
  - Example: `private myService = inject(MyService);`
- **No CommonModule imports**: Do not import the entire `CommonModule`. Only
  import the specific standalone features you need (e.g., `NgIf`, `NgFor`,
  `NgSwitch`).
- **Use `ngSwitch` for conditional rendering**: Prefer `ngSwitch` for
  multi-branch conditional rendering in templates, but import it as a standalone
  feature, not via `CommonModule`.

- **Standalone first**: no `NgModule` unless strictly justified.
- **Signals over RxJS** in components. RxJS is mostly for services.
- **Push data down**: components receive _state ready to render_.
- **Explicit side effects**: effects in services or well-scoped `effect()`.
- **Dev-friendly**:
  - Clear and predictable names.
  - Small files.
  - One pattern per folder.

---

## 2. Services: Clear Rules

### 2.1 Types of Services

**1. API / Infrastructure** Talks HTTP, knows nothing about UI.

**2. Store / State** Orchestrates state with signals.

---

## 3. HTTP + HttpResource

### 3.1 When to use `HttpResource`

Use when:

- The request depends on _reactive inputs_.
- The lifecycle is tied to the component.
- You want cache, reload, and state (`loading / error`).

Do not use when:

- There is complex business logic.
- The request is shared between many features.

---

### 3.2 Basic Example

```ts
@Service()
export class UsersApi {
  private http = inject(HttpClient);

  getUsers() {
    return this.http.get<User[]>('/api/users');
  }
}
```

```ts
@Service()
export class UsersStore {
  private api = inject(UsersApi);

  users = httpResource(() => this.api.getUsers());
}
```

**Rules**:

- `httpResource` lives in _stores or components_, not in pure APIs.
- The name always describes the _data_, not the action.

---

## 4. State with Signals

### 4.1 Simple Store

```ts
@Service()
export class UsersStore {
  users = signal<User[]>([]);
  loading = signal(false);

  load() {
    this.loading.set(true);
    fetchUsers().then((u) => {
      this.users.set(u);
      this.loading.set(false);
    });
  }
}
```

### 4.2 Store + HttpResource

```ts
@Service()
export class UsersStore {
  resource = httpResource(() => this.api.getUsers());

  users = computed(() => this.resource.value() ?? []);
  loading = computed(() => this.resource.isLoading());
}
```

---

## 5. Components

### 5.1 Rules

- **Components do not fetch directly**.
- No manual subscriptions.
- All state comes in as `signal` or `computed`.

---

### 5.2 Modern Template

```html
@if (store.loading()) {
<app-spinner />
} @else {
<ul>
  @for (user of store.users(); track user.id) {
  <li>{{ user.name }}</li>
  }
</ul>
}
```

**Rules**:

- Always use `track`.
- No new files for `*ngIf` / `*ngFor`.

---

## 6. Effects

Use `effect()` only when:

- There is synchronization with something external (URL, localStorage,
  analytics).
- There are _real side effects_.

```ts
effect(() => {
  if (this.users().length === 0) {
    this.store.load();
  }
});
```

---

## 7. Modern Inputs / Outputs

```ts
@Component()
export class UserCard {
  user = input.required<User>();
  selected = output<User>();
}
```

---

## 8. Patterns Copilot MUST Follow

- Prefer `computed` over logic in templates.
- Prefer signals over `async pipe`.
- One store per feature.
- No business logic in HTML.

---

## 9. Anti-patterns (DO NOT generate)

❌ `subscribe()` in components ❌ `BehaviorSubject` for new code ❌ New
`NgModule` ❌ `*ngIf` / `*ngFor`

---

## 10. Refactor Checklist

- [ ] Does the component only render?
- [ ] Does the state live in a store?
- [ ] Do you use `@if` / `@for`?
- [ ] Signals instead of RxJS?
- [ ] Clear and predictable names?

---

## 11. Note for LLMs

> This project follows **modern Angular (v20+)** and is ready for Angular 21.
> Prefer **signals, httpResource, control flow syntax, and standalone
> components**. Avoid legacy patterns even if they compile.
