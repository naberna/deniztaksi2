import React from 'react';
import { Container } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
background-color: #fff;
`;
export const Register = () => (
  <Styles>
      <Container>
      <div className="row">
            <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <form>
                <h4 className="title">Üyelik Formu</h4>
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                    <input type="text" className="form-control" placeholder="Adınız Soyadınız *" required />
                  </div>
                  <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                    <input type="text" className="form-control" placeholder="TC Kimlik No *" required />
                  </div>
                  <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                    <input type="text" className="form-control" placeholder="Eposta Adresiniz *" required />
                  </div>
                  <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                    <input type="text" className="form-control" placeholder="Adres Bilgisi" />
                  </div>
                  <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                    <input type="password" className="form-control" placeholder="Şifre *" />
                  </div>
                  <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                    <input type="password" className="form-control" placeholder="Şifre Tekrar *" />
                  </div>
                  <div className="col-12 col-md-12 col-lg-12 col-xl-12 check-box">
                    <input type="checkbox" className="form-control" id="clarification" name="clarification" value="clarification" />
                    <div for="clarification">Aydınlatma Metni Kabul Ediyorum.</div>        
                  </div>
                  <div className="col-12 col-md-12 col-lg-12 col-xl-12 check-box">
                    <input type="checkbox" className="form-control" id="kvkk" name="kvkk" value="kvkk" />
                    <div for="kvkk">KVKK kapsamında bilgilerimin kullanılmasını onaylıyorum. *</div>        
                  </div>
                  <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                    <span className="info-hide">Daha önceden hesap oluşturduysanız</span>
                        <button type="button" className="btn btn-primary register">
                        KAYIT OL
                    </button>
                  </div>
                  <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                    <span className="info">Daha önceden hesap oluşturduysanız</span>
                    <button type="button" className="btn btn-second register">
                        GİRİŞ YAP
                      </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                <div className="picture"></div>
            </div>
        </div>
      </Container>
  </Styles>
)
