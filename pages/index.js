
import Link from 'next/link'

import {useRouter} from 'next/router'

                                                                                                                                  import { NextUIProvider } from '@nextui-org/react';
import { Input } from "@nextui-org/react";
import { Container, Card, Row, Text, Col, Spacer } from "@nextui-org/react";
import { Button, Grid } from "@nextui-org/react";

export default function Home({data}) {
  const router = useRouter()


  // Handle the submit for the form
  async function handleSubmit(event) {

    alert("The form was submitted");
    event.preventDefault();


    // grab the variables from the form.
    const name = document.querySelector('#username').value

    console.log("username is " + name);

    const pass = document.querySelector('#password').value

    console.log("password is " + pass);

        // Get data from the form.
        const data = {
          username: event.target.username.value,
          password: event.target.password.value,
        }
   
        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)
   
        // API endpoint where we send form data.
        const endpoint = '/api/login'


   
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

    // redirect based on the result
  if(result.includes("customer")){

    router.push("/customer");
  }
  else if(result.includes("manager")){

    router.push("/manager");
  } 
}

  async function handleSubmit2(event) {

    alert("The form was submitted");
    event.preventDefault();


    // grab the variables from the form.
    const name = document.querySelector('#username').value

    console.log("username is " + username);

    const pass = document.querySelector('#password').value

    console.log("password is " + password);

    const address = document.querySelector('#address').value

    console.log("address is " + address);

    const telephone = document.querySelector('#email').value

    console.log("email is " + email);

        // Get data from the form.
        const data = {
          username: event.target.username.value,
          password: event.target.password.value,
          address:event.target.address.value,
          email: event.target.email.value,
        }
   
        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)
   
        // API endpoint where we send form data.
        const endpoint = '/api/login'


   
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

    // redirect based on the result
  if(result.includes("customer")){

    router.push("/customer");
  }
  else if(result.includes("manager")){

    router.push("/manager");
  } 
}
  
  
  return (

    <NextUIProvider>
 <Container gap={0}>


      <Row gap={1}>
        <Col>
          <Card css={{ $$cardColor: '#32a852' }}>
            <Card.Body>
              <Text h6 size={25} color="white" css={{ m: 0 }}>
                 Krispy Kreme
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
              Register
              </Text>

              <Link href="/register">
               Register
             </Link>

            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card css={{ $$cardColor: '#32a852' }}>
            <Card.Body>
              <Text h6 size={15} color="white" css={{ m: 0 }}>
                  Login
            </Text>

            <Spacer y={5} />


            <form onSubmit={handleSubmit}>

              <Input id="username" clearable bordered labelPlaceholder="Username" initialValue="" />
              <br></br><p></p><br></br><p></p>
              <Input id="password" clearable bordered labelPlaceholder="Password" initialValue="" />
              <br></br><p></p><br></br>
              <Button type="submit" color="secondary" auto>
                Login
              </Button>

              </form>

            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card css={{ $$cardColor: '#32a852' }}>
            <Card.Body>
              <Text h6 size={15} color="white" css={{ m: 0 }}>
              <Spacer y={1} />
              </Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

    </NextUIProvider>
    
  )
}


