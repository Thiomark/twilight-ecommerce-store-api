const mongoose = require('mongoose')

const settingsSchema = mongoose.Schema(
    {
        shipping: {
            type: String,
            required: true,
            default: 100,
        },
    },
    {
        timestamps: true,
    }
)

const User = mongoose.model('User', settingsSchema)

module.exports = User