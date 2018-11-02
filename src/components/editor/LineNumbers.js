import React from 'react';
import styled from 'styled-components';
import * as _ from 'lodash';

import { fonts, fontColours } from '../../styles/constants';

const StyledLineNumbers = styled.div`
  display: flex;
  flex-direction: column;
  ${fonts.code}
  ${fontColours.faint};
`;

const LineNumber = styled.div`
  padding: 4px 0px 2px 0px;
`;

const LineNumbers = (props) => {
  const { lines } = props;

  return (
    <StyledLineNumbers>
      {_.map(lines, (o, i) => <LineNumber key={i}>{i}</LineNumber>)}
    </StyledLineNumbers>
  )
}

export default LineNumbers;
