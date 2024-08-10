const User = require('../models/Users');
const bcrypt = require('bcrypt')


//registration  endpoint
const Register = async (req, res) => {

    const userExist = await User.findOne({email: req.body.email});

    if(userExist) return res.status(400).json({msg: 'User already exist'});

    try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
        ...req.body,
        password: hash
            })

        const  user =  await newUser.save();
        const { password, ...others } = user._doc;
        res.status(201).json({others});

    } catch (err) {
        res.status(500).json(err.message)
    }
}

//login endpoint
const Login = async (req, res) => {
    
    try {
        const user = await User.findOne({email: req.body.email})
        
        if(!user) return res.status(404).json('User not found or does not exist');

        const vPassword = await bcrypt.compare(req.body.password, user.password);

        if(!vPassword) return  res.status(400).json('Invalid password or username');

        const { password, ...otherDetails } = user._doc;

        res.status(200).json({otherDetails});
        
    } catch (error) {
        res.status(500).json(err.message)
    }

}

module.exports = { Register, Login }
