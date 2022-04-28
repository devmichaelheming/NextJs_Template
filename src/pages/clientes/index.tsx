import Header from "~/components/Header";
import S from "~/styles/styles";
import React, { FC, ReactElement } from "react";

const clientes: FC = (): ReactElement => {
  return (
    <S.Container>
      <h1>clientes</h1>
      <Header />
    </S.Container>
  );
};

export default clientes;
