const { deleteMany } = require('../models/list-model');
const List = require('../models/list-model');

// const listController = {
//     getAll : (req, res) => {
//         console.log('Récupération de toutes les tâches');
//         res.sendStatus(501);
//     }
// };

const listController = {
    getAll : async (req, res) => {
        const tasks = await List.find();
        res.status(200).json(tasks);
    },
    getById : async (req,res) => {
        const idTask = req.params.id;
        const task = await List.findById(idTask);
        res.status(200).json(task);
    },
    create : async (req, res) => {
        const taskToAdd = List(req.body);
        await taskToAdd.save();
        res.status(200).json(taskToAdd);
    },
    delete : async (req, res) => {
        const id = req.params.id;
        const taskToDelete = await List.findByIdAndDelete(id);
        // const taskToDelete = await List.findOneAndDelete(id);
        if (!taskToDelete) {
            res.sendStatus(404);
        }
        else {
            res.status(204).json('Tâche supprimée');
        }
    },
    /////////////////////////////////////////////////////////////////////
    // deleteMany : async (req, res) => {
    //     let tasksFilter;
    //     const tasks = req.query.task;
    //     console.log(req.query)

    //     if(tasks){
    //         tasksFilter = { task : tasks };
    //     }
    //     else{
    //         tasksFilter = {};
    //     }

        
    //     console.log(tasksFilter)


    //     const tasksToDelete = await List.findOneAndDelete(tasksFilter);
    //     if (!tasksToDelete) {
    //         console.log(tasksFilter)
    //         res.sendStatus(404);
    //     }
    //     else {
    //         res.status(204).json('Tâche(s) supprimée(s)');
    //     }
    // }
    /////////////////////////////////////////////////////////////////////
     /////////////////////////////////////////////////////////////////////
    // deleteMany : async (req, res) => {
    //     let tasksFilter;
    //     const tasks = req.query.task;
    //     // console.log(tasks)

    //     if(tasks){
    //         if (Array.isArray(tasks)) {
    //             tasksFilter = { task : { $in : tasks } };
    //             console.log(tasksFilter)
    //         }
    //         else {
    //             tasksFilter = { task : tasks };
    //         }
    //     }
    //     else{
    //         tasksFilter = {};
    //     }

        
    //     // console.log(tasksFilter)

    //     // const tasksToDelete = await List.findByIdAndDelete(tasksFilter);
    //     const tasksToDelete = await List.find(tasksFilter);
        
    //     console.log(tasksToDelete);
    //     if (!tasksToDelete) {
    //         // console.log(tasksFilter)
    //         res.sendStatus(404);
    //     }
    //     else {
    //         res.status(204).json('Tâche(s) supprimée(s)');
    //     }
    // }
    /////////////////////////////////////////////////////////////////////
};


module.exports = listController;