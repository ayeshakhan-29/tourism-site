import React from 'react'
import {Container,Row ,Col} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import './PackageCard.css'
import SinglePackage from '../packages/SinglePackage';
// import axios from "axios";
import {Button } from "@material-ui/core";
import packageService from '../services/PackagesService';

const PackageCard = () => {

  const [packages, setPackages] = React.useState([]);
  
  const getData = () => {
    packageService
      .getPackages()
      .then((data) => {
        setPackages(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // getData();
  React.useEffect(getData, []);
  // React.useEffect(getData);
  console.log("Inside pckg components");
  
  return (
    <div>
      <h1>Packages</h1>
      {/* <Button variant='contained'color="primary">Add Package</Button> */}
      {/* <Link to="/packages/new" >Add new package</Link> */}
      {packages.length === 0 ? (
      <p>no pckgs</p>
      ) : ( 
      <Container>
        <Row>
        {packages.map((packages,index) => (
        <SinglePackage key={index}  pckg = {packages} onDelete={getData}/>
        ))} 
        </Row>
        </Container>
      )}
      
    </div>   
  );
};

export default PackageCard