"use client";
import Image from "next/image";
import Link from "next/link";
import { HeaderNav } from "./HeaderNav";
import Head from "next/head";
import { HeaderMobile } from "./HeaderMobile";
import React from "react";
import HeaderActions from "./HeaderActions";

function Header() {
  const [token, setToken] = React.useState<string | null>(null);

  React.useEffect(() => {
    const storedToken = localStorage.getItem("User");
    setToken(storedToken);
  }, []);

  return (
    <header>
      <div className="container">
        <div className="flex items-center justify-between p-4">
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
