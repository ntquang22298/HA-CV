import React from 'react';
import { FaBook, FaUniversity, FaUserGraduate } from 'react-icons/fa';
const Education = () => {
  return (
    <div className='container'>
      <div className='card'>
        <div className='row'>
          <div className='col-md-3'>
            <FaUniversity style={{ color: '#ffb300' }} />
          </div>
          <div className='col-md-6'>
            <h5>Sinh viên năm cuối - Đại học Dược Hà Nội</h5>
          </div>
        </div>
        <div className='row mt-3'>
          <div className='col-md-3 '>
            <FaBook style={{ color: '#34a297' }} />
          </div>
          <div className='col-md-6'>
            <h5>Khoa: Công nghiệp Dược</h5>
          </div>
        </div>
        <div className='row mt-3'>
          <div className='col-md-3'>
            <FaUserGraduate style={{ color: '#259af3' }} />
          </div>
          <div className='col-md-6'>
            <h5>
              GPA: <b>3.57/4.00</b>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Education;
