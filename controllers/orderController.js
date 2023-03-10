const asyncHandler = require('express-async-handler');
const Order = require('../models/orderModel');
const Product = require('../models/productModel');

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const addOrderItems = asyncHandler(async (req, res) => {
    const { orderItems, shippingAddress, paymentMethod, message, phone } = req.body
    const shippingPrice = 100

    if (!orderItems || orderItems.length === 0) {
        res.status(400)
        throw new Error('No order items');
    } else {

        // Validating the order 
        const serverProducts = await Product.find({});
        const userProducts = serverProducts.filter(o1 => orderItems.some(o2 => o1._id.toString() === o2._id.toString()));
        const confirmedProducts = []
        for(const product of userProducts){
            for(const orderProduct of orderItems){
                if(product._id.toString() === orderProduct._id){
                    confirmedProducts.push({
                        name: product.name,
                        qty: orderProduct.qty,
                        price: product.price,
                        image: product.image,
                        countInStock: product.countInStock,
                        product: product._id
                    })
                }
            }
        }
        const itemsPrice = Number((confirmedProducts.reduce((acc, item) => acc + item.qty * item.price, 0)).toFixed(2))
        const order = new Order({
            orderItems: confirmedProducts,
            user: req.user._id,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            shippingPrice,
            totalPrice: Number((itemsPrice + shippingPrice).toFixed(2)),
            message,
            phone
        })

        const createdOrder = await order.save()

        res.status(201).json(createdOrder)
    }
})

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  )

  if (order) {
    res.json(order)
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
})

// // @desc    Update order to paid
// // @route   GET /api/orders/:id/pay
// // @access  Private
// const updateOrderToPaid = asyncHandler(async (req, res) => {
//   const order = await Order.findById(req.params.id)

//   if (order) {
//     order.isPaid = true
//     order.paidAt = Date.now()
//     order.paymentResult = {
//       id: req.body.id,
//       status: req.body.status,
//       update_time: req.body.update_time,
//       email_address: req.body.payer.email_address,
//     }

//     const updatedOrder = await order.save()

//     res.json(updatedOrder)
//   } else {
//     res.status(404)
//     throw new Error('Order not found')
//   }
// })

// // @desc    Update order to delivered
// // @route   GET /api/orders/:id/deliver
// // @access  Private/Admin
// const updateOrderToDelivered = asyncHandler(async (req, res) => {
//   const order = await Order.findById(req.params.id)

//   if (order) {
//     order.isDelivered = true
//     order.deliveredAt = Date.now()

//     const updatedOrder = await order.save()

//     res.json(updatedOrder)
//   } else {
//     res.status(404)
//     throw new Error('Order not found')
//   }
// })

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id })
  res.json(orders)
})

// // @desc    Get all orders
// // @route   GET /api/orders
// // @access  Private/Admin
// const getOrders = asyncHandler(async (req, res) => {
//   const orders = await Order.find({}).populate('user', 'id name')
//   res.json(orders)
// })

module.exports = {
  addOrderItems,
  getOrderById,
  getMyOrders
//   getOrders
//   updateOrderToPaid,
//   updateOrderToDelivered,
  
}