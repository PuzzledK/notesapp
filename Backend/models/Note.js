const mongoose = require('mongoose');

const notesSchema = mongoose.Schema({
    user:{ //User Id basically
    type : mongoose.Schema.Types.ObjectId,
    ref : 'user'
    },

    title : {
        type : String,
        required: true,
    },

    description : {
        type: String,
        required: true,
    },

    dateCreated : {
        type : Date,
        default: Date.now,
    },

    tag : {
        type : String,
        default : 'General',
    },

});

module.exports = mongoose.model('notes',notesSchema);