'use strict';

const { describe, it, before, after } = require('mocha');
const assert = require('assert');
const { handler: getCart } = require('../functions/getCart');
const fixtures = require('./fixtures');
const mongoose = require('mongoose');



describe('Get the cart given an id', function() {
  before(async() => {
    await mongoose.connect('mongodb://localhost:27017/netlify');
  });

  after(async() => {
    await mongoose.disconnect();
  });
  it('Should create a cart and then find the cart. 111', async function() {
    const cart = await fixtures.createCart({ products: null });
    const params = {
      queryStringParameters: {
        cartId: cart._id
      },
    };
    const findCart = await getCart(params);
    assert.equal(findCart.statusCode, 200);
  });
});
