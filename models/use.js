import mongoose from 'mongoose'
const UserSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
},
{
    timeStamp: true
})