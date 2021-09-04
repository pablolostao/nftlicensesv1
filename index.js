const express = require('express')
const app = express()
const port = process.env.PORT || 8080;

app.get('/license/:tokenID', (req, res) => {
  metadata = {
    "name": "Windows 10 license",
    "description": "This license is for Windows 10 Professional",
    "image": "https://cdn.shopify.com/s/files/1/2158/1497/products/win10pro_x850.jpg?v=1571338137",
    "attributes": [{
      "trait_type": "Expiration", 
      "value": "Never"
    }, 
    {
      "trait_type": "Level", 
      "value": "5"
    }]
  }
  res.send(metadata)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})