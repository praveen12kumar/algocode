import mongoose, {Schema} from "mongoose";

const problemSchema = Schema({
    title:{
        type:String,
        required:[true, 'Problem title is required'],
    },
    description:{
        type:String,
        required:[true, 'Problem description is required'],
    },
    difficulty:{
        type:String,
        required:[true, 'Problem difficutly can not be empty'],
        enum: ['EASY', 'MEDIUM', 'HARD'],
        default: 'EASY'
    },
    testCases:[
        {
            input:{
                type:String,
                required: true,
            },
            output:{
                type:String,
                required: true
            }
        }
    ],
    editorial:{
        type:String,
    },
},{
    timestamps: true
});

const Problem = mongoose.model('Problem',problemSchema);

// problem: It is the name of the collection
// Problemschema is the schema that mongoose will constantly validate the data

// mongoose.model() return a model "Problem"

export default Problem;
