const jobModel = require('../models/jobModel');

exports.createJob = async (req, res)=>{
    try{
        const {title, description, endDate} = req.body

        //validate inputs
        if (!title || typeof title !== 'string') {
            return res.status(400).json({ message: 'Invalid title' });
        }
        if (!description || description.length < 10) {
            return res.status(400).json({ message: 'Description too short' });
        }
        if (!endDate || isNaN(Date.parse(endDate))) {
            return res.status(400).json({ message: 'Invalid date format' });
        }

        const newJob = new jobModel({title, description, endDate})
        await newJob.save()

        return res.status(200).json({message: "new Joob added successfuly!"})
    }catch(e){
        return res.status(500).json({message: e.message})
    }
}

exports.getAllJobs = async (req, res)=>{
    try{
        const jobs = await jobModel.find()
        if(!jobs || jobs.length()==0)
            return res.status(404).json({message: "jobs not found!"})
        return res.status(200).json({jobs})
    }catch(e){
        return res.status(500).json({message: e.message})
    }
}

exports.getJob = async (req, res)=>{
    try{
        const jobID = req.params.id 
        const job = await jobModel.findById(jobID)

        if(!job)
            return res.status(404).json({message: "job not found!"})
        return res.status(200).json({job})
    }catch(e){
        return res.status(500).json({message: e.message})
    }
}