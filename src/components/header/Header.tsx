"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeaderActions from "./HeaderActions";
import { HeaderMobile } from "./HeaderMobile";
import { HeaderNav } from "./HeaderNav";

function Header() {
  const [token, setToken] = React.useState<string | null>(null);

  React.useEffect(() => {
    const storedToken = localStorage.getItem("User");
    setToken(storedToken);
  }, []);

  return (
    <header>
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* logo */}
          <h1>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Cultivation"
                width={150}
                height={100}
              />
            </Link>
          </h1>
          <HeaderNav user={token} />
          <HeaderActions />
          <HeaderMobile />
        </div>
      </div>
    </header>
  );
}

export default Header;
