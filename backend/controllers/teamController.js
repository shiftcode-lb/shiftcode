const teamModel = require('../models/teamModel');

exports.createTeam = async (req, res)=>{
    try{
        const {name, email, position, description, image, socialLinks} =  req.body

        // validate body
        if (!name || typeof name !== 'string') {
            return res.status(400).json({ message: 'Invalid name' });
        }
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            return res.status(400).json({ message: 'Invalid email' });
        }
        if (!position || typeof position !== 'string') {
            return res.status(400).json({ message: 'Invalid name' });
        }
        if (!description || description.length < 10) {
            return res.status(400).json({ message: 'Description too short' });
        }
        if (!image || !/^https?:\/\/.+\..+/.test(image)) {
            return res.status(400).json({ message: 'Invalid image URL' });
        }
        if (socialLinks) {
            if (socialLinks.instagram && !/^https?:\/\/.+\..+/.test(socialLinks.instagram)) {
                return res.status(400).json({ message: 'Invalid Instagram URL' });
            }
            if (socialLinks.linkedin && !/^https?:\/\/.+\..+/.test(socialLinks.linkedin)) {
                return res.status(400).json({ message: 'Invalid LinkedIn URL' });
            }
            if (socialLinks.github && !/^https?:\/\/.+\..+/.test(socialLinks.github)) {
                return res.status(400).json({ message: 'Invalid GitHub URL' });
            }
        }

        const newMember = new teamModel({name, email, position, description, image, socialLinks})

        await newMember.save()

        return res.status(201).json({message: "Team member added successfuly!"})

    }catch(e){
        return res.status(500).json({message: e.message})
    }
}

exports.getTeam = async (req, res)=>{
    try{
        const teamMembers = await teamModel.find()
        if(!teamMembers || teamMembers.length==0)
            return res.status(404).json({message: "Team member not found!"})
        return res.status(200).json({teamMembers})
    }catch(e){
        return res.status(500).json({message: e.message})
    }
}

exports.getTeamMember = async (req, res)=>{
    try{
        const memberID = req.params.id 
        const member = await teamModel.findById(memberID)

        if(!member)
            return res.status(404).json({message: "Member is not found!"})
        return res.status(200).json({member})
    }catch(e){
        return res.status(500).json({message: e.message})
    }
}

exports.countMembers = async (req, res) => {
    try {
    const teamCount = await teamModel.countDocuments();
    return res.status(200).json({ teamCount });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}