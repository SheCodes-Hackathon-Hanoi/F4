import React, { useState, useEffect } from "react";
import "./Tracking.css";
import "react-datetime/css/react-datetime.css";
import Drawer from "../Drawer";
import Header from "../Header";
function Tracking() {
    const [isVisible, setIsVisible] = useState(false);
    const [time, setTime] = useState(120);
    const [showDiv, setShowDiv] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    if (time === 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [time]);

  const formatTime = () => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const [randomCode, setRandomCode] = useState(generateRandomCode());
  const [inputValue, setInputValue] = useState("");
  const [showCode, setShowCode] = useState(true);

  // Hàm tạo mã ngẫu nhiên gồm 8 số
  function generateRandomCode() {
    const code = Math.floor(10000000 + Math.random() * 90000000);
    return code.toString().slice(0, 5);
  }

  // Xử lý sự kiện khi người dùng nhập vào input
  function handleChange(event) {
    setInputValue(event.target.value);
  }

  // Xử lý sự kiện khi người dùng submit
  function handleSubmit(event) {
    event.preventDefault();

    if (inputValue === randomCode) {
      setShowCode(false);

      // Reset inputValue
      setInputValue("");

      // Reset isVisible after successful submission
      setIsVisible(false);

      // Random time to show again
      const showDivTimeout = setTimeout(() => {
        setIsVisible(true);
        setRandomCode(generateRandomCode()); // Generate a new random code
      }, Math.random() * 20000);

      return () => {
        clearTimeout(showDivTimeout);
      };
    };
};
  
  // Random thời gian

  useEffect(() => {
    // Random hiển thị ban đầu
    const showDivTimeout = setTimeout(() => {
      setIsVisible(true);
    }, Math.random() * 20000);

    return () => clearTimeout(showDivTimeout);
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Nếu isVisible đang hiển thị, thì sẽ thiết lập thời gian biến mất
      const hideDivTimeout = setTimeout(() => {
        setIsVisible(false);
      }, 60000); // Thời gian biến mất sau 1 phút

      // Sau khi đã ẩn, hãy đặt thời gian cho việc hiển thị ngẫu nhiên tiếp theo
      const repeatTimeout = setTimeout(() => {
        setIsVisible(true);
      }, Math.random() * 20000); // Thời gian xuất hiện trong khoảng từ 0 đến 20 giây

      return () => {
        clearTimeout(hideDivTimeout);
        clearTimeout(repeatTimeout);
      };
    }
  }, [isVisible]);

  return (
    <div className="Tracking">
      <Drawer />
      <Header />
      <div className="MainSection1">
        <div className="text11"> Thời gian còn lại:</div>
        <p className="CountDown">{time !== 0 ? formatTime() : "00:00:00"}</p>
        <div className="codeVerify">
          {isVisible && (
            <div className="">
              {showCode && (
                <div>
                  <h1 className="text2">
                    Bạn hãy nhập lại mã này để xác nhận :
                  </h1>
                  <p className="RandomCode">{randomCode}</p>
                </div>
              )}

              {showCode && (
                <form onSubmit={handleSubmit} className="row">
                  <div className="col-60">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-40">
                    <button type="submit">Xác nhận</button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


export default Tracking;