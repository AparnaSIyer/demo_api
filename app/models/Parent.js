const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var parentSchema = new Schema({
    child: {
        type: Schema.Types.ObjectId
    }
});
