const express = require('express');
const router = express.Router();

const products = [
    {
        id: 1,
        name: 'Test Product - 1',
        price: 50,
        isOnSale: true,
        quantityInCart: 0,
        imageUrl: 'http://via.placeholder.com/150x150'
    },
    {
        id: 2,
        name: 'Test Product - 2',
        imageUrl: 'http://via.placeholder.com/150x150',
        price: 150,
        isOnSale: false,
        quantityInCart: 0
    },
    {
        id: 3,
        name: 'Test Product - 3',
        imageUrl: 'http://via.placeholder.com/150x150',
        price: 250,
        isOnSale: true,
        quantityInCart: 0
    }
];

router.get('/', (req, res) => {
    const query = (req.query['q'] || '').toLocaleLowerCase();
    if (query) {
        const foundProducts = products.filter(product => product.name.toLocaleLowerCase().indexOf(query) != -1);
        return res.status(200).json(foundProducts);
    }
    return res.status(200).json(products);
});

router.post('/', (req, res) => {
    const product = req.body;

    if (product.id) {
        return res.status(400).json({msg: 'Product seems to already have an id assigned'});
    }

    product.id = product.length + 1;
    product.quantityInCart = 0;
    products.push(product);
    return res.status(200).json(product);
});

router.patch('/:id', (req, res) => {
    const productId = req.params.id;
    const foundProduct = products.find(product => product.id == productId);
    if (foundProduct) {
        const changeInQuantity = req.body.changeInQuantity;
        foundProduct.quantityInCart += changeInQuantity;
        return res.status(200).json({msg: 'Successfully updated cart'});
    }
    return res.status(400).json({msg: `Product with id ${productId} not found`});
});

module.exports = router;