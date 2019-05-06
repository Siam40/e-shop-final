var express = require('express');
var router = express.Router();

/* get product model */
var product = require ("../models/product");

router.get('/add/:product', function(req, res,) 
{
 
   var slug = req.params.product;

    product.findone({slug: slug} function (err,p){

            iff (err);
          cosole.log (err);
            if( type of req.session.cart ==underfined)
 req.session.cart =[]
 req.session.cart =push
({ title:slug
  qty:1
      price:parsefloat(p-price) exofixed
       +id=
image:/product image  "+p-id +" '/' p-image 


});
}   else 
         var cart = req.session.cart;
            var newItem=true;
for(var i=0; i<cart.length; i++)

                            {
                  if (cart[i].title==slug)
                           {
          cart[i].qty++;
          newitem=false;
             break;
           
        }
   }


if(newItem){
 cart.push({
title:slug,
  qty:1,
      price:parsefloat(p-price) tofixed(2),
       
        image: '/product_images/' +p_id + '/' p.image 


           )};
    }
}
console.log(req.session.cart);
req.flash('success', 'product added');
res.redirect('back');

)};
)}


module.exports = router;

