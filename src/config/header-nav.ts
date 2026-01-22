export type HeaderNavItem = {
  label: string;
  href: string;
  type: "static" | "dynamic";
};

export const HEADER_NAV: HeaderNavItem[] = [
  {
    label: "Về chúng tôi",
    href: "/about",
    type: "dynamic",
  },
  {
    label: "Bất động sản",
    href: "/products",
    type: "static",
  },
  {
    label: "Bất động sản bán",
    href: "/products/products-sell",
    type: "dynamic",
  },
  {
    label: "Bất động sản thuê",
    href: "/products/products-rent",
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
