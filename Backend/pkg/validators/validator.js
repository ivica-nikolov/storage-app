const { Validator } = require("node-input-validator");

const validateCreateNewAccountRule = {
	user: "required|string",
	password: "required|string"
};
const validateLoginRule = {
	user: "required|string",
	password: "required|string|minLength:3",
};

const validateCreateNewProductRule = {
	productName:"string",
	InStock: "required|number",
};


const validate = async (requestBody, ruleToValidateBy) => {
	const v = new Validator(requestBody, ruleToValidateBy);
	const matched = await v.check();
	if (!matched) {
		throw {
			status: 400,
			message: 'error validate'
		};
	}
};

module.exports = {
	validate,
	validateCreateNewAccountRule,
	validateLoginRule,
	validateCreateNewProductRule
};
