const stripe = require('stripe')('your-stripe-secret-key');

app.post('/charge', async (req, res) => {
    const { amount, source } = req.body;
    try {
        const charge = await stripe.charges.create({
            amount: amount,
            currency: 'usd',
            source: source,
            description: 'Fruits et Légumes Purchase',
        });
        res.json(charge);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post('/reviews', (req, res) => {
    const { productId, review } = req.body;
    // Logic to save review in database
});
