import React from 'react';

const ChartSelector = ({ type, callback }) =>  {

    const wrapCallback = e => callback(type);

    return (
        <button type="button" onClick={wrapCallback}>{type}</button>
    );
};

export default ChartSelector;