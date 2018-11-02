import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const StyledLine = styled.input`
  background-color: ${(props) => props.focused ? '#2C313C': '#282C34'};
  border: none;
  box-shadow: none;
  outline: none;
  padding: 4px 0px 2px 0px;
  caret-color: #98C379;
  color: #98C379;
  font-family: "Courier New";
  font-size: 15px;
`;

const Line = (props) => {
  const lineInput = useRef();

  const { value, focused, onEnter, onUp, onDown, onClick, onChange } = props;

  useEffect(() => {
    if (focused) {
      lineInput.current.focus();
    }
  }, [focused, value]);

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onEnter();
    }
    if (e.keyCode === 38) {
      onUp();
    }
    if (e.keyCode === 40) {
      onDown();
    }
  }

  return(
    <StyledLine
      type="text"
      ref={lineInput}
      value={value}
      focused={focused}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onMouseDown={onClick}
      />
  )

}

export default Line;
