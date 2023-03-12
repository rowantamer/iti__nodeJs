let stdModel = require("../model/studentModel");
let validate = require("../utils/studentsValidation")


let getAllStds = async(req , res)=>{

    var allStudent = await stdModel.find({});
    await res.json(allStudent)

}

let getById = async(req , res)=>{

    var ID = req.params.id ;
    var data = await stdModel.find({id : ID });
    await res.json(data)

}

let createOne = async(req , res)=>{

    var data = req.body ; 
    const valid = validate(data)

    if (!valid) console.log(validate.errors)

    else {

        var newStd = new stdModel(data);
        await newStd.save();
        await res.json(newStd);

    }   
}

let deleteId = async(req , res)=>{

    var ID = req.params.id ;
    var data = await stdModel.deleteOne({id : ID });
    await res.json(data)

}

let update = async(req , res)=>{

    var ID = req.params.id;
    var data = req.body;
    console.log(data)
    const valid = validate(data)

    if (!valid) console.log(validate.errors)

    else {
        data = await stdModel.updateOne({id : ID } , data );
        await res.json(data);
    }
}



module.exports = {

    getAllStds,
    createOne,
    getById,
    deleteId,
    update
}