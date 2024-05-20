const mongoose=require('mongoose')

const CourseSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true 
    },
    level: {
        type: String,
        enum: ['beginner', 'intermediate', 'advanced'],
        required: true
    },
    price: {
        type: Number, 
        required: true
    },
    image: {
        type: String,
        required: true
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }],
    enrolledStudents: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }]
});

module.exports = mongoose.model('Course', CourseSchema);