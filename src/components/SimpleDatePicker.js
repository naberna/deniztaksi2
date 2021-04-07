import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

const Styles = styled.div`
.react-datepicker-wrapper,
.react-datepicker__input-container  {
    width: 100%;
}
  .react-datepicker-wrapper input {
    margin: 0 0 10px 0;
    height: 45px;
    width: 100%;
    padding: 0 12px;
    border: 1px solid #f0f0f0;
    border-radius: 8px;
    text-align: left;
    letter-spacing: 0.3px;
    background: #f0f0f0;
    color: #4a536b;
    position: relative;
  }

  .react-datepicker {
    z-index: 99;
  }

  .text {
    padding-top: 10px;
    padding-left: 5px;
    color: #4a536b;
    font-weight: bold;
  }
`;

export const SimpleDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <Styles>
      <div className="row">
        <div className="col-6">
          <div className="text">Gidiş Tarihi</div>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
          />
        </div>
        <div className="col-6">
        <div className="text">Dönüş Tarihi</div>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
          />
        </div>
      </div>
    </Styles>
  );
};
