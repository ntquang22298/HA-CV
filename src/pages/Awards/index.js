import React from 'react';
import { FaUserGraduate, FaStar } from 'react-icons/fa';
import Badge from '../../components/Badge';

const Awards = () => {
  return (
    <div className='container'>
      <h2> Giải thưởng</h2>
      <div className='card'>
        <div className='row'>
          <div className='col-xl-6'>
            <Badge
              background='linear-gradient(to bottom right, #ffeb3b 0%, #fbc02d 100%)'
              color='#ffb300'
              icon={<FaStar />}
            />
            <p>Sinh viên có thành tích xuất sắc trong học tập năm học 2019-2020</p>
          </div>
          <div className='col-xl-6'>
            <Badge
              background='linear-gradient(to bottom right, #4fc3f7 0%, #2196f3 100%)'
              color='#259af3'
              icon={<FaUserGraduate />}
            />
            <p>Học bổng Homtamin năm học 2018-2019</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Awards;
