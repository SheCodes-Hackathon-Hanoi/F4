import React, { useState } from 'react';
import './Room.css';
import Drawer from '../Drawer';
import Header from '../Header';
import { useNavigate } from 'react-router-dom';

function Room() {
  const navigate = useNavigate();
  const teamNames = [
    'Nguyễn Mai Phương',
    'Nguyễn Thị Hà Giang',
    'Lê Thị Thảo Vân',
    'Nguyễn Dương Ánh',
  ];

  // State để kiểm soát việc hiển thị pop-up và thời gian được nhập
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleCreateRoom = () => {
    // Xử lý logic tạo phòng học với thời gian đã nhập (hours và minutes)
    // Sau đó đóng pop-up
    closePopup();
  };

  return (
    <div className="Room">
      <Drawer />
      <Header />
      <div className="MainSection2">
        <div className="room-name">NHÓM CƠ SỞ DỮ LIỆU</div>
        <div className="room-content">
          <div className="left">
            <h3>DANH SÁCH THÀNH VIÊN</h3>
            <ul className="team-list">
              {teamNames.map((teamName, index) => (
                <li key={index}>
                  <button>
                    <span className="circled-number">{index + 1}</span>
                    {teamName}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="right">
            <h1>Còn lại</h1>
            <div className="in-a-row">
              <div className="circle">18</div>
              <p>Ngày</p>
            </div>
            <div className="in-a-row">
              <div className="circle">18</div>
              <p>Giờ</p>
            </div>
            <div className="in-a-row">
              <div className="circle">18</div>
              <p>Phút</p>
            </div>
            <h2>là đến hạn Vote</h2>
          </div>
        </div>
        <div className="buttonn">
          <button className="create" type="button" onClick={openPopup}>
            TẠO PHÒNG HỌC
          </button>
          <button className="cancel" type="submit" onClick={() => navigate('/Vote')}>
            VOTE KẾT QUẢ
          </button>
        </div>
      </div>

      {/* Hiển thị pop-up khi isPopupOpen là true */}
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <h3>Nhập thời gian học</h3>
            <label> Giờ:
              <input
              type="number"
              placeholder="Giờ"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
            />
            </label>
            <label> Phút:
              <input
              type="number"
              placeholder="Phút"
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
            />
            </label>
            <div className="button">
            <button className="create" type="submit" onClick={() => navigate("/Tracking")}>
              CREATE
            </button>
            <button className="cancel" type="submit" onClick={closePopup}>
              CANCEL
            </button>
          </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Room;
