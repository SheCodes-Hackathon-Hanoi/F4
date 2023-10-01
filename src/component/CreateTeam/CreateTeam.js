import React, { useState } from "react";
import "./CreateTeam.css";
import Datetime from "react-datetime";
import { DatetimepickerProps } from "react-datetime";
import "react-datetime/css/react-datetime.css";
import Drawer from "../Drawer";
import Header from "../Header";
import { useNavigate } from "react-router-dom";

function CreateTeam() {
  const navigate = useNavigate();
  const [teamName, setTeamName] = useState("Tên nhóm học tập hoặc môn học");
  const [money, setMoney] = useState("50000");
  const [deadLine, setDeadLine] = useState("");
  const [VoteTime, setVoteTime] = useState("");

  function handleDeadLineChange(event) {
    setDeadLine(event.target.value);
  }

  function handleVoteTimeChange(event) {
    setVoteTime(event.target.value);
  }
  const handleCancel = () => {
    setTeamName = "";
    setMoney = "";
    setDeadLine = null;
    setVoteTime = null;
  };

  const handleSave = async (e) => {};
  return (
    <div className="CreateTeam">
      <Drawer />
      <Header />
      <div className="MainSection">
        <form className="FormCreateTeam">
          {/* Tên nhóm */}
          <div className="row1">
            <div className="col-40">
              <label>Tên nhóm học: </label>
            </div>
            <div className="col-60">
              <input type="text" required on onChange={(e) => setTeamName} />
            </div>
          </div>
          {/* Tiền */}
          <div className="row1">
            <div className="col-40">
              <label> Số tiền bạn cam kết việc hoàn thành: </label>
            </div>
            <div className="col-60">
              <input type="text" required on onChange={(e) => setMoney} />
            </div>
          </div>
          {/* Deadline */}
          <div className="row1">
            <div className="col-40">
              <label htmlFor="VoteTime">Deadline hoàn thành:</label>
            </div>
            <div className="col-60">
              <input
                className="TimeCloseQuiz"
                type="datetime-local"
                name="partydate"
                value={VoteTime}
                onChange={handleDeadLineChange}
              />
            </div>
          </div>
          {/* VoteTime */}
          <div className="row1">
            <div className="col-40">
              <label htmlFor="VoteTime">Deadline chấm điểm mỗi cá nhân:</label>
            </div>
            <div className="col-60">
              <input
                className="TimeCloseQuiz"
                type="datetime-local"
                name="partydate"
                value={VoteTime}
                onChange={handleVoteTimeChange}
              />
            </div>
          </div>

          <div className="button">
            <button className="create" type="submit" onClick={() => navigate("/Room")}>
              CREATE
            </button>
            <button className="cancel" type="submit" onClick={handleCancel}>
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateTeam;