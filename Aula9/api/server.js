const express = require("express")

const app = express();
app.use(express.json())

const products = [{
        id: 1,
        name: "Camiza",
    },
    {
        id: 2,
        name: "Caussa",
    },
    {
        id: 3,
        name: "causssswinha"
    }
]

app.get("/products", (req, res) => {
    console.log(req?.query?.consulta)
    res.json([{msg: req?.query?.consulta}])
})

app.get("/product/:id", function(req, res){
    res.send(products.filter(product => product.id == req.params.id))
})

app.listen(3000, () => {
    console.log("HELLO WORLD")
})