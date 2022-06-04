import Header from "~/components/Header";
import S from "~/styles/styles";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <S.Container>
      <S.Title>Example page of home</S.Title>
      <Header />
    </S.Container>
  );
};

export default Home;
