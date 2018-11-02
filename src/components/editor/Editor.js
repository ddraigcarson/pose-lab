import React, { useState, useEffect, useRef } from 'react';
import * as _ from 'lodash';
import styled from 'styled-components';

import { subscribeToTimer } from '../../api';
import { MENU_OPTIONS } from '../../constants/constants';
import { backgroundColours } from '../../styles/constants';
import { replaceAt, insertAt } from '../../utility/array';
import { ruleToCode } from '../../utility/rules';

import Menu from '../insertMenu/Menu';
import LineNumbers from './LineNumbers';
import Line from './Line';
import WebSocket from '../websocket/WebSocket';

const StyledEditor = styled.div`
  ${backgroundColours.page}
  height: 100%;
  padding: 10px 20px 20px 20px;
  display: flex;
`;

const Lines = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  flex: 6;
`;

const Editor = (props) => {
  const [ lines, setLines ] = useState([{value: 'g'}]);
  const [ focusedLine, setFocusedLine ] = useState(2);

  const autoGenerateCode = (values) => {
    console.log(focusedLine)
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
      <WebSocket onChange={autoGenerateCode}/>
      <Menu
        data={MENU_OPTIONS}
        labelField='label'
        onSelect={autoGenerateCode}
      />
      <LineNumbers lines={lines}/>
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
