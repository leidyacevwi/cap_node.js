// const {emailTemplate} = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring')                      // se utiliza para requerir y ser ejecutados desde el script principa que en este caso es app.js

// console.log(emailTemplate);

// console.log(emailTemplate);

//27.callbacks
const{getUserById} = require('./js-foundation/03-callbacks');

const id = 3;

getUserById(id, function(error, user){
    if (error){
        throw new Error('User not found with id', id);
    }
    console.log(user);
});