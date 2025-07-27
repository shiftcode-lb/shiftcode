const servicesModel = require('../models/servicesModel')

exports.createService = async (req,res)=>{
    try{
        const {name, description, image} = req.body
        if (!name || typeof name !== 'string') {
            return res.status(400).json({ message: 'Invalid name' });
        }
        if (!image || !/^https?:\/\/.+\..+/.test(image)) {
            return res.status(400).json({ message: 'Invalid image URL' });
        }
        if (!description || description.length < 10) {
            return res.status(400).json({ message: 'Description too short' });
        }

        const newService = new servicesModel({name, image, description, category})
        await newService.save()

        return res.status(201).json({message: "service created successfully!"})
    }catch(e){
        return res.status(500).json({message:e.message})
    }
}

exports.getServices = async (req, res)=>{
    try{
        const services = await servicesModel.find()
        if(!services || services.length==0)
            return res.status(404).json({message: "services not found!"})
        return res.status(200).json({services})
    }catch(e){
        return res.status(500).json({message: e.message})
    }
}

exports.getService = async (req, res)=>{
    try{
        const serviceId = req.params.id 
        const service = await servicesModel.findById({serviceId})

        if(!service)
            return res.status(404).json({message: "service not found!"})
        return res.status(200).json({service})
    }catch(e){
        return res.status(500).json({message: e.message})
    }
}