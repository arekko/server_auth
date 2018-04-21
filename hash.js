
const bcrypt = require('bcrypt')
const {MD5} = require('crypto-js')
const jwt = require('jsonwebtoken')


const id = '1000'
const secret = 'supersecret'

const receiveToken = 'eyJhbGciOiJIUzI1NiJ9.MTAwMA.L9PmEqLlZjettygguzj25agunJu6NkvVtG9RFRBnK2Y'
const token = jwt.sign(id, secret)
const decodeToken = jwt.verify(receiveToken, secret)

console.log(decodeToken);



// const secret = 'mysecretpassword'
// const secretSalt = 'asjdfkjasbdfasbdfjasdbfjhasbfnj'

// const user = {
//     id:1,
//     token: MD5('fasdfsadf').toString() + secretSalt
// }

// const recivedToken = 'e8db7e64ca7d570b12c32edabac04fb3asjdfkjasbdfasbdfjasdbfjhasbfnj';

// if(recivedToken === user.token){
//     console.log('move forward')
// }

// console.log(user)



// bcrypt.genSalt(10, (err, salt) =>{
//     if(err) return next(err)

//     bcrypt.hash('password123', salt, (err, hash) => {
//         if(err) return next(err)

//         console.log(hash);
//     })
// })