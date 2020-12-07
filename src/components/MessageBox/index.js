import React from 'react';

import avatar from '../../img/avatar1.jpg';
const MessageBox = () => {
  return (
    <div className='row'>
      <div className='col-lg-3' style={{ marginTop: 60, textAlign: 'center' }}>
        <img className='avatar' src={avatar} alt='avatar' loading='lazy' />
      </div>
      <div className='col-lg-9' style={{ marginTop: 60 }}>
        <div className='card'>
          <div className='row'>
            <div className='col-xl-6 '>
              <p>
                Em là Đỗ Thị Hồng Anh - sinh viên năm cuối trường Đại học Dược Hà Nội. Em là người
                có tinh thần trách nhiệm cao, nhiệt tình và dễ thích nghi với môi trường mới. Em
                luôn mong muốn được trải nghiệm công việc thực tế và trở thành nhân viên Tư vấn
                &amp; chăm sóc khách hàng xuất sắc trong tương lai.
              </p>
              <div className='mt-4' style={{ textAlign: 'center' }}>
                <a className='btn' href='https://www.facebook.com/profile.php?id=100009383371281'>
                  Facebook
                </a>
              </div>
            </div>
            <div className='col-xl-6'>
              <h4>Làm việc nhóm</h4>
              <div className='progress'>
                <div
                  class='progress-bar bg-success'
                  role='progressbar'
                  style={{ width: '100%' }}
                  aria-valuenow='100'
                  aria-valuemin='0'
                  aria-valuemax='100'
                ></div>
              </div>
              <h4>Giao tiếp</h4>
              <div className='progress'>
                <div
                  class='progress-bar bg-warning'
                  role='progressbar'
                  style={{ width: '80%' }}
                  aria-valuenow='80'
                  aria-valuemin='0'
                  aria-valuemax='100'
                ></div>
              </div>
              <h4>Tin học văn phòng</h4>
              <div className='progress'>
                <div
                  class='progress-bar bg-info'
                  role='progressbar'
                  style={{ width: '70%' }}
                  aria-valuenow='90'
                  aria-valuemin='0'
                  aria-valuemax='100'
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MessageBox;
