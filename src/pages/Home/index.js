import React from 'react';
import avatar from '../../img/avatar.jpg';
const Home = () => {
  return (
    <div className='container'>
      <div className='intro'>
        <img alt='avatar' className='avatar' src={avatar} />
        <h1>Đỗ Thị Hồng Anh</h1>
        <div className='vertical-flip'>
          <p>Dược sĩ đại học</p>
        </div>

        <div className='mt-5'>
          <a className='btn' href='https://www.topcv.vn/xem-cv/5683a18a8d25de6854692ed761d06666'>
            CV
          </a>
        </div>
      </div>
    </div>
  );
};
export default Home;
