import React from 'react';
import { Link } from 'gatsby-plugin-i18next';
import { CardDeck, Card } from 'react-bootstrap';

const Developers = ({developers}) => (
    <>
        <h2>{developers}</h2>
        <CardDeck>
            <Card>
                <Card.Img variant="top" src="https://avatars2.githubusercontent.com/u/47743186?s=400&v=4" />
                <Card.Body>
                    <Card.Title>Андрей</Card.Title>
                    <Card.Text>
                        aksr666
                    </Card.Text>
                    <Card.Link href="https://github.com/aksr666" className="btn btn-outline-success">github</Card.Link>
                </Card.Body>
            </Card>

            <Card>
                <Card.Img variant="top" src="https://avatars3.githubusercontent.com/u/40288176?s=400&v=4" />
                <Card.Body>
                    <Card.Title>Александрина</Card.Title>
                    <Card.Text>
                        alexalizurchik
                    </Card.Text>
                    <Card.Link href="https://github.com/alexalizurchik" className="btn btn-outline-success">github</Card.Link>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://avatars2.githubusercontent.com/u/10222003?s=400&u=fb704e85df0b36d8ee9ea32b59683998a2589036&v=4" />
                <Card.Body>
                    <Card.Title>Максим</Card.Title>
                    <Card.Text>
                        Spinnen87
                    </Card.Text>
                    <Card.Link href="https://github.com/Spinnen87" className="btn btn-outline-success">github</Card.Link>

                </Card.Body>

            </Card>
            <Card>
                <Card.Img variant="top" src="https://avatars3.githubusercontent.com/u/47457295?s=400&v=4" />
                <Card.Body>
                    <Card.Title>Владислав</Card.Title>
                    <Card.Text>
                        plusch011
                    </Card.Text>
                    <Card.Link href="https://github.com/plusch011" className="btn btn-outline-success">github</Card.Link>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://avatars0.githubusercontent.com/u/41293675?s=400&v=4" />
                <Card.Body>
                    <Card.Title>Андрей</Card.Title>
                    <Card.Text>
                        presidentsboyfriend
                    </Card.Text>
                    <Card.Link href="https://github.com/presidentsboyfriend" className="btn btn-outline-success">github</Card.Link>
                </Card.Body>

            </Card>
        </CardDeck>
    </>

);

export default Developers;
