import React from 'react';
import logo from '../../img/hup.png';
import {
  FaGraduationCap,
  FaUserTie,
  FaHome,
  FaBriefcase,
  FaSitemap,
  FaAward,
} from 'react-icons/fa';
const Sidebar = () => {
  return (
    <div className='desktop-sidebar'>
      <div className='logo'>
        <img src={logo} />
      </div>
      <nav id='side-bar'>
        <ul>
          <li>
            <a href='#home'>
              <FaHome />
              Trang chủ
            </a>
          </li>
          <li>
            <a href='#about-me'>
              <FaUserTie />
              Giới thiệu
            </a>
          </li>
          <li>
            <a href='#education'>
              <FaGraduationCap />
              Học vấn
            </a>
          </li>
          <li>
            <a href='#experience'>
              <FaBriefcase />
              Trải nhiệm công việc
            </a>
          </li>
          <li>
            <a href='#works'>
              <FaSitemap />
              Hoạt động
            </a>
          </li>
          <li>
            <a href='#awards'>
              <FaAward />
              Giải thưởng
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Sidebar;
