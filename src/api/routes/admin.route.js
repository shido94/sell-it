const express = require('express');
const router = express.Router();
const { adminController } = require('../controllers');
const { validate, auth } = require('../middleware');
const { UserRole } = require('../utils');
const { userValidation, productValidation } = require('../validations');

/**
 * @swagger
 * /admin/login:
 *   post:
 *     tags: [Admin]
 *     produces:
 *       - application/json
 *     parameters:
 *     - name: body
 *       in: body
 *       description: Login using email and Password
 *       required: true
 *       schema:
 *         type: object
 *         required:
 *           - email
 *         properties:
 *           email:
 *             type: string
 *             default: admin@admin.com
 *           password:
 *             type: string
 *             default: Test@1234
 *     responses:
 *       200:
 *         description: Return User and Token
 */
router.post('/login', adminController.login);

/**
 * @swagger
 *  /admin/users:
 *   get:
 *     tags: [Admin]
 *     security:
 *          - Bearer: []
 *     description: Get Users Listing
 *     produces:
 *       - application/json
 *     parameters:
 *     - name: search
 *       in: query
 *     - name: sort
 *       in: query
 *     - name: limit
 *       in: query
 *     - name: page
 *       in: query
 *     responses:
 *       200:
 *         description: Return Message
 */
router.get('/users', auth(UserRole.ADMIN), adminController.getUsers);

/**
 * @swagger
 *  /admin/products/bid:
 *   post:
 *     tags: [Admin]
 *     security:
 *          - Bearer: []
 *     description: Create new bid
 *     produces:
 *       - application/json
 *     parameters:
 *     - name: body
 *       in: body
 *       description: Mandatory fields
 *       required: true
 *       schema:
 *         type: object
 *         required:
 *           - productId
 *           - offeredAmount
 *         properties:
 *           productId:
 *             type: string
 *             default: 64020c62f876cda4b0178365
 *           offeredAmount:
 *             type: number
 *             default: 1234
 *     responses:
 *       200:
 *         description: Return Message
 */
router.post(
  '/products/bid',
  auth(UserRole.ADMIN),
  validate(productValidation.createNewBid),
  adminController.createProductBid,
);

/**
 * @swagger
 *  /admin/users/block/:
 *   post:
 *     tags: [Admin]
 *     security:
 *          - Bearer: []
 *     description: Block user account
 *     produces:
 *       - application/json
 *     parameters:
 *     - name: body
 *       in: body
 *       description: Mandatory fields
 *       required: true
 *       schema:
 *         type: object
 *         required:
 *           - id
 *           - isReported
 *           - reason
 *         properties:
 *           id:
 *             type: string
 *           isReported:
 *             type: boolean
 *           reason:
 *             type: string
 *     responses:
 *       200:
 *         description: Return Message
 */
router.post('/users/block', auth(UserRole.ADMIN), validate(userValidation.blockUser), adminController.blockUser);

/**
 * @swagger
 *  /admin/products/picked-up/date:
 *   put:
 *     tags: [Admin]
 *     security:
 *          - Bearer: []
 *     description: Add Picked-Up Date
 *     produces:
 *       - application/json
 *     parameters:
 *     - name: body
 *       in: body
 *       description: Mandatory fields
 *       required: true
 *       schema:
 *         type: object
 *         required:
 *           - productId
 *           - estimatedPickedUpDate
 *         properties:
 *           productId:
 *             type: string
 *             default: 64020c62f876cda4b0178365
 *           estimatedPickedUpDate:
 *             type: string
 *     responses:
 *       200:
 *         description: Return Message
 */
router.put(
  '/products/picked-up/date',
  auth(UserRole.ADMIN),
  validate(productValidation.addPickedUpDate),
  adminController.updatePickUpDate,
);

/**
 * @swagger
 *  /admin/products/picked-up:
 *   put:
 *     tags: [Admin]
 *     security:
 *          - Bearer: []
 *     description: Add Picked-Up Date
 *     produces:
 *       - application/json
 *     parameters:
 *     - name: body
 *       in: body
 *       description: Mandatory fields
 *       required: true
 *       schema:
 *         type: object
 *         required:
 *           - productId
 *         properties:
 *           productId:
 *             type: string
 *             default: 64020c62f876cda4b0178365
 *     responses:
 *       200:
 *         description: Return Message
 */
router.put(
  '/products/picked-up',
  auth(UserRole.ADMIN),
  validate(productValidation.validateProduct),
  adminController.updatePickUp,
);

module.exports = router;
