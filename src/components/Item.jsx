import React from 'react';
import styled from 'styled-components';

const StyledItem = styled.div`
  margin: 0px 20px 0px 20px;
  padding: 20px;
  border-radius: 15px;

  background-color: ${(props) => props.selected ? 'skyblue' : '#ffcc99'};
  font-family: "Courier New";
  font-size: 24px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: skyblue;
  }
`;

const Item = (props) => {
  const { item, selected, hostRef, onItemClick } = props;

  const selectItem = () => {
    onItemClick(item);
  }

  return (
    <StyledItem ref={hostRef} selected={selected} onClick={selectItem}>
      { item.label }
    </StyledItem>
  );
}

export default Item;
