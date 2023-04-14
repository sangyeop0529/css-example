import React from "react";
import styled, { css } from "styled-components";

export default function StyledComponents() {
  const Container = styled.div`
    display: flex;
  `;
  const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    color: #b9eaff;
    margin: 0 1em;
    padding: 0.25rem 1em;
    ${(props) =>
      props.primary &&
      css`
        background: #009cd5;
        color: white;
      `};
  `;
  return (
    <Container>
      <Button>Normal Button</Button>
      <Button primary>Primary Button</Button>
    </Container>
  );
}
