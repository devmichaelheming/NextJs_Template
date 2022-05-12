import Header from "~/components/Header";
import S from "~/styles/styles";
import React, { FC, ReactElement } from "react";

const produtos: FC = (): ReactElement => {
  return (
    <S.Container>
      <S.Title>produtos</S.Title>
      <Header />
    </S.Container>
  );
};

export default produtos;
