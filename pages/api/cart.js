import { withIronSessionApiRoute } from "iron-session/next";



export default withIronSessionApiRoute(
    async function customer(req, res) {
      
     // get the variables that were sent over
     var baconQty = req.body.baconQty;
     var doghnutQty = req.body.doghnutQty;
     var sandwichQty = req.body.sandwichQty;
     var drinksQty = req.body.drinksQty;

     // add the items to the cart object.
      req.session.cart = {
        bacon: baconQty,
        Doghnut:doghnutQty,
        Sandwich: sandwichQty,
        Drinks: drinksQty,
       
      };
      await req.session.save();

      // send back a message that it went to plan!
      res.status(200).json("ok");




    },
    {
      cookieName: "myapp_cookiename",
      password: "complex_password_at_least_32_characters_long",
      // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
      cookieOptions: {
        secure: process.env.NODE_ENV === "production",
      },
    },
  );