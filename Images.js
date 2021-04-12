const mongoose = require('mongoose') //importing mongoose 

var ImageSchema = mongoose.Schema({ //Creating mongooseSchema for Event
    Applicant_Type: Array,
    Equipments_Owned: Array,
    Birthpaper: String,
    Credential: String

})

//Converting Schema into a Model to work with
var EventModel = mongoose.model("Image",ImageSchema) ; //Collection name
module.exports = EventModel ;