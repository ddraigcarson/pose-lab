import React, { useState } from 'react';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';
import * as _ from 'lodash';

import Item from './Item';

const StyledMenu = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  overflow-y: scroll;
`;

const AnimatedItem = posed(Item)({
  enter: {
    opacity: 1,
    delay: 300,
  },
  exit: {
    opacity: 0,
  },
});

const Menu = (props) => {
  const { data, labelField, onSelect } = props;
  const [ displayData, setDisplayData ] = useState(data);
  const [ selectionTree, setSelectionTree ] = useState([]);

  const selectItem = (item) => {
    if (!_.isEmpty(item.children)) {
      setDisplayData(item.children);
      setSelectionTree(_.concat([], selectionTree, item));
    } else {
      onSelect(_.concat([], selectionTree, item))
    }
  }

  const goBack = () => {
    setDisplayData(data);
    setSelectionTree([]);
  }

  return (
    <StyledMenu>
      <PoseGroup animateOnMount>
      <AnimatedItem selected key="back" item={{[labelField]: 'Back'}} labelField={labelField} onItemClick={goBack}/>
      {
        displayData.map(o => <AnimatedItem key={o.id} item={o} labelField={labelField} onItemClick={selectItem}/>)
      }
      </PoseGroup>
    </StyledMenu>
  );
}

export default Menu;
