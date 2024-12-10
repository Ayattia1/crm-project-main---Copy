const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// Add routes
router.post('/addCustomer', customerController.addCustomer);
router.get('/', customerController.getAllCustomers);
router.get('/:id', customerController.getCustomerById);
router.put('/:id', customerController.updateCustomer);
router.delete('/:id', customerController.deleteCustomer);

module.exports = router;