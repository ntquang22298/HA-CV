import React from 'react';
import './index.css';
const Badge = (props) => {
  return (
    <div style={{ background: props.background, color: props.color }} className='badge'>
      <div className='circle'>{props.icon}</div>
    </div>
  );
};
export default Badge;
