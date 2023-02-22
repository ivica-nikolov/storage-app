
const config = require("../../../pkg/config/index");
const db = require('../../../pkg/databaseConnection')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {validate, validateCreateNewAccountRule, validateLoginRule} = require('../../../pkg/validators/validator');
const { jwt_secret_key: JWT_SECRET } = config.getConfigPropertyValue("security");


const login = async ({ body }, response) => {
    try {
        var sql = `SELECT * FROM users WHERE user=?`;
        // await validate(request.body, validateLoginRule);
        const res = await db.query(sql,body.user, function (err, result) {
            if (err) {
                throw err;
            } else {
                setValue(result)
                
            }
        })
        const setValue = (value) => {
            if(value != []){
                if (!bcrypt.compareSync(body.password, value[0].password)) {
                    response.send('paswords dont match')
                }
                const payloadData = {
                    id: value[0].id,
                    user: value[0].user,
                };
                
                const encodedToken = jwt.sign(payloadData, JWT_SECRET);
                return response.status(200).send({ token: encodedToken , user: value[0].user});
            }
        }


    } catch (err) {
        return response.status(err.status).send(err.message);
    }
};

const register = async ({ body }, response) => {
    try {

        // await validate(body, validateCreateNewAccountRule);
        var sql = `SELECT * FROM users WHERE user=?`;
        const res = await db.query(sql,body.user, function (err, result) {
            if (err) {
                throw err;
            } else {
                setValue(result)
                
            }
        })
        const setValue = (value) => {
            if (value.length == 1) {
            response.status(400).send('User already exists');
            } else {
                body.password = bcrypt.hashSync(body.password);
                var sql = `INSERT INTO users SET?`;
                let post = body;
                let res =  db.query(sql,post, function (err, result) {
                if (err) {
                    throw err;

                } else {
                    response.status(201).send({user: body.user, message: 'user created'});
                }
            })
        }}
        
    } catch (err) {
        return response.status(400).send({massage:'Email already exists'});
    }
};

const getProfileById = async (request, response) => {
    try {
        var sql = `SELECT * FROM users WHERE id=?`;
        const res = await db.query(sql,request.params.id, function (err, result) {
            if (err) {
                throw err;
            } else {
                response.status(200).send(result)
                
            }
        })
        

    } catch (err) {
        return response.status(401).send(err.message);
    }
};


module.exports = {
    login,
    register,
    getProfileById
}