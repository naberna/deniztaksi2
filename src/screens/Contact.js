import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { FiPhoneCall, FiMail, FiMap } from "react-icons/fi";

const Styles = styled.div`
  background-color: #fff;

  .contact {
    padding: 0 0 20px 0;
  }
  .contact-info {
    padding: 20px 0;
    text-align: center;
  }

  .info {
    font-size: 16px;
    font-weight: bold;
  }

  .mark1,
  .mark2,
  .mark3 {
    margin: 10px 0 5px 0;
  }

  .mark1 {
    background-color: #fde1d1;
  }
  
  .mark2 {
    background-color: #dfe3ff;
  }
  
  .mark3 {
    background-color: #d7ffed;
  }

  .form-control,
  textarea {
    margin-bottom: 10px;
  }

  svg {
    height: 40px;
    width: 40px;
    color: #aed6dc;
  }

  .contact-form {
    margin: 20px 0;
  }
`;

export const Contact = () => (
  <Styles>
    <Container>
      <div className="contact">
        <h4 className="title">İletişim</h4>
        <div className="row contact-info">
          <div className="col-12 col-md-4 col-lg-4 col-xl-4">
            <div><FiPhoneCall/></div>
            <div className="mark1">Telefon Numarası</div>
            <div className="info">0850 000 00 00</div>
          </div>
          <div className="col-12 col-md-4 col-lg-4 col-xl-4">
            <div><FiMail/></div>
            <div className="mark2">E-mail</div>
            <div className="info">example@deniztaksi.com</div>
          </div>
          <div className="col-12 col-md-4 col-lg-4 col-xl-4">
            <div><FiMap/></div>
            <div className="mark3">Adres</div>
            <div className="info">Example Address</div>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <div className="row">
              <div className="col-12 col-md-8 col-lg-8 col-xl-8">
                <h5 className="sub-title">İletişim Formu</h5>
                <div className="row">
                  <div class="col-12 col-md-6 col-lg-6 col-xl-6">
                    <input
                      name="name-surname"
                      placeholder="Adınız Soyadınız"
                      className="form-control"
                    />
                  </div>
                  <div class="col-12 col-md-6 col-lg-6 col-xl-6">
                    <input
                      name="phone"
                      placeholder="Telefon Numarası"
                      className="form-control"
                    />
                  </div>
                  <div class="col-12 col-md-6 col-lg-6 col-xl-6">
                    <input
                      name="mail"
                      placeholder="Mail Adresiniz"
                      className="form-control"
                    />
                  </div>
                  <div class="col-12 col-md-6 col-lg-6 col-xl-6">
                    <input
                      name="subject"
                      placeholder="İletişim Konusu"
                      className="form-control"
                    />
                  </div>
                  <div class="col-12">
                    <textarea
                      id="textArea"
                      placeholder="Mesajınız"
                      rows="4"
                    ></textarea>
                  </div>
                  <div className="col-4">
                    <button type="submit" class="btn btn-primary">
                      Formu Tamamla
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-4 col-lg-4 col-xl-4">
                <h5 class="sub-title">Neredeyiz?</h5>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Container>
  </Styles>
);
