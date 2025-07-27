const requestModel = require('../models/requestsModel')

exports.createRequest = async (req, res)=>{
    try{
        const {name, email, body} = req.body
        if (!name || typeof name !== 'string') {
            return res.status(400).json({ message: 'Invalid name' });
        }
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            return res.status(400).json({ message: 'Invalid email' });
        }
        if (!body || body.length < 10) {
            return res.status(400).json({ message: 'Body too short' });
        }
       
        const newRequest = new requestModel({name, email, body})
        await newRequest.save()

        return res.status(201).json({message: "Request created successfuly!"})
    }catch(e){
        return res.status(500).json({message: e.message})
    }
}

exports.getAllRequests = async (req, res)=>{
    try{
        const requests = await requestModel.find()
        if(!requests || requests.length==0)
            return res.status(404).json({message: "requests not found"})
        return res.status(200).json({requests})
    }catch(e){
        return res.status(500).json({message: e.message})
    }
}

exports.getRequest = async (req, res)=>{
    try{
        const reqId = req.params.id 
        const request = await requestModel.findById(reqId)
        if(!request)
            return res.status(404).json({message: "request not found"})
        return res.status(200).json({request})
    }catch(e){
        return res.status(500).json({message: e.message})
    }
}