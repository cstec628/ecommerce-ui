import React from "react";
import { Container } from "../grids/container/container";
import { Typography } from "../typography/Typography";
import { HEADER_NAV } from "@/config/header-nav";
import Link from "next/link";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="bg-[linear-gradient(180deg,#00A232_0%,#008A34_55%,#006837_100%)] py-16 text-white">
      <Container>
        <div className="grid grid-cols-4 gap-4">
          <div className="item">
            <Typography as="h3" variant="h4" className="mb-8 font-bold">
              Sinveco Group
            </Typography>
            <ul className="space-y-4 text-white">
              <li>
                Địa chỉ: 25 Nguyễn Bỉnh Khiêm, Phường Bến Nghé, Quận 1, Ho Chi
                Minh City, Vietnam
              </li>
              <li>Email: info.Saithanhland@gmail.com</li>
              <li>Số điện thoại: 08 6666 3968</li>
            </ul>
          </div>
          <div className="item">
            <Typography as="h3" variant="h4" className="mb-8 font-bold">
              Liên kết nhanh
            </Typography>
            <ul className="space-y-4 text-white">
              {HEADER_NAV.map((item) => {
                if (!item.hide) {
                  return (
                    <li key={item.href}>
                      <Link href={item.href} className="hover:underline">
                        {item.label}
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          <div className="item">
            <Typography as="h3" variant="h4" className="mb-8 font-bold">
              Đăng ký nhận bản tin
            </Typography>
          </div>
          <div className="item">
            <Typography as="h3" variant="h4" className="mb-8 font-bold">
              Mạng xã hội
            </Typography>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
