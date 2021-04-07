import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { BiMailSend } from "react-icons/bi";
import { MdDateRange, MdDoneAll, MdDone } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";

const Styles = styled.div`
  padding: 40px 0;
  background-color: #fff;

  .vertical-process .row {
    justify-content: center;
  }

  .box {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.13);
    width: 100%;
    height: auto;
    margin: 20px 0;
    padding: 20px;
    border-radius: 8px;
    background-color: #f0f0f0;
  }

  .box.left {
    text-align: right;
  }

  .box.right {
    text-align: left;
  }

  .box.left .icon,
  .box.right .icon {
    color: #aed6dc;
    text-align: center;
    margin-bottom: 10px;
  }

  .box.left .icon svg,
  .box.right .icon svg {
    width: 40px;
    height: 40px;
  }

  .line {
    width: 100%;
    height: auto;
    position: relative;
    display: flex;
    justify-content: center;
  }
  .line:before {
    content: "";
    width: 3px;
    height: 100%;
    display: block;
    left: 50%;
    position: absolute;
    background-color: #f0f0f0;
  }

  .line .circle {
    position: absolute;
    height: 25px;
    width: 25px;
    background-color: #ff9a8d;
    border-radius: 50%;
    margin-left: 3px;
    display: inline-block;
    vertical-align: middle;
    top: 49%;
  }
`;
export const About = () => (
  <Styles>
    <div className="vertical-process">
      <Container>
        <h4 className="title">Hakkımızda</h4>
        <div className="row">
          <div className="col-5 box left">
            <div className="icon">
              <BiMailSend />
            </div>
            <div className="description">
              'Rezervasyon Yap' seçeneğiyle sistemimiz üzerinden 7/24 veya
              rezervasyon@deniztaksi.com adresine mail göndererek rezarvasyon
              yaptırabilirsiniz.
            </div>
          </div>
          <div className="col-2 line">
            <div className="circle"></div>
          </div>
          <div className="col-5 right"></div>
        </div>
        <div className="row">
          <div className="col-5 left"></div>
          <div className="col-2 line">
            <div className="circle"></div>
          </div>
          <div className="col-5 box right">
            <div className="icon">
              <MdDateRange />
            </div>
            <div className="description">
              Anlık ya da İleri tarihli Deniz Taksi talebinde bulunabilirsiniz.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-5 box left">
            <div className="icon">
              <BsInfoCircle />
            </div>
            <div className="description">
              Rezervasyon işleminin tamamlanabilmesi için istenen saat, tarih,
              kalkış iskelesi ve yolcu iletişim bilgilerini eksiksiz
              girdiğinizden emin olun.
            </div>
          </div>
          <div className="col-2 line">
            <div className="circle"></div>
          </div>
          <div className="col-5 right"></div>
        </div>
        <div className="row">
          <div className="col-5 left"></div>
          <div className="col-2 line">
            <div className="circle"></div>
          </div>
          <div className="col-5 box right">
            <div className="icon">
              <MdDone />
            </div>
            <div className="description">
              Rezervasyon işleminin tamamlanmasının hemen ardından onay mesajı
              kullanıcılara mail yolu ile iletilmektedir.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-5 box left">
            <div className="icon">
              <MdDoneAll />
            </div>
            <div className="description">Rezarvasyon tamamlandı.</div>
          </div>
          <div className="col-2 line">
            <div className="circle"></div>
          </div>
          <div className="col-5 right"></div>
        </div>
      </Container>
    </div>
  </Styles>
);
