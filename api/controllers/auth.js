const User = require('../models/Users');
const bcrypt = require('bcrypt')


//Encrypt password
const encryptPassword = password => {
    const hashedPassword =  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    return hashedPassword ;
};

//registration controller
const Register = async (req, res) => {
   
        try {
            const {username, email, password } = req.body

            const userExist = await User.findOne({email: req.body.email});
            if(userExist){
                res.status(400).json('User already exist')
            } else {
                try {
                const newUser = new User({
                    username,
                    email,
                    password: encryptPassword(password)
                        })
            
                 const  user =  await newUser.save()
                 res.status(201).json(user)
                } catch (err) {
                    res.status(500).json(err.message)
                }
            }
          
        } catch (err) {
            res.status(500).json(err.message)
        }

}

//login
const Login = async (req, res) => {
    try {
        const { email } = req.body

        const user = await User.findOne({email: req.body.email})
        if(!user){
            res.status(404).json('user does not registered')
        } else {
            const vPassword = await bcrypt.compare(req.body.password, user.password)
            if(!vPassword){
                res.status(400).json('Incorrect password')
            } else {
                const {isAdmin, password, ...otherDetails} = user._doc
                res.status(200).json({...otherDetails})
            }
        }

    } catch (err) { 
        res.status(500).json(err.message)
    }
}

module.exports = { Register, Login }