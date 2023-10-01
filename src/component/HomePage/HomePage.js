import React from 'react';
import './HomePage.css';
import Drawer from '../Drawer';
import Header from '../Header';
import { useNavigate } from 'react-router-dom';


function HomePage() {
  const navigate = useNavigate();
  const teamNames = [
    'Nhóm cơ sở dữ liệu',
    'Nhóm kĩ thuật lập trình',
    'Nhóm Nhập môn Công Nghệ phần mềm',
    'Nhóm trí tuệ nhân tạo',
  ];

  return (
    <div className='HomePage'>
      <Drawer />
      <Header />
      <div className='MainSection'>
        <div className='left'>
          <h3>DANH SÁCH CÁC NHÓM HỌC TẬP CỦA BẠN</h3>
          <ul className='team-list'>
            {teamNames.map((teamName, index) => (
              <li key={index}>
                <button onClick={() => navigate("/Room")}>
                  <span className='circled-number'>{index + 1}</span>
                  {teamName}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className='right'>
          <h1>SỐ TIỀN ĐÃ ĐẦU TƯ VÀO HỌC TẬP</h1>
          <div className='total-money'>1500 VND</div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
