import React from 'react';
import MessageBox from '../../components/MessageBox';
import { FaPhone, FaEnvelope, FaMapMarked, FaBirthdayCake } from 'react-icons/fa';
const AboutMe = () => {
  return (
    <div className='container'>
      <h2>Giới thiệu</h2>
      <MessageBox />
      <div className='container'>
        <div className='row' style={{ paddingTop: 50 }}>
          <div className='col-xl-3 col-md-6 contact'>
            <FaPhone /> +84 374033946
          </div>
          <div className='col-xl-3 col-md-6 contact'>
            <FaEnvelope /> anhdth.hn@gmail.com
          </div>
          <div className='col-xl-3 col-md-6 contact'>
            <FaBirthdayCake /> 14/08/1998
          </div>
          <div className='col-xl-3 col-md-6 contact'>
            <FaMapMarked /> Hai Bà Trưng, Hà Nội
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
