
import React from "react";
import { Row, Col, Button  } from "react-bootstrap";

const DatesAction = ({ deleteData, showData }) => {
  return (
    <Row className=" justify-content-center">
      <Col sm="8" className="d-flex justify-content-between">
        <Button className="btn-style" onClick={deleteData}>
          مسح الكل
        </Button>
        <Button className="btn-style" onClick={showData}>
          
          عرض البيانات
        </Button>
      </Col>
    </Row>
  );
};

export default DatesAction;


 