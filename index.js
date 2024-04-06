require('dotenv').config();
const port = 4000;
const express = require ("express");
const app = express();
const mongoose = require ("mongoose");
const jwt = require ("jsonwebtoken");
const multer = require ("multer");
const path = require ("path");
const cors = require ("cors");
const { error } = require("console");

app.use(express.json());
app.use(cors());

//Database Connection With MongoDB
mongoose.connect(process.env.MONGODB_URI).then(()=>(console.log("DB Connected"))).catch((error)=>(console.log(error.message)));

//API Creation

app.get("/",(req,res)=>{
    res.send("Express App is Running")
})

//Image Storage Engine

const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

//Creating Upload Endpoint for Images

app.use('/images',express.static('upload/images'))
app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        imaage_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

//Schema for Creating Products

const Product = mongoose.model("Product",{
    id:{
      type: Number,
      required:true,  
    },
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    nw_pricw:{
        type:Number,
        required:true,
    },
    old_price:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
    default:Date.now,
    },
    available:{
        type:Boolean,
        default:true,
    },

})

app.post('/addproduct',async()=>{
    id:req.body.id
})

app.listen(port,(error)=>{
    if (!error){
        console.log("Server Running on Port "+port);
    }
    else
    {
        console.log("Error : "+error)
    }
})