import React from "react";
import Meta from "../../Meta";
import {
  Container,
  Row,
  Col,
  Button,
  Image,
  Accordion,
  Form,
} from "react-bootstrap";

import strain1 from "../../../assets/strain-1.jpg";
import strain2 from "../../../assets/strain-2.jpg";
import strain3 from "../../../assets/strain-3.jpg";

import "./HomeScreen.css";
import ProductCarousel from "../../ProductCarousel";

const HomeScreen = () => {
  return (
    <>
      <Meta />
      {/* Why Join */}
      <Container fluid>
        <Row>
          <Col className="align-self-center text-center p-5">
            <i
              style={{ color: "darkgreen" }}
              className="fa-solid fa-cannabis fa-4x"
            ></i>

            <h3 className="p-4" style={{ color: "green" }}>
              welcome to the club
            </h3>

            <h1>Why Join A Growing Club?</h1>
          </Col>

          <Col className="align-self-center text-center p-5">
            <p>
              We are a unique, members only club giving members access to prime,
              legal cannabis products. Cannabis Club SA provides our members
              access to professional farmers who will legally grow, dry and
              process their plants in optimum environments. Flowers are then
              safely delivered to your doorstep.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Details Secure Delivery Affordable Quality 100% Legal */}
      <Container fluid className="details-container">
        <Row>
          <Col className="text-center p-2 m-5 bg-transparent detail-card">
            <i
              className="fa-solid fa-box-open fs-1 p-3"
              style={{ color: "gold" }}
            ></i>
            <h3 className="text-light">Secure Delivery</h3>
            <p className="text-light">
              Safe and reliable nationwide delivery of quality cannabis to your
              doorstep
            </p>
          </Col>
          <Col className="text-center p-2 m-5 bg-transparent detail-card">
            <i
              className="fa-solid fa-sack-dollar fs-1 p-3"
              style={{ color: "gold" }}
            ></i>
            <h3 className="text-light">Affordable Quality</h3>
            <p className="text-light">
              Relish premium cannabis products at the best prices
            </p>
          </Col>
          <Col className="text-center p-2 m-5 bg-transparent detail-card">
            <i
              className="fa-regular fa-circle-check fs-1 p-3"
              style={{ color: "gold" }}
            ></i>
            <h3 className="text-light">Quality Controlled</h3>
            <p className="text-light">
              Experienced growers delicately farming potent strains
            </p>
          </Col>
          <Col className="text-center p-2 m-5 bg-transparent detail-card">
            <i
              className="fa-solid fa-scale-balanced fs-1 p-3"
              style={{ color: "gold" }}
            ></i>
            <h3 className="text-light">100% Legal</h3>
            <p className="text-light">
              A full proof concept with extensive legal research designed to
              deliver cannabis products to club members
            </p>
          </Col>
        </Row>
      </Container>

      {/* Products */}
      <Container
        fluid
        style={{
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        <Container
          fluid
          className="text-center"
          style={{ marginTop: "50px", marginBottom: "50px" }}
        >
          <h4 style={{ color: "darkgreen" }}>our products</h4>
          <h1>Top Selling</h1>
        </Container>

        <ProductCarousel />

        <Container fluid className="text-center" style={{ marginTop: "50px" }}>
          <Button
            href="/products"
            style={{ backgroundColor: "darkgreen", borderRadius: "30px" }}
          >
            All Products
          </Button>
        </Container>
      </Container>

      {/* Bud Strains */}
      {/* <Container fluid className="text-center p-5">
        <Container fluid style={{ marginBottom: "50px" }}>
          <h1>Bud Strains</h1>
          <h5>
            Our members have access to the most exotic and potent strains of
            cannabis available
          </h5>
        </Container>

        <Row
          className="text-center"
          style={{
            boxShadow: "2px 2px 5px 5px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <Col className="p-3">
            <Image className="strain-image" src={strain1} alt="Strain1" />
          </Col>
          <Col className="p-3">
            <Image className="strain-image" src={strain2} alt="Strain2" />
          </Col>
          <Col className="p-3">
            <Image className="strain-image" src={strain3} alt="Strain3" />
          </Col>
        </Row>

        <Container fluid className="text-center" style={{ marginTop: "50px" }}>
          <Button
            href="/products"
            style={{ backgroundColor: "darkgreen", borderRadius: "30px" }}
          >
            More Strains
          </Button>
        </Container>
      </Container> */}

      {/* Delivery */}
      <Container fluid className="delivery-container p-5">
        <h4 className="delivery-color">Delivery Information</h4>
        <h2 className="text-white">Delivery Services</h2>

        <Row>
          <Col>
            <i className="fa-solid fa-boxes-stacked delivery-color fa-4x m-5"></i>
          </Col>
          <Col className="text-white fs-3 m-5">
            Express overnight delivery service <br />
            We offer overnight shipping nationwide <br />
            Doorstep delivery within 48 hours
          </Col>
        </Row>
        <Row>
          <Col>
            <i className="fa-solid fa-envelopes-bulk delivery-color fa-4x m-5"></i>
          </Col>
          <Col className="text-white fs-3 m-5">
            Email us for delivery information <br />
            info@cannabisclubsa.com
          </Col>
        </Row>
      </Container>

      {/* Legalities  */}
      <Container fluid>
        <Container
          fluid
          className="text-center"
          style={{ marginTop: "50px", marginBottom: "50px" }}
        >
          <h4 style={{ color: "darkgreen" }}>Legalities</h4>
          <h1>Cannabis Laws</h1>
        </Container>

        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Legalities</Accordion.Header>
            <Accordion.Body>
              The Constitutional right to privacy allows us to do what we do. It
              was ruled by the South African Constitutional Court in September
              2018 that adults are have the right to grow and consume cannabis,
              but this must be done privately and must be for personal use.
              Seeing as the court recognizes that private spaces exist outside
              the home, our service is completely legal. We simply allow you
              rent a private plot of land to grow the plant on. You are also
              able to sub-contract our “Growing and Gardening Services” to make
              ensure that it's AAA-grade quality Cannabis. In short, our service
              strictly offers you the rental of space, as well as the services
              provided by our cultivation experts.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Membership</Accordion.Header>
            <Accordion.Body>
              The steps to becoming a CCSA member are easy! Simply scroll down
              to our membership options and follow the instructions. If you
              experience any issues signing up, feel free to contact us through
              our contact. Once registered, the magic can begin.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Farming</Accordion.Header>
            <Accordion.Body>
              Current laws only refer to the fact that cultivation must be for
              personal use, but the judgement over the number of plants allowed
              has not yet been determined. Quantities may vary according to
              need, e.g., medicinal users may need to larger amount in order to
              make their own oils at home. In short, the quantity is entirely up
              to you.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Age Restrictions</Accordion.Header>
            <Accordion.Body>
              As with alcohol and cigarettes, you must be of legal age to
              possess cannabis, i.e., 18 years old.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Prices</Accordion.Header>
            <Accordion.Body>
              Cannabis Club SA offers packages that each member can choose from
              based on their required monthly amount of cannabis. Members are
              eligible an abundance of exciting members-only products as well as
              events and news. We’ve also made sure that our members are able to
              enjoy high-end cannabis at affordable prices.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Container
          fluid
          className="text-center"
          style={{
            border: "1px solid green",
            borderRadius: "30px",
            padding: "10px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <h2>Is Cannabis Legal in South Africa?</h2>
          <p>
            While the Western Cape High Court Judgement of March 2017 and the
            Constitutional Court validation of that ruling in September 2018
            states that cannabis has been decriminalised in South Africa, this
            is not the same as legalisation.
          </p>
        </Container>

        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Can I give cannabis as a gift?</Accordion.Header>
            <Accordion.Body>
              While you don't need a licence to gift someone a bottle of wine
              without being accused of illicit dealing, some officials and
              prosecutors may still consider the gifting of cannabis to be
              dealing. Thus, gifting is still a bit of an obscure area.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Can I take cannabis on a domestic flight?
            </Accordion.Header>
            <Accordion.Body>
              According to Section 10.1 of the South African police services
              directive 1/1/4/1, possession of cannabis for personal
              consumption, by an adult passenger on a domestic flight, is
              permitted, provided that the quantity is small and based on all
              the circumstances of a particular situation (this includes the
              concealment of the cannabis in a bag or luggage of a passenger).
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Where can I buy cannabis?</Accordion.Header>
            <Accordion.Body>
              According to current laws, one can grow, possess and use cannabis
              for personal use. However, you cannot yet legally purchase
              cannabis.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>

      {/* Subscribe */}
      <Container fluid className="subscribe-container">
        <h5 style={{ color: "white" }}>subscribe to our newsletter</h5>
        <h3 style={{ color: "white" }}>Subscribe Here</h3>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter email"
              style={{ borderRadius: "30px" }}
            />
          </Form.Group>
          <Container fluid style={{ marginTop: "20px" }}>
            <Button
              style={{ backgroundColor: "darkgreen", borderRadius: "30px" }}
            >
              Submit
            </Button>
          </Container>
        </Form>
      </Container>
    </>
  );
};

export default HomeScreen;
