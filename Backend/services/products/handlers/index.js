const db = require('../../../pkg/databaseConnection');



const getAllProducts = async (request, response) => {
    try {
        
        var sql = `SELECT * FROM products`;
        // await validate(request.body, validateLoginRule);
        const res = await db.query(sql, function (err, result) {
            response.send(result)
        })
            

    } catch (err) {
        return response.status(err.status).send(err.message);
    }
};

const getProductById = async (request, response) => {
    try {
        var sql = `SELECT * FROM products WHERE id=?`;
        // await validate(request.body, validateLoginRule);
        const res = await db.query(sql,request.params.id, function (err, result) {
            if (err) {
                throw err;
            } 

            response.status(200).send(result);
        })


    } catch (err) {
        return response.status(401).send(err.message);
    }
};


const createNewProduct = async ({ body }, response) => {
    
    try {
        var sql = `SELECT * FROM products WHERE productName = ?`;
        const res = await db.query(sql,body.productName, function (err, result) {
            if (err) {
                throw err;
            } else {
                setValue(result)
                
            }
        })
        const setValue = (value) => {
            if (value.length == 1) {
            response.status(400).send('Product name already exists');
            } else {
                var sql = `INSERT INTO products SET?`;
                let post = body;
                let res =  db.query(sql,post, function (err, result) {
                if (err) {
                    throw err;

                } else {
                    response.status(201).send('Product saved');
                }
            })
        }}
       

    } catch (err) {
        return res.status(400).send('Product not saved');
    }
};


const deleteProduct = async (request, response) => {
    try {
        var sql = `DELETE FROM products WHERE id = ?`;
        const res = await db.query(sql,request.params.id, function (err, result) {
            if (err) {
                throw err;
            } 
            response.status(200).send('Product deleted')
        })

    } catch (err) {

        return response.status(400).send(err.message);
    }
};

const updateProduct = (request, response) => {
    try {
        console.log(request.body)
        let stock = request.body.InStock 
        var sql = `UPDATE products SET InStock = ${stock} WHERE id = ${request.params.id}`;
        const res =  db.query(sql, function (err, result) {
            if (err) {
                throw err;
            } 
            response.status(200).send('Product stock updated')
        })
        

    } catch (err) {
        
        return response.status(400).send(err.message);
    }
};



module.exports= {
    getAllProducts,
    createNewProduct,
    deleteProduct,
    updateProduct,
    getProductById

}