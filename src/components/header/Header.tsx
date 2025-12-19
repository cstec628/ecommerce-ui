import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="bg-main">
      <div className="container">
        <div className="flex items-center">
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
        </div>
      </div>
    </header>
  );
}

export default Header;
