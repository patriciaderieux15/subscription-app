import express from "express";
import User from '../models/user';
import Article from '../models/article';
import { checkAuth } from "../middleware/checkAuth";
import { stripe } from '../utils/stripe'

const router = express.Router();

router.get('/prices', checkAuth, async (req, res) => {
    const prices = await stripe.prices.list({
        apiKey: process.env.STRIPE_SECRET_KEY
    })

    return res.json(prices)
})

router.post('/session', checkAuth, async (req, res) => {
    const user = await User.findOne({email: req.user});


    Article.create({
        title: "Best Flower in a cup",
        imageUrl: "https://images.unsplash.com/photo-1652093509853-8501891ad3ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan posuere metus, in imperdiet nulla euismod in.",
        access: "Premium"
    })

    const session = await stripe.checkout.sessions.create({
        mode: 'subscription',
        payment_method_types: ['card'],
        line_items: [
            {
                price: req.body.priceId,
                quantity: 1
            }
        ],
        success_url: 'http://localhost:3000/articles',
        cancel_url:  'http://localhost:3000/article-plans',
        customer: user.stripeCustomerId
    }, {
       apiKey: process.env.STRIPE_SECRET_KEY
    })

    return res.json(session)
})

export default router