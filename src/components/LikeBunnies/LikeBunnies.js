import React from "react";
import { Container, Row } from "react-bootstrap";
import StreamChatMain from "../StreamChat/StreamChatMain";
import StreamHeader from "../StreamHeader/StreamHeader";
import StreamVedio from "../StreamVedio/StreamVedio";
import "./LikeBunnies.css";

const LikeBunnies = () => {
  return (
    <Container fluid className="likebunnies-main">
      <StreamHeader></StreamHeader>

      <Row className="px-4 pb-4">
        <div className="col-lg-8 col-md-12 ">
          <StreamVedio></StreamVedio>
        </div>
        <div className="col-lg-4 col-md-12">
          <StreamChatMain></StreamChatMain>
        </div>
      </Row>
    </Container>
  );
};

export default LikeBunnies;
