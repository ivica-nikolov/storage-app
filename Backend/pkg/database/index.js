const db = require('../databaseConnection/index')


const connectToDB = async () => {
	try {
		
		db.connect(err => {
			if(err){
				throw err
			}
			console.log('MySQL Connected')
		})
		
		
	} catch (err) {
		console.error(err);
	}
};




module.exports = connectToDB

