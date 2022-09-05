import React from "react";
import { Container, Row, Col, Card, Accordion } from "react-bootstrap";
const FAQScreen = () => {
  return (
    <Container fluid>
      <Card style={{ margin: "20px", borderRadius: "30px" }}>
        <Card.Header
          className="text-center"
          style={{ borderRadius: "30px 30px 0px 0px" }}
        >
          <h4 style={{ color: "darkgreen" }}>cannabis legalities</h4>
          <h1>Cannabis FAQ</h1>
        </Card.Header>

        <Row style={{ margin: "20px" }}>
          {/* General Questions */}
          <Col>
            <Card
              style={{
                marginTop: "20px",
                padding: "20px",
                borderRadius: "30px",
              }}
            >
              <Card.Header className="align-self-center text-center">
                <i
                  className="fa-solid fa-question fa-4x"
                  style={{ color: "green", marginBottom: "20px" }}
                ></i>
                <br />
                <h5>General Questions</h5>
              </Card.Header>
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>How is this legal?</Accordion.Header>
                  <Accordion.Body>
                    The Constitutional right to privacy allows us to do what we
                    do. It was ruled by the South African Constitutional Court
                    in September 2018 that adults are have the right to grow and
                    consume cannabis, but this must be done privately and must
                    be for personal use. Seeing as the court recognizes that
                    private spaces exist outside the home, our service is
                    completely legal. We simply allow you rent a private plot of
                    land to grow the plant on. You are also able to sub-contract
                    our “Growing and Gardening Services” to make ensure that
                    it's AAA-grade quality Cannabis. In short, our service
                    strictly offers you the rental of space, as well as the
                    services provided by our cultivation experts.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>How do I become a member?</Accordion.Header>
                  <Accordion.Body>
                    The steps to becoming a CCSA member are easy! Simply scroll
                    down to our membership options and follow the instructions.
                    If you experience any issues signing up, feel free to
                    contact us through our contact. Once registered, the magic
                    can begin.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>How old do I have to be?</Accordion.Header>
                  <Accordion.Body>
                    As with alcohol and cigarettes, you must be of legal age to
                    possess cannabis. (18 years old) can begin.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    How many plants can I have?
                  </Accordion.Header>
                  <Accordion.Body>
                    Current laws only refer to the fact that cultivation must be
                    for personal use, but the judgement over the number of
                    plants allowed has not yet been determined. Quantities may
                    vary according to need, e.g., medicinal users may need to
                    larger amount in order to make their own oils at home. In
                    short, the quantity is entirely up to you.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>How much does it cost?</Accordion.Header>
                  <Accordion.Body>
                    Cannabis Club SA offers packages that each member can choose
                    from based on their required monthly amount of cannabis.
                    Members are eligible an abundance of exciting members-only
                    products as well as events and news. We've also made sure
                    that our members are able to enjoy high-end cannabis at
                    affordable prices.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    How do you grow my plants?
                  </Accordion.Header>
                  <Accordion.Body>
                    Our growers have all been carefully assessed to ensure that
                    they are producing the highest quality cannabis available.
                    We use equipment of the highest standards to grow and
                    maintain our plants, and we have an assigned manager who
                    travels to each of our facilities, making sure that the
                    equipment is always running at its best.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>
                    Why do I want more than 1 plant?
                  </Accordion.Header>
                  <Accordion.Body>
                    - As a member, purchasing a whole plant membership will
                    allow you to receive your cannabis at a fraction of the
                    current prices. Thus, using more than one plant
                    significantly reduces your overall production cost.
                    <br />- Sharing with friends or if you simply want more
                    cannabis each month for personal use.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
          </Col>

          {/* Quality Assurance  */}
          <Col>
            <Card
              style={{
                marginTop: "20px",
                padding: "20px",
                borderRadius: "30px",
              }}
            >
              <Card.Header className="align-self-center text-center">
                <i
                  className="fa-solid fa-check-double fa-4x"
                  style={{ color: "green", marginBottom: "20px" }}
                ></i>
                <br />
                <h5>Quality Assurance</h5>
              </Card.Header>
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    How do you control quality?
                  </Accordion.Header>
                  <Accordion.Body>
                    Only the best growers in the business are hand-picked by
                    Cannabis Club SA. Furthermore, the entire cultivation
                    process, as well as our equipment and final product, are
                    subject to constant inspections to ensure organic cannabis
                    of the highest quality.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    What makes our cannabis premium?
                  </Accordion.Header>
                  <Accordion.Body>
                    All of our cultivation techniques and equipment are focused
                    on high-yielding, lab-quality cannabis plants. We never
                    expose our members' cannabis to any form of toxins or
                    pesticides, and all of our growers make use of PPE
                    throughout the entire process of handling your cannabis.
                    This is to prevent your plant from ever being touched with
                    bare hands, since this would cause damage to the delicate
                    flowers by exposing them to natural oils that leak out from
                    the skin.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    What strains can I choose from?
                  </Accordion.Header>
                  <Accordion.Body>
                    Our relationships with experienced geneticists enable us to
                    offer you a wide variety of strains to choose from.
                    Different potency levels will cater to members' specific
                    needs. We are always on the lookout for new exotic
                    collections to add to our selection, and as a member, you
                    will always be informed of the availability of new strains
                    bred by our professional cultivators.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    Do I need to purchase seeds?
                  </Accordion.Header>
                  <Accordion.Body>
                    No. We work with genetics experts who donate all of the
                    club's genetics. Each subscription has a variety of strains
                    to choose from, so check back regularly to see the new
                    genetics we've added to our range.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
          </Col>

          {/* Security and Privacy  */}
          <Col>
            <Card
              style={{
                marginTop: "20px",
                padding: "20px",
                borderRadius: "30px",
              }}
            >
              <Card.Header className="align-self-center text-center">
                <i
                  className="fa-solid fa-lock fa-4x"
                  style={{ color: "green", marginBottom: "20px" }}
                ></i>
                <br />
                <h5>Security & Privacy</h5>
              </Card.Header>
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Is my personal data safe?</Accordion.Header>
                  <Accordion.Body>
                    We understand that discretion is important, thus CCSA treats
                    the data of its members with the utmost care in accordance
                    with the POPI Act of South Africa.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    What about monthly payments?
                  </Accordion.Header>
                  <Accordion.Body>
                    We offer our members monthly credit and debit card payments,
                    debit orders, and instant EFT's as payment options by using
                    Peach Payment to manage payment collections.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Can the police search my house?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, the police can search your home, but according to the
                    Constitutional Court clarification of the legal status of
                    searches and seizures without a warrant on 27 July 2016
                    (Minister of Police and others v Kunjana [2016] ZACC 21), a
                    search can only be conducted with a legal warrant.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default FAQScreen;
