const projectModel = require('../models/projectsModel')

exports.createProject = async (req,res)=>{
    try{
        const {name, description, image, category} = req.body
        const allowedCategories = ["informative", "e-commerce", "dashboards", "portfolio"]
        if (!name || typeof name !== 'string') {
            return res.status(400).json({ message: 'Invalid name' });
        }
        if (!image || !/^https?:\/\/.+\..+/.test(image)) {
            return res.status(400).json({ message: 'Invalid image URL' });
        }
        if (!description || description.length < 10) {
            return res.status(400).json({ message: 'Description too short' });
        }
        if (!category || typeof category !== 'string' || !allowedCategories.includes(category)) {
            return res.status(400).json({ message: 'Invalid category' });
        }

        const newProject = new projectModel({name, image, description, category})
        await newProject.save()

        return res.status(201).json({message: "project created successfully!"})
    }catch(e){
        return res.status(500).json({message:e.message})
    }
}

exports.getAllProjects = async (req, res)=>{
    try{
        const projects = await projectModel.find()
        if(!projects)
            return res.status(404).json({message: "Projects not found!"})
        return res.status(200).json({projects})
    }catch(e){
        return res.status(500).json({message:e.message})
    }
}

exports.getProject = async (req, res)=>{
    try{
        const projectId = req.params.id 
        const project = await projectModel.findById({projectId})

        if(!project)
            return res.status(404).json({message:"project not found!"})

        return res.status(200).json({project})
        
    }catch(e){
        return res.status(500).json({message:e.message})
    }
}

exports.countProjects = async (req, res) => {
  try {
    const project = await projectModel.find();
    const projectCount = project.length;
    console.log(projectCount)
    return res.status(200).json({ projectCount });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
