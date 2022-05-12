import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.secondaryDark};
`;

export default {
  Container,
  Title,
};
