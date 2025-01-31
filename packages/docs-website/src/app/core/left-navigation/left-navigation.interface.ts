export interface NavbarSection {
  heading?: string;
  elements: NavbarElement[];
}

export interface NavbarElement {
  label: string;
  url: string;
}
