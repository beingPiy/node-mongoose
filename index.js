const mongoose = require('mongoose')
const Dishes = require('./models/dishes')

const url = 'mongodb://localhost:27017/conFusion'
const connect = mongoose.connect(url)

connect.then((db) => {
    console.log('Connected correctly to server')

    Dishes.create({
        name: 'Uthappizza',
        description: 'test'
    })

    .then((dish) => {
        console.log(dish)

        return Dishes.findByIdAndUpdate(dish._id,{
            $set : {description : 'Updated test'}
        },{
            new : true
        }).exec()
    })
    .then((dishes) => {
        console.log(dishes)

        dish.comments.push({
            rating : 5,
            comment : 'I am loving it ',
            author : 'Piyush Pandey'
        })
        return dish.save()
    })
    .then((dish) => {
        console.log(dish)
        return Dishes.remove({})
    })
    .then( () => {
        mongoose.connection.close()
    })
    .catch((err) => {
        console.log(err)
    })
})