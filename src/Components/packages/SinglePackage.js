import React from 'react';
import {Card,Container,Row,Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './PackageCard.css'
import {Button } from "@material-ui/core";
import packageService from '../services/PackagesService';

const SinglePackage = ({pckg, onDelete}) => {
    return ( 
        <>
        <Container fluid>
            <Row className='d-flex mt-5 mb-5'>
            <Col lg={3}>
            <Card style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>{pckg.name}  </Card.Title>
            <Card.Text>{pckg.price}</Card.Text>
            <h2>
            <Button variant='contained'color="primary">Edit</Button>
            <Button variant='contained'
            color="secondary"
            onClick={(e) => {
                packageService
                  .deletePackage(pckg._id)
                  .then((data) => {
                    console.log(data);

                    onDelete();
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }
            }
            >Delete</Button>
            </h2>
            </Card.Body>
            </Card>
            </Col>
            </Row>
            <hr/>
        </Container>
    </>
     );
}
 
export default SinglePackage;