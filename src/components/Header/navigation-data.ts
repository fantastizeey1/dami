export interface SubMenuItem {
  name: string;
  path: string;
}

export interface NavItem {
  name: string;
  path: string;
  submenu?: SubMenuItem[];
}

export const navItems: NavItem[] = [
  {
    name: "About Us",
    path: "/about-us",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Learn",
    path: "/learn",
  },
];
