export type HeaderNavItem = {
  label: string;
  href: string;
  hide: boolean;
  type: "static" | "dynamic";
};

export const HEADER_NAV: HeaderNavItem[] = [
  {
    label: "Về chúng tôi",
    href: "/about",
    hide: false,
    type: "dynamic",
  },
  {
    label: "Bất động sản",
    href: "/products",
    hide: true,
    type: "static",
  },
  {
    label: "Bất động sản bán",
    href: "/products/products-sell",
    hide: false,
    type: "dynamic",
  },
  {
    label: "Bất động sản thuê",
    href: "/products/products-rent",
    hide: false,
    type: "dynamic",
  },
  {
    label: "Dự án M&A",
    href: "/project",
    hide: false,
    type: "dynamic",
  },
  {
    label: "Tuyển dụng",
    href: "/recruitment",
    hide: false,
    type: "dynamic",
  },
  {
    label: "Tin tức",
    href: "/blog",
    hide: false,
    type: "dynamic",
  },
  {
    label: "Liên hệ",
    href: "/contact",
    hide: false,
    type: "dynamic",
  },
];
