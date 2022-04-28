import Header from "~/components/Header";
import S from "~/styles/styles";
import React, { FC, ReactElement } from "react";

const produtos: FC = (): ReactElement => {
  return (
    <S.Container>
      <h1>produtos</h1>
      <Header />
    </S.Container>
  );
};

export default produtos;
