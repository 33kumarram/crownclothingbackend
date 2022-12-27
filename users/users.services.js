const db= require('../helpers/db')

module.exports={
    CreateNewUser,
}

async function CreateNewUser (params){
    console.log(params, 'I am running')
    let user =new db.Users(params)
    await user.save()
    return user;
}