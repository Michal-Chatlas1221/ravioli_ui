import React from 'react';

const Range = ({initialValue, name, callback}) => {
    
    const wrapCallback = e => callback(name, e.target.value);
    
    return (<div>
        <label>{name} - {initialValue}</label>
        <input type="range" min="0" max="30" value={initialValue} onChange={wrapCallback}/>
    </div>);
};

export default Range;