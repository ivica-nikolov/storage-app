
const config = require("../../pkg/config");
const morgan = require("morgan");
const express = require("express");
const expressProxy = require("express-http-proxy");
const app = express();

const {
	proxy: { port },
	authentication: { port: authPort },
	products: {port: productsPort},
	orders: {port: ordersPort}
	
} = config.getConfigPropertyValue("services");

app.use(morgan("tiny"));

app.use(
	"/api/v1/auth",
	expressProxy(`http://localhost:${authPort}`, {
		proxyReqPathResolver: (request) =>
			`http://localhost:${authPort}/api/v1/auth${request.url}`,
	})
);

app.use(
	"/api/v1/products",
	expressProxy(`http://localhost:${productsPort}`, {
		proxyReqPathResolver: (request) =>
			`http://localhost:${productsPort}/api/v1/products${request.url}`,
	})
);

app.use(
	"/api/v1/orders",
	expressProxy(`http://localhost:${ordersPort}`, {
		proxyReqPathResolver: (request) =>
			`http://localhost:${ordersPort}/api/v1/orders${request.url}`,
	})
);

app.listen(port, (err) => {
	if (err) {
		throw new Error(
			`Cannot start proxy running on http://localhost:${port}`,
			err
		);
	}
	console.log(`Proxy on http://localhost:${port}`);
});
