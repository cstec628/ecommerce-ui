import localFont from "next/font/local";

export const wixMadefor = localFont({
  src: [
    {
      path: "../public/fonts/WixMadeforText-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/WixMadeforText-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/WixMadeforText-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-wix-madefor",
  display: "swap",
});
