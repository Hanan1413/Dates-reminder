
import React from "react";
import { Row, Col } from "react-bootstrap";

const DatesList = ({person}) => {
  return (
        <Row className=" py-3 justify-content-center">
          <Col sm="8" className>
            <div className=" rectangle p-2">
              {person.length ? (
                person.map((item) => {
                  return (
                    <div key={item.id} className="d-flex border-bottom mx-3 my-2">
                      <img
                        src={item.image}
                        alt="person"
                        className="img-avatar "
                      />
                      <div className="px-3">
                        <p className="d-inline fs-4"> {item.name}</p>
                        <p className="fs-6">{item.date}</p>
                      </div>
                    </div>
                  );
                })
              ) : (
                <h2 className="p-5 text-center"> لايوجد مواعيد اليوم</h2>
              )}
            </div>
          </Col>
        </Row> )
};

export default DatesList;








