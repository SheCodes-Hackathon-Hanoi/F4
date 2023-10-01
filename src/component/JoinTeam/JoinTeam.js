import React, { useState} from "react";import Drawer from '../Drawer';
import Header from '../Header';
import './JoinTeam.css'
import { useNavigate } from "react-router-dom";


function JoinTeam() {
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const payURL = 'https://checkout.stripe.com/c/pay/cs_test_a1xOCJAe8kxL6ZbRxTNqPEaJ8BnZM0QwdbYHfzZgZEPKJjhHH0K4IQd9DO#fidkdWxOYHwnPyd1blpxYHZxWjA0S3dHYlxDQmxBa2M1dFwwREFLak5zUGZzUG9qcW5zYUk8cDBNaGRLTk1GbEBgdGw9VEB2YjNPaGk3cVRjd1xiQEtAMG9EbmlRTnFmZEZXXUFHMlRVNDFiNTVVfWZEb0xAUicpJ3VpbGtuQH11anZgYUxhJz8ncWB2cVoxYnJmVXE2SVJgb0g3b2AxYm0nKSd3YGNgd3dgd0p3bGJsayc%2FJ21xcXV2PyoqaStjZGZgZ2pqbitmamgqJ3gl';

  return (
    <div className='JoinTeam'>
      <Drawer />
      <Header />
      <div className='MainSection1'>
        <h1>NHẬP CODE NHÓM HỌC TẬP CỦA BẠN NÀO</h1>
        <form>
            <input
              className="enter-code"
              type="text"
              value={code}
              onChange={(event) => setCode(event.target.value)}
            />
        </form>
        <button 
        className="enter-room-button"
        onClick={() => window.location.href = payURL}
        >Vào phòng</button>
      </div>
    </div>
  )
}

export default JoinTeam