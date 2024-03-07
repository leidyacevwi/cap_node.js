const users =[
    {
        id: 1,
        name: 'Jhon Doe'
    },
    {
        id:2,
        name:'Jane Doe',
    }
];


function getUserById(id, callaback){
    const user = users.find( (user) =>  user.id === id);

    //forma de manejo de errores
    // if (!user){
    //     return callback(`User not found with id ${id}`);
    // }
    // return callback(null, user);

    // console.log({ user });   
    
    //otra forma de manejo de errores
    (user)
    ? callaback(null,user)
    : callaback (`User not found with id ${id}`)

}

module.exports ={
    getUserById,
}