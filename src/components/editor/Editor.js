import React, { useState } from 'react';
import * as _ from 'lodash';
import styled from 'styled-components';

import { MENU_OPTIONS } from '../../constants/constants';
import { replaceAt, insertAt } from '../../utility/array';
import { ruleToCode } from '../../utility/rules';

import Menu from '../insertMenu/Menu';
import Line from './Line';

const StyledEditor = styled.div`
  background-color: #282C34;
  height: 100%;
  padding: 10px 20px 20px 20px;

  display: flex;
`;

const LineNumbers = styled.div`
  display: flex;
  flex-direction: column;
  color: #4B5364;
  font-family: "Courier New";
  font-size: 15px;
`;

const LineNumber = styled.div`
  padding: 4px 0px 2px 0px;
`;

const Lines = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  flex: 6;
`;

const Editor = (props) => {
  const [ lines, setLines ] = useState([{value: ''}]);
  const [ focusedLine, setFocusedLine ] = useState(0);

  const onSelect = (values) => {
    setLines(insertAt(lines, [{ value: ruleToCode(values) }], focusedLine-1));
    setFocusedLine(focusedLine);
  }

  const addLine = () => {
    setLines(insertAt(lines, [{ value: '' }], focusedLine));
    setFocusedLine(focusedLine+1);
  }

  const updateLine = (index) => {
    return (e) => {
      setLines(replaceAt(lines, { ...lines[index], value: e.target.value }, focusedLine));
    }
  }

  return (
    <StyledEditor>
      <Menu
        data={MENU_OPTIONS}
        labelField='label'
        onSelect={onSelect}
      />
      <LineNumbers>
        {_.map(lines, (o, i) => <LineNumber key={i}>{i}</LineNumber>)}
      </LineNumbers>
      <Lines>
        {_.map(lines, (o, i) => (
          <Line
            key={i}
            value={o.value}
            focused={focusedLine === i}
            onChange={updateLine(i)}
            onEnter={addLine}
            onUp={() => setFocusedLine(focusedLine-1)}
            onDown={() => setFocusedLine(focusedLine+1)}
            onClick={() => setFocusedLine(i)}
            />
        ))}
      </Lines>
    </StyledEditor>
  )
}

export default Editor;
