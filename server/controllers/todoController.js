const { User,Todo } = require('../models')

class TodoController{
    static getTodo(req,res){
        Todo.findAll()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json({message: 'server error'})
        })
    }
    static addTodo(req,res){
        const newTodo = {
            name: req.body.name,
            type: req.body.type,
            description: req.body.description,
            date: req.body.date,
            time: req.body.time
        }
        Todo.create(newTodo)
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(500).json({message: 'server error'})
        })
    }
    static deleteTodo(req,res){
        Todo.destroy({
            where: {
                id:req.params.id
            }
        })
        .then(() => {
            res.status(200).json({message: 'Todo has been deleted'})
        })
        .catch(err => {
            res.status(500).json({message: 'server error'})
        })
    }
    // static editTodo(req,res){
    //     Todo.update({
    //         where:{
    //             id:req.params.id
    //         }
    //     })
    //     .then(data => {
    //         res.status(200).json(data)
    //     })
    //     .catch(err => {
    //         res.status(405).json({message: 'Wrong data update'})
    //     })
    // }
}

module.exports = TodoController