let courseModel = require('../model/courseModel')
let validate = require('../utils/coursersValidation');



let getAll = async(req , res)=>{
    let data =  await courseModel.find({});
    await res.json(data);

}

let getById = async(req , res)=>{
    var ID = req.params.id ; 
    let data =  await courseModel.find({id : ID});
    await res.json(data);
}

let createOne = async(req , res)=>{

    let data = req.body;
    const valid = validate(data)

    if (!valid) console.log(validate.errors)

    else {

        let newCourse =  new courseModel(data);
        await newCourse.save();
        await res.json(newCourse);
        
    }  
}

let updateOneById = async(req , res)=>{

    var ID = req.params.id ;
    let data = req.body;
    console.log(data)
    const valid = validate(data)

    if (!valid) console.log(validate.errors)

    else {

        data = await courseModel.updateOne( {id: ID} , data );
        await res.json(data);
    }
}


let deleteById = async(req , res)=>{

    var ID = req.params.id ;
    let data =  await courseModel.deleteOne({id : ID});
    await res.json(data);

}



module.exports = {
    getAll ,
    getById ,
    createOne ,
    updateOneById ,
    deleteById
}