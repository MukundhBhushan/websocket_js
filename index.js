var express = require('express')


//App
var app =express()

app.use(express.static('public'))

var server= app.listen(8080,()=>{
    console.log('listening on 8080')
})
