import React, { useState } from 'react';
import './Vote.css';
import Drawer from '../Drawer';
import Header from '../Header';
import { useNavigate } from 'react-router-dom';

function Vote() {
  const navigate = useNavigate();
  const teamNames = [
    'Nguyễn Mai Phương',
    'Nguyễn Thị Hà Giang',
    'Lê Thị Thảo Vân',
    'Nguyễn Dương Ánh',
  ];

  // State to store the completion status for each team
  const [completionStatus, setCompletionStatus] = useState(
    Array(teamNames.length).fill(false)
  );

  // Function to toggle the completion status for a team
  const toggleCompletionStatus = (index) => {
    const updatedStatus = [...completionStatus];
    updatedStatus[index] = !updatedStatus[index];
    setCompletionStatus(updatedStatus);
  };

  return (
    <div className="Room">
      <Drawer />
      <Header />
      <div className="MainSection2">
        <div className="room-name">NHÓM CƠ SỞ DỮ LIỆU</div>
        <div className="room-content">
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>Danh sách thành viên</th>
                  <th>Hoàn thành</th>
                  <th>Không hoàn thành</th>
                </tr>
              </thead>
              <tbody>
                {teamNames.map((teamName, index) => (
                  <tr key={index}>
                    <td><button className='button-name'>
                  <span className='circled-number'>{index + 1}</span>
                  {teamName}
                </button></td>
                    <td>
                      <input
                        type="checkbox"
                        checked={completionStatus[index]}
                        onChange={() => toggleCompletionStatus(index)}
                      />
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        checked={!completionStatus[index]}
                        onChange={() => toggleCompletionStatus(index)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="buttonnn">
          <button className="create" type="submit">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Vote;
