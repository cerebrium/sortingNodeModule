# sortingNodeModule
My first node module!

This module is just a variety of sorting methods. The way to make it work is to pass in an argument for the name as the 
first parameter and then an array or two arrays as the second. If you are using express on the backend here is an example 
you can use to sort a small array into a console log.
ex:
// want to npm -i express sorting-node-package
const express = require('express')
const sorter = require('sorting-node-package')

const app = express()

console.log(sorter.sort('q', [5, 2, 7, 1]))

// change the '/index.html' to whatever file you are atempting to bring up.... this is purely for demostration
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(3000, () => {
    console.log(`server running on port: 3000`)
})


The available arguments are:
'q': quicksort, takes a single array as an argument (see example above)
'm': quicksort twice! author is in the process of writing a variety of other sorts, but for not this combines arrays then sorts them
