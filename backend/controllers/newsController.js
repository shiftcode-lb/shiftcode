const newsModel = require('../models/newsModel');

exports.createNews = async (req, res)=>{
    try{
        const {title, image, description} = req.body

        if (!title || typeof title !== 'string') {
            return res.status(400).json({ message: 'Invalid title' });
        }
        if (!image || !/^https?:\/\/.+\..+/.test(image)) {
            return res.status(400).json({ message: 'Invalid image URL' });
        }
        if (!description || description.length < 10) {
            return res.status(400).json({ message: 'Description too short' });
        }

        const newNews = new newsModel({title, image, description})
        newNews.save()
        
        return res.status(201).json({message: "news created successfullu!"})
    }catch(e){
        return res.status(500).json({message: e.message})
    }
}

exports.getAllNews = async (req, res)=>{
    try{
        const news = await newsModel.find()
        if(!news || news.length==0)
            return res.status(404).json({message: "News not found!"})
        return res.status(200).json({news})
    }catch(e){
        return res.status(500).json({message: e.message})
    }
}

exports.getNews = async (req, res)=>{
    try{
        const newsID = req.params.id 
        const news = await newsModel.findById({newsID})
        if(!news)
            return res.status(404).json({message: "News not found!"})
        return res.status(200).json({news})
    }catch(e){
        return res.status(500).json({message: e.message})
    }
}