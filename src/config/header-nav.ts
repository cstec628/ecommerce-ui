export type HeaderNavItem = {
    label: string,
    href: string,
    type: "static" | "dynamic"
}

export const HEADER_NAV: HeaderNavItem[] = [
    {
        label: "About us",
        href: "/about",
        type: "static",
    },
      {
        label: "Products",
        href: "/products",
        type: "dynamic",
    },
    {
        label: "Blog",
        href: "/blog",
        type: "static",
    },
     {
        label: "Contact us",
        href: "/contact",
        type: "static",
    },
];

