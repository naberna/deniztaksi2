import { React, useState } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";

const Styles = styled.div`
  height: 500px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;

  .accordion {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  .accordion__heading .accordion__button {
    background-color: #fff;
    border-bottom: 1px dotted #ccc;
  }

  .accordion__heading .accordion__button:focus {
    outline: 0;
  }

  .accordion__button:before {
    color: #ff9a8d;
    font-weight: bold;
  }

  .accordion__item {
    background-color: #fff;
    color: #000;
  }
`;

export const FAQ = () => {
  const [FAQS, setFAQS] = useState([
    {
      title: "Deniz Taksi Nedir?",
      answer: `Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
       occaecat ut occaecat consequat est minim minim esse tempor laborum
       consequat esse adipisicing eu reprehenderit enim.`,
    },
    {
      title: "Deniz Taksi Güvenli midir?",
      answer: `Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
      occaecat ut occaecat consequat est minim minim esse tempor laborum
      consequat esse adipisicing eu reprehenderit enim..`,
    },
    {
      title: "Hava Alanı Karşılama Himeti Nedir?",
      answer: `Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
      occaecat ut occaecat consequat est minim minim esse tempor laborum
      consequat esse adipisicing eu reprehenderit enim..`,
    },
    {
      title: "Deniz Taksi'de Ödeme Nasıl Alınır?",
      answer: `Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
      occaecat ut occaecat consequat est minim minim esse tempor laborum
      consequat esse adipisicing eu reprehenderit enim..`,
    },
    {
      title: "Deniz Taksi'de Yeme İçme Koşulları Nelerdir?",
      answer: `Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
      occaecat ut occaecat consequat est minim minim esse tempor laborum
      consequat esse adipisicing eu reprehenderit enim..`,
    },
  ]);

  return (
    <Styles>
      <Container>
        <h4 className="title">Sıkça Sorulan Sorular</h4>
        <Accordion allowZeroExpanded={true}>
          {FAQS.map((FAQ, index) => (
            <AccordionItem
              dangerouslySetExpanded={FAQ.expanded}
              key={FAQ.title}
            >
              <AccordionItemHeading>
                <AccordionItemButton>{FAQ.title}</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>{FAQ.answer}</p>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Styles>
  );
};
