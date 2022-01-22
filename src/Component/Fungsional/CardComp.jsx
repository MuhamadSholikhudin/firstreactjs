import React from 'react';
import {Link} from 'react-router-dom';
import { Card, CardBody, CardTitle, CardImg, CardSubtitle, CardText, Button, Container, Row, Col, CardGroup} from 'reactstrap';

export default function CardComp(props) {
    return ( <div>
            
        <div>

            <Card>
                <CardImg
                    alt="Card image cap"
                    src="https://placeimg.com/640/480/any"
                    top
                    width="100%"
                />
                <CardBody>
                    <CardTitle tag="h5">{props.judul} </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        {props.tanggal}
                    </CardSubtitle>
                    <CardText>
                        This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
                    </CardText>
                    <Button>
                        <Link to={
                            {

                            
                            pathname : '/detail/' + props.id,
                            state : {
                                judul: props.judul,
                                tanggal: props.tanggal
                            }
                            }
                        }>

                        Detail
                        </Link>
                    </Button>
                </CardBody>
            </Card>
        </div>




        </div>
    )
}
