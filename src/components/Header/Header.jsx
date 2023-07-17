import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <div className='py-3 mt-1 flex-row bg-custom'>
      <Container>
      <Row>
          <Col xs={5}>
            <div className="left-bar">
            <h4>My Dashboard</h4>
            </div>
          </Col>
          <Col xs={4} md={6} className="">
            <div className="center-content d-none d-md-block">
              <Button variant="secondary border border-primary border-1">My Dashboard</Button>{' '}
              <Button variant="gray border border-primary border-1">Activity Feed</Button>
            </div>
          </Col>
          <Col xs={2} md={1}>
            <div className="custom">
              <Button variant="gray border border-primary border-1">+ Wight</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Header;