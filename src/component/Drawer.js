import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import AccountInfor from "./AccountInfor/AccountInfor";
import CreateTeam from "./CreateTeam/CreateTeam";
import JoinTeam from "./JoinTeam/JoinTeam";
import Room from "./Room/Room";
import Vote from "./Vote/Vote";

const PermanentDrawer = () => {
  const IconPerson = {
    marginLeft: "200px",
    fontSize: "50px",
  };

  const IconMenu = {
    fontSize: "50px",
  };

  const initialButtonState = {
    home: false,
    accountInfor: false,
    createTeam: false,
    joinTeam: false,
    logout: false,
  };

  const [buttonState, setButtonState] = useState(initialButtonState);

  const buttonStyle = {
    width: "200px",
    margin: "15px",
    borderRadius: "10px",
    padding: "16px",
    color: "black",
  };

  const redButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#F87C83",
  };

  const navigate = useNavigate();

  const handleButtonClick = (buttonName) => {
    // Reset all button states to false
    const updatedButtonState = { ...initialButtonState };
    // Set the clicked button state to true
    updatedButtonState[buttonName] = true;
    setButtonState(updatedButtonState);

    // Navigate to the appropriate page
    switch (buttonName) {
      case "home":
        navigate("/HomePage");
        break;
      case "accountInfor":
        navigate("/AccountInfor");
        break;
      case "createTeam":
        navigate("/CreateTeam");
        break;
      case "joinTeam":
        navigate("/JoinTeam");
        break;
      case "logout":
        // Handle logout logic here
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Drawer anchor="left" variant="permanent">
        <div>
          <MenuIcon style={IconMenu} />
          <PersonIcon style={IconPerson} />
          <ul className="drawer-content">
            <li>
              <Button
                style={buttonState.home ? redButtonStyle : buttonStyle}
                onClick={() => handleButtonClick("home")}
              >
                Trang chủ
              </Button>
            </li>
            <li>
              <Button
                style={buttonState.accountInfor ? redButtonStyle : buttonStyle}
                onClick={() => handleButtonClick("accountInfor")}
              >
                Thông tin tài khoản
              </Button>
            </li>
            <li>
              <Button
                style={buttonState.createTeam ? redButtonStyle : buttonStyle}
                onClick={() => handleButtonClick("createTeam")}
              >
                Tạo nhóm
              </Button>
            </li>
            <li>
              <Button
                style={buttonState.joinTeam ? redButtonStyle : buttonStyle}
                onClick={() => handleButtonClick("joinTeam")}
              >
                Tham gia bằng mã
              </Button>
            </li>
            <li>
              <Button
                style={buttonState.logout ? redButtonStyle : buttonStyle}
                onClick={() => handleButtonClick("logout")}
              >
                Đăng xuất
              </Button>
            </li>
          </ul>
        </div>
      </Drawer>
      <div>
        <p>Main Content</p>
      </div>
    </div>
  );
};

export default PermanentDrawer;
