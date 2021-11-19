const pactum = require('pactum');
require('regenerator-runtime/runtime')
const url = require('../../../atelier_api.js')
const { singleProductData, productStyleData, relatedProductId } = require('./mockData.js');

// jest.mock('node-fetch')
// const fetch = require('node-fetch')
// const { Response } = jest.requireActual('node-fetch');

describe('Single Product Info', () => {
    test('should retrieve product information', async () => {
      await pactum.spec()
        .get(`${url}/products/1`)
        .expectStatus(200)
        .expectJson(singleProductData)
    })
})

describe('Product Style Info', () => {
    test('should retrieve product style information', async () => {
      await pactum.spec()
        .get(`${url}/products/1/styles`)
        .expectStatus(200)
        .expectJson(productStyleData)
    })
})


describe('Related Product IDs', () => {
    test('should retrieve related product IDs for a product', async () => {
      await pactum.spec()
        .get(`${url}/products/1/related`)
        .expectStatus(200)
        .expectJson(relatedProductId)
    })
})
