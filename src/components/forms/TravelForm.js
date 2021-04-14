import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { BsArrowLeftRight } from "react-icons/bs";
import { SimpleDatePicker } from "../SimpleDatePicker";

const Styles = styled.div`
  height: 0;

  form {
    border-radius: 20px;
  }

  .btn-group {
    background-color: #fff;
    border-color: #fff;
    color: #132968;
    font-weight: bold;
    margin: 10px 0;
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
    margin-top: 4px;
  }

  form .button-primary {
    margin-top: 41px;
    height: 48px;
  }
`;

export const TravelForm = () => (
  <Styles>
    <Container>
      <div className="row">
        <form className="col-sm-12 col-md-12 col-lg-12 col-xl-12 shadow p-3 mb-5 bg-white rounded">
          <div className="row">
            <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5">
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
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <input
                    name="firstStation"
                    placeholder="İlk Durak"
                    className="form-control"
                  />
                </div>
                <div className="round-arrow">
                  <button>
                    <BsArrowLeftRight />
                  </button>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <input
                    name="firstStation"
                    placeholder="Son Durak"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-5 col-xl-5">
              <SimpleDatePicker />
            </div>
            <div className="col-12 col-md-2 col-lg-2 col-xl-2">
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
