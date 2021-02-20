import React from 'react';
import  first from '../../img/1.jpg';
import  second from '../../img/2.jpg';
import  third from '../../img/3.jpg';

const Skills = () => {
  return (
    <div className='container'>
      <h2>Hoạt động</h2>
      <div className='row'>
        <div className='col-xl-4 col-lg-12 '>
          <div
            className='skill-box'
            style={{
              background: 'rgb(108,108,229)',
              boxShadow: '0px 5px 20px 0px rgba(108, 108, 229, 0.5)',
            }}
          >
            <h5>Triển khai dự án:</h5>
            <h5> Experience Of Pharmacy</h5>
            <img src={first} style={{width:'280px',margin:'auto',marginTop:50}}/>
          </div>
        </div>
        <div className='col-xl-4 col-lg-12 '>
          <div
            className='skill-box'
            style={{
              background: 'rgb(249, 215, 76)',
              boxShadow: '0px 5px 20px 0px rgba(249, 215, 76, 0.5)',
              color: '#000',
            }}
          >
            <h5>Tổ chức Workshop:</h5>
            <h5>"Thị trường bán lẻ Dược phẩm - Cơ hội nào từ miếng bánh tỷ đô"</h5>
            <img src={second} style={{width:'280px',margin:'auto',marginTop:40}}/>

          </div>
        </div>
        <div className='col-xl-4 col-lg-12 '>
          <div
            className='skill-box'
            style={{
              background: 'rgb(249, 123, 139)',
              boxShadow: '0px 5px 20px 0px rgba(249, 123, 139, 0.5)',
            }}
          >
            <h5>Chương trình:</h5>
            <h5>"Phỏng vấn thử Trình Dược Viên"</h5>
            <img src={third} style={{width:'280px',margin:'auto',marginTop:50}}/>

          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
