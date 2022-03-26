const bcrypt = require('bcrypt')


module.exports.comparePassword = comparePassword = async(password,hashedPassword) =>{
    let match = await bcrypt.compare(password,hashedPassword)
    return match

}


module.exports.hashPassword = hashPassword = async(password,saltRound)=>{
    let hashedPassword = await bcrypt.hash(password,saltRound)
    return hashedPassword

}