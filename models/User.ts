import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */

const User = new mongoose.Schema({
    email: {
        type: String,
        required: true
    }, userName: {
        type: String,
        required: true,
        minLength: [6, "username must be 6 charecters long"],
        maxLength: [20, 'username cannot be more than 20 charecters']
    }, password: {
        type: String,
        required: true,
        minLength: [6, "password must be 6 charecters long"]
    }
})
// export default UserSchema;
export default mongoose.models.User || mongoose.model('User', User)
