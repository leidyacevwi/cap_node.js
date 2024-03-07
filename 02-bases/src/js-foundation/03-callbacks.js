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


function getUserById(id, llamada){
    const user = users.find( function(user){
        return user.id === id    
    });

    if (!user){
        return llamada(`User not found with id ${id}`);
    }
    return llamada(null, user);

    // console.log({ user });    

}

module.exports ={
    getUserById,
}