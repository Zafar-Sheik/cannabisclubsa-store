import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import logo from "../../assets/logo.jpeg";
import logo2 from "../../assets/logo2.jpeg";
const AboutScreen = () => {
  return (
    <Container fluid className="p-5">
      <Card className="text-center" style={{ borderRadius: "30px" }}>
        <Card.Header>
          <h4 style={{ color: "darkgreen" }}>Who are we?</h4>
          <h1>Our Story</h1>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col className="align-self-center">
              <Card.Img
                src={logo}
                alt="logo"
                style={{
                  width: "15rem",
                  marginBottom: "20px",
                  border: "2px solid gold",
                  boxShadow: "2px 2px 5px 5px gold",
                  borderRadius: "30px",
                }}
              />
            </Col>

            <Col>
              <Card.Title
                style={{
                  border: "1px solid gray",
                  borderRadius: "30px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  padding: "10px",
                }}
              >
                Services
              </Card.Title>
              <Card.Subtitle
                style={{
                  marginBottom: "20px",
                  padding: "10px",
                }}
              >
                We offer individuals the opportunity to be part of a
                revolutionary change in South Africa's Cannabis Market
              </Card.Subtitle>
              <Card.Text>
                We allow members access to an exclusive, premium, legal platform
                to acquire their cannabis products. We give members the
                opportunity to have professional growers legally grow their
                plant's in a controlled environment, then dry, process and
                deliver their AAA flower securely to their door.
              </Card.Text>
              <Card.Text>
                Our club is built on the foundation, that all people should have
                the right to personal freedom, and the right to grow their own
                personal use Cannabis, as is allowed by our Constitution. We
                have simplified the process for them, by growing on their behalf
                in our private space, with specific areas dedicated to each
                member, and delivering their grown product to their chosen
                delivery address to enjoy in private.
              </Card.Text>
              <Card.Text>
                All of our members are protected under a members agreement,
                which allows us to grow on their behalf at our facility, and
                courier their personal property back to them. This ensures that
                all product produced, packaged and shipped by us, has followed
                all necessary legal routes to reach your door safely.
              </Card.Text>
            </Col>

            <Col className="align-self-center">
              <Card.Img
                src={logo2}
                alt="logo"
                style={{
                  width: "15rem",
                  marginTop: "20px",
                  border: "2px solid green",
                  boxShadow: "2px 2px 5px 5px green",
                  borderRadius: "30px",
                }}
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Image />
    </Container>
  );
};

export default AboutScreen;
