const config = require("../../pkg/config");
const connectDB = require("../../pkg/database");
const morgan = require("morgan");
const orderHandler = require("./handlers");
const cors = require('cors');
connectDB();

const {orders: { port } } = config.getConfigPropertyValue("services");
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

app.get("/api/v1/orders/create-orders-table", orderHandler.createOrderTable);

app.get("/api/v1/orders/get-all-orders", orderHandler.getAllOrders);

app.post("/api/v1/orders/save-order", orderHandler.saveNewOrder);

app.delete("/api/v1/orders/delete-order/:id", orderHandler.deleteOrder);


app.listen(port, (err) => {
	if (err) {
		throw new Error(
			`Cannot start server running on http://localhost:${port}`,
			err
		);
	}
	console.log(`Orders server running on http://localhost:${port}`);
});