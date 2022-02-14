import Link from "next/link";
import React from "react";

import { Container } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/clientes">
            <a>Clientes</a>
          </Link>
        </li>
        <li>
          <Link href="/produtos">
            <a>Produtos</a>
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default Header;
