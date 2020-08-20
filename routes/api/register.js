const Route = require('express').Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const Users = require('../models/user');
const moment = require('moment');
const spawn = require('spawn-password');
const authentication = require('../middlewares/jwt');
const jwt = require('jsonwebtoken');

Route.post(
    '/',

    [
        check('email', 'email should not be empty')
            .not()
            .isEmpty()
            .isString()
            .isEmail(),

        check('password', 'Password should  not be empty')
            .not()
            .isEmpty()
            .isString(),
        check('last_name', 'Last Name should  not be empty')
            .not()
            .isEmpty()
            .isString(),
        check('first_name', 'First Name should  not be empty')
            .not()
            .isEmpty()
            .isString()
    ],

    async function (req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            }

            const {
                email,
                password,

                first_name,
                last_name
            } = req.body;

            let temp_id = `USR${spawn
                .spawnAlphaNumericLength(10)
                .toUpperCase()}`;

            const user = new Users({
                email: email.toLowerCase(),

                id: temp_id,
                first_name,
                last_name,
                password: bcrypt.hashSync(password, bcrypt.genSaltSync()),

                date_created: moment().format('MMM Do YYYY')
            });

            await Users.findOne({
                email: email.toLowerCase()
            }).then(admins => {
                if (!admins) {
                    user.save().then(users => {
                        const user = { name: first_name };
                        const access_token = jwt.sign(
                            user,
                            process.env.ACCESS_TOKEN_SECRET
                        );
                        res.status(200).json({
                            access_token: access_token,
                            first_name: first_name,
                            last_name: last_name,
                            email: email
                        });
                    });
                } else {
                    res.status(400).send('Admin Already Exists');
                }
            });
        } catch (error) {
            res.status(422).status('Internal Server error');
        }
    }
);

module.exports = Route;
