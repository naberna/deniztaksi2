import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { BsArrowLeftRight } from "react-icons/bs";
import { SimpleDatePicker } from "../SimpleDatePicker";

const Styles = styled.div`

  height: 0;

  .form-control:nth-child(1){
    margin-bottom: 1px;
  }  

  form {
    border-radius: 20px;
    margin-top: 40px;
  }

  .btn-group {
    background-color: #fff;
    border-color: #fff;
    color: #132968;
    font-weight: bold;
  }

  .round-arrow {
    display: flex;
    justify-content: center;
    z-index: 1;
  }

  .round-arrow button {
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: #f0f0f0;
    color: #4a536b;
    border: 2px solid #4a536b;
    position: absolute;
    z-index: 5;
    top: -20px;
  }

  .btn-group {
    margin: 10px 0;
  }
`;

export const TravelForm = () => (
  <Styles>
    <Container>
      <div className="row">
        <div className="col-5"></div>
        <form className="col-7 shadow p-3 mb-5 bg-white rounded">
          <div className="btn-group">
            <div>
              <select className="form-select">
                <option selected>Tek-Yön</option>
                <option value="1">Tek-Yön</option>
                <option value="2">Çift-Yön</option>
              </select>
            </div>
            <div>
              <select className="form-select">
                <option selected>1 Yetişkin</option>
                <option value="1">Tek-Yön</option>
                <option value="2">Çift-Yön</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <input
                name="firstStation"
                placeholder="İlk Durak"
                className="form-control"
              />
            </div>
            <div className="col-12 round-arrow">
              <button>
                <BsArrowLeftRight />
              </button>
            </div>
            <div className="col-12">
              <input
                name="firstStation"
                placeholder="Son Durak"
                className="form-control"
              />
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-md-5">
                </div>
                <div className="col-md-5">
                </div>
              </div>
            </div>
            <div className="col-12">
              <SimpleDatePicker/>
            </div>
            <div className="col-4">
              <button type="submit" class="btn button-primary">
                Rezervasyon Yap
              </button>
            </div>
          </div>
        </form>
      </div>
    </Container>
  </Styles>
);
