 /* eslint-disable */
import React from 'react';
import './App.css';

import logo from './logo.jpg';
import person1 from './person1.jpg';
import person2 from './person2.jpg';
import person3 from './person3.jpg';
import person4 from './person4.jpg';



function App() {
  return (
    <div className="header_wrapper">
      <div className="header_background">
        <div className="header_content">
          <div className="header_content_2">
            <div className="header_logo">
              <img className="header_logo_img" src={logo} />
              <p className="header_content_logo">HỘI CHÉM GIÓ VIỆT NAM</p>
              <h3 className="header_title">CHƯƠNG TRÌNH </h3>
              <h3 className="header_title_1">REACT 2021</h3>
            </div>
          </div>
          <div className="header_address">
            <div>
              <h4>Đà Nẵng, 1/2021</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="organizer">
        <h1 className="organizer_title">Tham gia đào tạo</h1>
        <div className="dash"></div>
        <div className="organizer_content">
          <div className="organizer_person">
            <div className="person">
              <div className="person_avatar">
                <img className="person_avatar_logo" src={person1} />
              </div>
              <div className="person_infomation">
                <p className="infomation_name"><strong>Phan Ngô Nhật Vũ</strong></p>
                <p className="infomation_position">1+ EXP Dev ReactJS</p>
              </div>
            </div>
          </div>
          <div className="organizer_person">
            <div className="person">
              <div className="person_avatar">
                <img className="person_avatar_logo" src={person2} />
              </div>
              <div className="person_infomation">
                <p className="infomation_name"><strong>Nguyễn Trần Vũ</strong></p>
                <p className="infomation_position">Dev tại ACEXIS Joint Stock</p>
              </div>
            </div>
          </div>
          <div className="organizer_person">
            <div className="person">
              <div className="person_avatar">
                <img className="person_avatar_logo" src={person3} />
              </div>
              <div className="person_infomation">
                <p className="infomation_name"><strong>Trần Văn Anh Sơn</strong></p>
                <p className="infomation_position">1+ EXP Full-Stack Dev tại ACEXIS Joint Stock</p>
              </div>
            </div>
          </div>
          <div className="organizer_person">
            <div className="person">
              <div className="person_avatar">
                <img className="person_avatar_logo" src={person4} />
              </div>
              <div className="person_infomation">
                <p className="infomation_name"><strong>Tui Nè</strong></p>
                <p className="infomation_position">1+ EXP Dev NodeJS tại ACworks Co.,Ltd.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="detailed_content">
        <div className="detailer_content_dash"></div>
        <h1 className="detailer_content_title">Chương trình đào tạo</h1>
        <div>
          <div className="table">
            <div className="table_title">
              <h3>phần cơ bản</h3>
              <p>(không giới hạn số người tham dự)</p>
            </div>
            <div className="row_first">
              <div className="col_time_first">
                <span>Buổi 1</span>
              </div>
              <div className="col_activity_first">
                <ul>
                  <li>
                    <span>Ghi danh</span>
                  </li>
                  <li>
                    <span>Giới thiệu về ReactJS (reactjs.org)</span>
                  </li>
                  <li>
                    <span>Cài đặt môi trường cần thiết cho khóa học</span>
                  </li>
                  <li>
                    <span>Tạo React App đầu tiên ( Hello world!)</span>
                  </li>
                  <li>
                    <span>Tạo React App giới thiệu bản thân ( sử dụng html/css)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row_second">
              <div className="col_time_second">
                <span>Buổi 2</span>
              </div>
              <div className="col_activity_second">
                <ul>
                  <li>
                    <span>JSX là gì?</span>
                  </li>
                  <li>
                    <span>Biểu thức trong JSX</span>
                  </li>
                  <li>
                    <span>Render Element</span>
                  </li>
                  <li>
                    <span>Cập nhật React App của bạn ( sử dụng Object, Array, Biểu thức</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row_third">
              <div className="col_time_third">
                <span>Buổi 3</span>
              </div>
              <div className="col_activity_third">
                <ul>
                  <li>
                    <span>Component và Próp (Cách phân chia cấu trúc)</span>
                  </li>
                  <li>
                    <span>Composing Component</span>
                  </li>
                  <li>
                    <span>Extracting Components</span>
                  </li>
                  <li>
                    <span>Cập nhật React App của bạn (Phân chia theo Component và Props)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row_fourth ">
              <div className="col_time_fourth">
                <span>Buổi 5 - Buổi 6</span>
              </div>
              <div className="col_activity_fourth">
                <ul>
                  <li>
                    <span>State and Lifecycle</span>
                  </li>
                  <li>
                    <span>Định nghĩa state trong Class và Function</span>
                  </li>
                  <li>
                    <span>setState</span>
                  </li>
                  <li>
                    <span>Lifecycle</span>
                  </li>
                  <li>
                    <span>Điều kiện render - Rerender</span>
                  </li>
                  <li>
                    <span>Cập nhật React App của bạn (Hiển thị yêu thích và ghét với 1 button switch mode hiển thị)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row_fifth ">
              <div className="col_time_fifth">
                <span>Buổi 7 - Buổi 8</span>
              </div>
              <div className="col_activity_fifth">
                <ul>
                  <li>
                    <span>Xử lý sự kiện và Form</span>
                  </li>
                  <li>
                    <span>Lấy dữ liệu của Form</span>
                  </li>
                  <li>
                    <span>Refs</span>
                  </li>
                  <li>
                    <span>Tạo React App todo list (hiển thị danh sách công việc, thêm, sửa, xóa)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row_sixth ">
              <div className="col_time_sixth">
                <span>Buổi 9</span>
              </div>
              <div className="col_activity_sixth">
                <ul>
                  <li>
                    <span>API và fetch ở React</span>
                  </li>
                  <li>
                    <span>Sử dụng với API mặc định và với các API đã được chuẩn bị</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row_seventh ">
              <div className="col_time_seventh">
                <span>Buổi 10 - Buổi 11</span>
              </div>
              <div className="col_activity_seventh">
                <ul>
                  <li>
                    <span>React-router-dom</span>
                  </li>
                  <li>
                    <span>Cài đặt và thiết lập react-router-dom và React App</span>
                  </li>
                  <li>
                    <span>Bài tập cuối khóa (Quản lý các biểu mẫu khảo sát khách hàng)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
