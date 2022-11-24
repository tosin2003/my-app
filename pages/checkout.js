import Link from 'next/link'
import { withIronSessionApiRoute } from "iron-session/next";
import { withIronSessionSsr } from "iron-session/next";
import { Container, Card, Row, Text, Col, Spacer } from "@nextui-org/react";


export default function Checkout({data}) {
  return (
    <>
             <Row gap={0}>
        <Col>
          <Card css={{ $$cardColor: '#32a852' }}>
            <Card.Body>
              <Text h6 size={25} color="white" css={{ m: 0 }}>
                Checkout
              </Text>
            </Card.Body>
          </Card>
        </Col>
       
      </Row>
    Hello there!
  
   
   <br></br>
   Thanks for the order!
    
   <br></br>
        {JSON.stringify(data)}

    </>
  )
}


// make a call to the API to get the cart data
// before the page loads



export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
  
  console.log("getting data from session..");
  console.log(req.session.cart);


  //put into the db
  const cart = req.session.cart;



     // Get data from the form.
     const data = {
      cart: cart,
    }

    return {
      props: {
        data: req.session.cart,
      },
      
    };
  }, // -------------------- All boilerplate code for sessions ------------------------------------
  {
    cookieName: "myapp_cookiename",
    password: "complex_password_at_least_32_characters_long",
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  },
);