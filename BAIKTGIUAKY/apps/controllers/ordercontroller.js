const { model } = require('mongoose');
const Order = require('../models/order');

// Thêm đơn hàng mới
const createOrder = async (req, res) => {
    try {
        const { customerId, petId, quantity, totalAmount } = req.body;

        const newOrder = new Order({
            customerId,
            petId,
            quantity,
            totalAmount,
            status: 'Pending' // Trạng thái mặc định là "Pending"
        });

        const order = await newOrder.save();
        res.status(201).json({
            message: 'Order created successfully',
            order: order
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error creating order',
            error: error.message
        });
    }
};

// Lấy danh sách đơn hàng của khách hàng
const getOrdersByCustomer = async (req, res) => {
    try {
        const customerId = req.params.customerId;
        const orders = await Order.find({ customerId }).populate('petId', 'name breed'); // Tham chiếu đến Pet

        if (orders.length === 0) {
            return res.status(404).json({
                message: 'No orders found for this customer'
            });
        }

        res.status(200).json({ orders });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error fetching orders',
            error: error.message
        });
    }
};

// Cập nhật trạng thái đơn hàng
const updateOrderStatus = async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const { status } = req.body;

        const order = await Order.findById(orderId);

        if (!order) {
            return res.status(404).json({
                message: 'Order not found'
            });
        }

        order.status = status;
        const updatedOrder = await order.save();

        res.status(200).json({
            message: 'Order status updated successfully',
            order: updatedOrder
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error updating order status',
            error: error.message
        });
    }
};

// Lấy tất cả đơn hàng
const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('customerId', 'name').populate('petId', 'name breed');

        res.status(200).json({ orders });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error fetching all orders',
            error: error.message
        });
    }
};
model.exports = {
    createOrder,
    getOrdersByCustomer,
    updateOrderStatus,
    getAllOrders
};
