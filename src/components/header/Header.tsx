"use client";
import Image from "next/image";
import Link from "next/link";
import HeaderActions from "./HeaderActions";
import { HeaderMobile } from "./HeaderMobile";
import { HeaderNav } from "./HeaderNav";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* logo */}
          <h1>
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Cultivation"
                width={172}
                height={40}
              />
            </Link>
          </h1>
          <HeaderNav />
          <HeaderActions />
          <HeaderMobile />
        </div>
      </div>
    </header>
  );
}

export default Header;
