const express = require('express')
const cors = require('cors');
const dotenv = require('dotenv')
const helmet = require('helmet')
const connectDB = require('./config/db')
const morgan = require('morgan')
const { errorHandler, notFound } = require('./middleware/errorHandler')

dotenv.config({
    path: './config/config.env'
})

connectDB()

const app = express()

app.use(helmet());
app.use(express.json())
if (process.env.NODE_ENV === 'development') {
    //app.use(cors());
    app.use(morgan('dev'))
}

app.use(cors());

app.use('/api/products', require('./routes/productRoute'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));

// Error middleware
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT

app.listen(PORT, () => {
    if(process.env.NODE_ENV === 'development') console.log(`Server running in ${process.env.NODE_ENV} MODE on PORT ${PORT}`)
    else console.log('Server started')
})