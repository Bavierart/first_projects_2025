const Task = require('../models/task')

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    }
    catch (error) {
        console.error(error)
        res.status(500).json({msg:error})
    }
} 

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    }
    catch (error) {
        console.error(error)
        res.status(500).json({msg:error})
    }
}

const getTask = async (req, res) => {
    try {
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID})
        if (!task) {
            res.status(404).send("NOT FOUND")
            return
        }
        res.status(200).json({task})
    }
    catch (error) {
        console.error(error)
        res.status(500).json({msg:error}) 
    }
}

const updateTask = async (req, res) => {
    try {
        const {id:taskID} = req.params
        const task = await Task.findByIdAndUpdate({_id:taskID}, req.body, {
            new:true,
            runValidators:true
        })
        if (!task) {
            res.status(404).send("NOT FOUND")
            return
        }
        res.status(200).json({task})
    }
    catch(error) {
        console.error(error)
        res.status(500).json({msg:error}) 
    }
}

const deleteTask = async (req, res) => {
    try {
        const {id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id:taskID})
        if (!task) {
            res.status(404).json({task:"not found", success:false})
            return
        }
        res.status(200).json({task:null, success:true})
    }
    catch(error) {
        console.error(error)
        res.status(500).json({msg:error}) 
    }
}


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}