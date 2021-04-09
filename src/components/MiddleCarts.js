import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdAirportShuttle } from "react-icons/md";
import { MdLocalAirport } from "react-icons/md";
import { RiShipLine } from "react-icons/ri";
import { Container } from "react-bootstrap";

const Styles = styled.div`
  
  .cart {
    padding: 20px;
    text-align: center;
    // box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    margin-bottom: 20px;
    z-index: -1;
  }

  .cart .info a {
    color: #ff9a8d;
    text-decotation: none;
    margin: 10px 0;
  }

  .cart .info a:hover {
    text-decoration: none;
    color: #aed6dc;
  }

  .cart a img {
    width: 100%;
    height: 100%;
  }

  .cart svg {
    width: 40px;
    height: 40px;
    color: #4a536b;
  }

  @media screen and (max-width:768px){ 
    .cart {
      margin: 0;
    }
  }
`;

export default function MiddleCarts() {
  return (
    <Styles>
      <Container>
        <div className="row">
          <div className="col-12 col-md-4 col-lg-4 col-xl-4 cart">
            <div className="row">
              <div className="col-12">
                <RiShipLine />
              </div>
              <h5 className="col-12 sub-title">Deniz Taksi</h5>
              <div className="col-12 text">
                Deniz Taksi İstanbul Boğazı ve Adalar'da iskelesi olan her yere,
                sadece size ve konuklarımıza özel 10 kişilik katamaran tipi dört
                mevsim güvenli yolculuk sağlayan araçlarla 7/24 en hızlı ve
                konforlu ulaşım sunuyor.
              </div>
              <div className="col-12 info mt-auto">
                <Link to="/">Ayrıntılı bilgi için</Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-4 col-xl-4 cart">
            <div className="row">
              <div className="col-12">
                <MdLocalAirport />
              </div>
              <h5 className="col-12 sub-title">Havaalanı Transferi</h5>
              <div className="col-12 text">
                Deniz Takis ve 6-7 kişilik VIP araçlarla, İstanbul Boğazı ve
                Adalar'da istediğiniz iskeleden Bakırköy İskeles aktarmalı
                olarak İstanbul atatürk ve Sabiha Gökçen havaalanlarına köprü ve
                şehiriçi trafiğine takılmadan en hızlı ve konforlu şekilde
                ulaşabilir, havaalanlarında karşılama hizmetinden
                yararlanabilirsiniz.
              </div>
              <div className="col-12 info mt-auto">
                <Link to="/">Ayrıntılı bilgi için</Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-4 col-xl-4 cart">
            <div className="row">
              <div className="col-12">
                <MdAirportShuttle />
              </div>
              <h5 className="col-12 sub-title">Servis</h5>
              <div className="col-12 text">
                Deniz Takis ve 6-7 kişilik VIP araçlarla, İstanbul Boğazı ve
                Adalar'da istediğiniz iskeleden Bakırköy İskeles aktarmalı
                olarak İstanbul atatürk ve Sabiha Gökçen havaalanlarına köprü ve
                şehiriçi trafiğine takılmadan en hızlı ve konforlu şekilde
                ulaşabilir, havaalanlarında karşılama hizmetinden
                yararlanabilirsiniz.
              </div>
              <div className="col-12 info mt-auto">
                <Link to="/">Ayrıntılı bilgi için</Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Styles>
  );
}
