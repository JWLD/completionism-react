const dbQueries = {};

dbQueries.getCategoryData = (con, category, callback) => {
	con.query(`SELECT * FROM ${category} WHERE source != 300 ORDER BY name, id`, callback);
};

module.exports = dbQueries;
