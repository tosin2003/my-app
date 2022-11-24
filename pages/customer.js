


import { withIronSessionApiRoute } from "iron-session/next";

import { Link } from "@nextui-org/react";
import { NextUIProvider } from '@nextui-org/react';

import { Container, Card, Row, Text, Col, Spacer } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Button, Grid } from "@nextui-org/react";

export default function Customer() {

 // Handle the submit for the form
  async function handleSubmit(event) {

       alert("The form was submitted");
       event.preventDefault();
    

       // grab the variables from the form.
       const baconQty = document.querySelector('#baconQty').value
       const doghnutQty = document.querySelector('#doghnutQty').value
       const sandwichQty = document.querySelector('#sandwichQty').value
       const drinksQty = document.querySelector('#drinksQty').value




        // Get data from the form.
        const data = {
          baconQty: baconQty,
          doghnutQty: doghnutQty,
          drinksQty: drinksQty,
          sandwichQty: sandwichQty,

        }
    
        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)
    
        // API endpoint where we send form data.
        const endpoint = '/api/cart'


    
        // Form the request for sending data to the server.
        const options = {
          // The method is POST because we are sending data.
          method: 'POST',
          // Tell the server we're sending JSON.
          headers: {
            'Content-Type': 'application/json',
          },
          // Body of the request is the JSON data we created above.
          body: JSONdata,
        }

        
    
        // Send the form data to our forms API on Vercel and get a response.
        const response = await fetch(endpoint, options)
    
        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        const result = await response.json()
        
        alert(`server result: ${result}`)


    
  }
  
  
  
  return (
   <>

<NextUIProvider>
 <Container gap={0}>


      <Row gap={1}>
        <Col>
          <Card css={{ $$cardColor: '#32a852' }}>
            <Card.Body>
              <Text h6 size={25} color="white" css={{ m: 0 }}>
                 Customer Page
              </Text>
            </Card.Body>
          </Card>
        </Col>
       
      </Row>
      <Spacer y={1} />




      <Row gap={1}>
        <Col>
          <Card css={{ $$cardColor: '#32a852' }}>
            <Card.Body>
              <Text h6 size={15} color="white" css={{ m: 0 }}>
             
              </Text>
              <form onSubmit={handleSubmit}>
                Bacon Qty: <Input id="baconQty"></Input> 
               <p></p><br></br>
                Doghnut Qty: <Input id="doghnutQty"></Input> 
                <p></p><br></br>
                Sandwich Qty: <Input id="sandwichQty"></Input> 
                <p></p><br></br>
                Drinks Qty: <Input id="drinksQty"></Input>
                <p></p><br></br> 
                <Button type="submit">Place order</Button>
                </form>
              
              <br></br><p></p>
                <Link href="/checkout">
                  <Button type="submit">Checkout</Button>

                </Link>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

    </NextUIProvider>
   </>
  );
}

