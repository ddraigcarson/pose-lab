import React, { useState } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

import Item from './Item';
import { DROP_STATES } from '../constants/constants';

const AnimatedMenu = posed.div({
  open: {
    delayChildren: 300,
    staggerChildren: 50,
  },
  closing: {
    delayChildren: 300,
    staggerChildren: 50,
    staggerDirection: -1,
  },
});

const StyledMenu = styled(AnimatedMenu)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  overflow-y: scroll;
`;

const AnimatedItem = posed(Item)({
  open: { opacity: 1 },
  closing: { opacity: 0 },
  closed: { opacity: 0 },
});

const Menu = (props) => {
  const { data } = props;
  const [ dropState, setDropState ] = useState(DROP_STATES.CLOSED);
  const [ selectedItem, setSelectedItem ] = useState({label: 'Select'});

  const toggleOpen = () => {
    setDropState(dropState === DROP_STATES.OPEN ? DROP_STATES.CLOSING : DROP_STATES.OPEN);
  }

  const toggleClosed = () => {
    if (dropState === DROP_STATES.CLOSING) {
      setDropState(DROP_STATES.CLOSED);
    }
  }

  const selectItem = (item) => {
    setSelectedItem(item);
    setDropState(DROP_STATES.CLOSING);
  }

  return (
    <StyledMenu pose={dropState} initialPose={DROP_STATES.CLOSING} onPoseComplete={toggleClosed}>
      <Item item={selectedItem} selected={true} onItemClick={toggleOpen} />
      {
        dropState !== DROP_STATES.CLOSED
        ? data.map(o => <AnimatedItem key={o.label} item={o} onItemClick={selectItem}/>)
        : null
      }
    </StyledMenu>
  );
}

export default Menu;
