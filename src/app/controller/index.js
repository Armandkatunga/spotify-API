

const getAllTask = (req,res)=>{
    res.json(req.body)
}

const createTask = (req,res)=>{
    res.json(req.body)
}

const getTask = (req,res)=>{
    res.json({id:req.params.id})
}


const updateTask = (req,res)=>{
    res.send('salut')
}

const deleteTask = (req,res)=>{
    res.send('salut')
}



module.exports = {
    getAllTask,getTask,createTask,updateTask,deleteTask
}

