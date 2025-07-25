const teamModel = require('../models/teamModel');
const teamMember = require('../models/teamModel')

exports.createTeam = async (req, res)=>{
    try{
        const {name, email, description, image, socialLinks} =  req.body

        // validate body
        if (!name || typeof name !== 'string') {
            return res.status(400).json({ message: 'Invalid name' });
        }
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            return res.status(400).json({ message: 'Invalid email' });
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
            if (socialLinks.facebook && !/^https?:\/\/.+\..+/.test(socialLinks.facebook)) {
                return res.status(400).json({ message: 'Invalid Facebook URL' });
            }
        }

        const newMember = new teamModel({name, email, description, image, socialLinks})

        await newMember.save()

        return res.status(200).json({message: "Team member added successfuly!"})

    }catch(e){
        return res.status(500).json({message: e.message})
    }
}