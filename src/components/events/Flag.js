import React, {useState} from 'react';
import ItemContainer from "../common/item-container";
import {useSelector} from "react-redux";
import {getActiveCharacterSelector} from "../../redux/selectors";
import Icon from '../Icon';

const Flag = ({comp_id, isMoveX}) => {
  const character = useSelector(getActiveCharacterSelector)

  
  return (
      <ItemContainer comp_id={comp_id} classStyles="justify-center bg-yellow-500">
        When I click on <Icon name="flag" size={15} className="text-green-600 mx-2 mr-200"/>

      </ItemContainer>
  );
};

export default Flag;
