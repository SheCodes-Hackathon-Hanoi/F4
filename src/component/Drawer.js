import React from "react";
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

  const buttonStyle = {
    width: "200px",
    margin: "15px",
    backgroundColor: "#E1F0F8",
    borderRadius: "10px",
    padding: "16px",
    color: "black",
  };

  const navigate = useNavigate();

  return (
    <div>
      <Drawer anchor="left" variant="permanent">
        <div>
          <MenuIcon style={IconMenu} />
          <PersonIcon style={IconPerson} />
          <ul className="drawer-content">
            <li>
              <Button
                style={buttonStyle}
                onClick={() => {
                  navigate("/HomePage");
                }}
              >
                Trang chủ
              </Button>
            </li>
            <li>
              <Button
                style={buttonStyle}
                onClick={() => {
                  navigate("/AccountInfor");
                }}
              >
                Thông tin tài khoản
              </Button>
            </li>
            <li>
              <Button
                style={buttonStyle}
                onClick={() => {
                  navigate("/CreateTeam");
                }}
              >
                Tạo nhóm
              </Button>
            </li>
            <li>
              <Button
                style={buttonStyle}
                onClick={() => {
                  navigate("/JoinTeam");
                }}
              >
                Tham gia bằng mã
              </Button>
            </li>
            <li>
              <Button style={buttonStyle}>Đăng xuất</Button>
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
