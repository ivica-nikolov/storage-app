const db = require('../../../pkg/databaseConnection');


const createOrderTable = (request, response) => {
    try {
        
        var sql = `CREATE TABLE orders(orderNumber int AUTO_INCREMENT, company VARCHAR(255), PRIMARY KEY(orderNumber) )`;
        // await validate(request.body, validateLoginRule);
        db.query(sql, err => {
            if(err) {
                throw err
            }
            response.send('table created')
        })
            

    } catch (err) {
        return response.status(err.status).send(err.message);
    }
};

const getAllOrders = (request, response) => {
    try {
        
        var sql = `SELECT * FROM orders`;
        // await validate(request.body, validateLoginRule);
        const res = db.query(sql, function (err, result) {
            response.send(result)
        })
            

    } catch (err) {
        return response.status(err.status).send(err.message);
    }
};



const saveNewOrder = ({ body }, response) => {
    
    try {
        console.log(body)
        var sql = `INSERT INTO orders SET?`;
            let post = body;
            let res =  db.query(sql,post, function (err, result) {
            if (err) {
                throw err;

            } else {
                response.status(201).send('Order saved');
            }
        });

    } catch (err) {
        return res.status(400).send('Order not saved');
    }
};


const deleteOrder =  (request, response) => {
    try {
        var sql = `DELETE FROM orders WHERE orderNumber = ?`;
        const res = db.query(sql,request.params.id, function (err, result) {
            if (err) {
                throw err;
            } 
            response.status(200).send('Order deleted')
        })

    } catch (err) {

        return response.status(400).send(err.message);
    }
};




module.exports= {
    getAllOrders,
    saveNewOrder,
    deleteOrder,
    createOrderTable

}