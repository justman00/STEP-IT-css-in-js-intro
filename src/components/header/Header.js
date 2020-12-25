import React, { Fragment } from 'react';
import styled from 'styled-components';

import './Header.css';

/**
 * {
 * div() {}
 * p() {}
 * button() {}
 * h1() {}
 * }
 */

const StyledH1 = styled.h1`
  color: purple;
  color: ${(props) => (props.color ? props.color : 'purple')};
`;

// template
export const StyledButton = styled.button`
  color: orange;
  border-radius: ${(props) => {
    console.log('styled button props', props.rounded, props.myProp);

    return props.rounded ? '12px' : '0px';
  }};
`;

function Header(props) {
  const { color } = props;

  return (
    <Fragment>
      <StyledH1 color={color}>Hello World</StyledH1>
      <StyledButton rounded={true} myProp={'myValue'}>hello</StyledButton>
      <StyledButton>hello</StyledButton>
    </Fragment>
  );
}

export default Header;
