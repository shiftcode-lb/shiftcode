const company = require('../models/companyModel')

exports.getCompany = async (req, res)=>{
    try{
        const company = await company.find()
        if(!company)
            return res.status(404).json({message: "data not found!"})
        return res.status(200).json({company})
    }catch(e){
        return res.status(500).json({message:e.message})
    }
}

exports.addCompany = async (req, res)=>{
    try{
        const {name, email, socialLinks, partner, events, workingDays} = req.body
        const newCompany = new company({name, email, socialLinks, partner, events, workingDays})

        await newCompany.save()
        return res.status(201).json({message: "Company added successfully!"})
    }catch(e){
        return res.status(500).json({message: e.message})
    }
}