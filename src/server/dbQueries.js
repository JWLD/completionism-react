const dbQueries = {};

dbQueries.getCategoryData = (con, category, callback) => {
	con.query(`SELECT * FROM ${category}`, callback);
};

module.exports = dbQueries;
