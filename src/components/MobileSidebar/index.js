import React, { useState } from 'react';
import { AiOutlineMenuUnfold } from 'react-icons/ai';

const MobileSidebar = () => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <div className='mobile-sidebar'>
      <div className='container'>
        <div className='row'>
          <button className='btn' onClick={() => setCollapsed(!collapsed)}>
            <AiOutlineMenuUnfold />
          </button>
          <h1>DHA</h1>
        </div>

        <div className='nav-collapse' style={{ display: collapsed ? 'none' : 'block' }}>
          <ul>
            <li>
              <a href='#home'>Trang chủ</a>
            </li>
            <li>
              <a href='#about-me'>Giới thiệu</a>
            </li>
            <li>
              <a href='#education'>Học vấn</a>
            </li>
            <li>
              <a href='#experience'>Trải nghiệm công việc</a>
            </li>
            <li>
              <a href='#works'>Hoạt động</a>
            </li>
            <li>
              <a href='#awards'>Giải thưởng</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MobileSidebar;
