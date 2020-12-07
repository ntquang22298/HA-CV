import React from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const Experience = () => {
  return (
    <div className='container'>
      <h2>Trải nghiệm công việc</h2>
      <div className='row'>
        <div className='timeline-element'>
          <VerticalTimeline>
            <VerticalTimelineElement
              className='vertical-timeline-element--work'
              date='10/2019 - 05/2020'
              iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
              icon={<FaBriefcase />}
            >
              <h3 className='vertical-timeline-element-title'>Công ty TNHH Livin Green</h3>
              <p className='sub'>CTV Tư vấn</p>
              <p>Công việc:</p>
              <ul>
                <li>Tư vấn khách hàng quan tâm đến sản phẩm Trilado, UniBee qua fanpage.</li>
                <li>Chăm sóc khách hàng đã mua sản phẩm.</li>
              </ul>
              <p>Kết quả: doanh thu cao nhất đạt 4.900.000 VNĐ/ca </p>
              <p>Kinh nghiệm học hỏi được:</p>
              <ul>
                <li>Rèn luyện kĩ năng lắng nghe, thuyết phục khách hàng.</li>

                <li>Tính trách nhiệm trong công việc.</li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className='vertical-timeline-element--work'
              date='06/2019 - 09/2019'
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<FaBriefcase />}
            >
              <h3 className='vertical-timeline-element-title'>Công ty TNHH Tuệ Linh</h3>

              <p className='sub'>CTV Truyền thông - Phòng Truyền thông &amp; TCSK</p>
              <p>Công việc:</p>
              <ul>
                <li>
                  Lập kế hoạch và triển khai hoạt động giới thiệu sản phẩm C-Nattu tại các điểm
                  trường.
                </li>
                <li>Phối hợp với bộ phận khác (phòng Marketing) để hoàn thành công việc.</li>
              </ul>
              <p>Kinh nghiệm học hỏi được: </p>
              <ul>
                <li>Rèn luyện kĩ năng thuyết phục khách hàng.</li>
                <li>Thích nghi với môi trường doanh nghiệp và chịu được áp lực.</li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className='vertical-timeline-element--work'
              date='02/2019 - 03/2019'
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<FaBriefcase />}
            >
              <h3 className='vertical-timeline-element-title'>Công ty CP Dược Mỹ phẩm CVI</h3>

              <p className='sub'>CTV tư vấn tại nhà thuốc</p>
              <p>Công việc: tư vấn, giới thiệu sản phẩm Cumargold Kare tại nhà thuốc.</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};
export default Experience;
