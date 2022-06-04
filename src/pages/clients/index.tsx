import Header from "~/components/Header";
import S from "~/styles/styles";
import React, { FC, ReactElement } from "react";

const clientes: FC = (): ReactElement => {
  return (
    <S.Container>
      <S.Title>Page example of clients</S.Title>
      <Header />
    </S.Container>
  );
};

export default clientes;
