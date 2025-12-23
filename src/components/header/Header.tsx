import Image from "next/image";
import Link from "next/link";
import { HeaderNav } from "./HeaderNav";

function Header() {
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
          <HeaderNav />
        </div>
      </div>
    </header>
  );
}

export default Header;
