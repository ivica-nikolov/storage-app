const config = require("../../pkg/config");
const connectDB = require("../../pkg/database");
const morgan = require("morgan");
const productHandler = require("./handlers");
const cors = require('cors');
connectDB();

const {products: { port } } = config.getConfigPropertyValue("services");
const { jwt_secret_key: JWT_SECRET } = config.getConfigPropertyValue("security");

const express = require("express");
const { expressjwt } = require("express-jwt");
const app = express();
app.use(cors());
app.use(morgan("tiny"));

app.use(express.json());
app.use(
	expressjwt({ secret: JWT_SECRET, algorithms: ["HS256"] })
		
		.unless({
			path: [
				
			],
		})
);


app.get("/api/v1/products/all-products", productHandler.getAllProducts);

app.get("/api/v1/products/get-product/:id", productHandler.getProductById);

app.post("/api/v1/products/save-product", productHandler.createNewProduct);

app.post("/api/v1/products/edit-product/:id", productHandler.updateProduct);

app.delete("/api/v1/products/delete-product/:id", productHandler.deleteProduct);


app.listen(port, (err) => {
	if (err) {
		throw new Error(
			`Cannot start server running on http://localhost:${port}`,
			err
		);
	}
	console.log(`Product server running on http://localhost:${port}`);
});