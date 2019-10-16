const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ChurchSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

ChurchSchema.plugin(mongoosePaginate);

mongoose.model("Church", ChurchSchema);