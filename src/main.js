import express, { json } from "express"
import cors from "cors"
import { Order } from "./Models/Orders.js";
import { Product } from "./Models/Products.js";
import { setup } from "./setup.js";

const app = express();

app.use(cors());
app.use(json());

app.use((req, res) => {

    console.log(req.method, req.url);
    req.next();
});


app.post('/makeOrder', async (req, res) => {
    try {
        const { productId, deliveryAdderss, transactionAddress, phone } = req.body;
        await Order.create({ productId, deliveryAdderss, transactionAddress, phone });

        const error = false;
        const message = 'Your Order Has Been Placed, We will reach to you soon!';
        res.status(200).json({ error, message })
    } catch (err) {
        console.log(err);
        let e = err?.errors;
        if (e && e.length > 0 && e[0]?.type == 'unique violation') {
            const error = true;
            const message = 'Order Already Placed!';
            res.status(200).json({ error, message });
        } else {
            const error = true;
            const message = 'failed placing order, Try Again!';
            res.status(500).json({ error, message });
        }
    }
})

app.get('/orders', async (req, res) => {
    const orders = await Order.findAll();
    res.status(200).json({ orders });
})

app.get('/setup', async (req, res) => {
    setup();
    const message = 'setup done';
    res.status(200).json({ message });
})

app.get('/products', async (req, res) => {
    const products = await Product.findAll();
    res.status(200).json({ products });
})

app.post('/products', async (req, res) => {
    try {

        const { name, price, url } = req.body;
        await Product.create({ name, price, url });

        const error = false;
        const message = 'Product Created Successfully!';
        res.status(200).json({ error, message });
    } catch (err) {
        const error = true;
        const message = 'Something Went Wrong!';
        res.status(500).json({ error, message });
    }
})



// const host = '127.0.0.0';
const port = '8800';
app.listen(port, () => {
    // console.log(`listening @ ${host}:${port}`);
    console.log(`listening @ http://localhost:${port}`);
})