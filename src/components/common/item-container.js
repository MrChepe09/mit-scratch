import React from 'react';

const ItemContainer = ({children, comp_id, handleClick, classStyles}) => {
  return (
      <div className="shadow-md">
        <div
            id={comp_id}
            style={{ width: '190px'}}
            className={`flex flex-row flex-wrap text-white px-2 py-1 my-2 text-sm cursor-pointer ` + classStyles}
            onClick={handleClick}
        >
          {children}
        </div>
      </div>
  );
};

export default ItemContainer;
