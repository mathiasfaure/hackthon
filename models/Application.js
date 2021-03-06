/**
 * Created by Mathias on 7/30/2017.
 */

var mongoose = require('mongoose');
Schema = mongoose.Schema;

var applicationSchema = new Schema({
    user_id: String,
    name: String,
    description: String,
    type: String,
    app_key: String,
    refresh_token: String,
    access_token: String,
    accounts: [],
    balances: [],
    transactions: []
});
module.exports = mongoose.model('Applications', applicationSchema);