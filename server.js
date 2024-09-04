const express = require('express')
const app = express()
const port = 8080

/* Whatever is in the second argument , will be displayed 
in the first argument , here the first argument is the home page
*/

app.get('/',(req,res)=>{
    res.send("<h1>hello this is first</h1>")

} )

const products = [
    {
        id:1,
        name: "rahul" 
    },
    {
        id:2, 
        name : "kolli" 
    }
]

app.get('/products',(req,res)=>{
    res.json(products)
})

app.get('/products/:id',(req,res) =>{
    const newData = products.filter(item => item.id.toString() === req.params.id)
    return res.send(newData)
})

app.post('/addproducts',()=>{
    const{ id,name} = req.body
})

app.listen(port, ()=>{
    console.log('Example server is running on port',port )
})