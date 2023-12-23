/* eslint-disable no-unused-vars */
const express = require("express");
const router = express.Router();
const fetchUser = require("../middlewares/Getuser");
const Notes = require("../models/Note");
const { body, validationResult } = require("express-validator");

//ROUTE 1 : Get All the notes from a Logged in user using GET. Login required
router.get("/fetchallnotes", fetchUser, async (req, res) => {
   try{
  const notes = await Notes.find({ user: req.user.id });

  res.json(notes);
   }catch(err){
      res.status(400).send("Unable to fetch notes")
   }
});

//ROUTE 2 : Add new note using POST, login required
router.post(
  "/addnote",
  fetchUser,
  [
    body("title", "Enter a valid Title").isLength({ min: 3 }),
    body("description", "At least 5 characters").isLength({ min: 5 }),
  ],
  async (req, res) => {

   try{
    const { title, description, tag } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ error: errors.array });
    }

    const note = await new Notes({
      title,
      description,
      tag,
      user: req.user.id,
    });

    const savedNote = await note.save();

    res.json(savedNote);
   }catch(err){
    res.status(400).send("Error Occured");
   }
  }
);

//ROUTE 3 : Updating an existing Note at /updatenote by PUT. Login required.

router.put(`/updatenote/:id`,fetchUser,async(req,res)=>{
  try{
        const {title,description,tag} = req.body;

        //Create new Note object
        const newNote = {};
        if(title) { newNote.title = title;}
        if(description) { newNote.description = description;}
        if(tag) { newNote.tag = tag;}

        //Find Note to be updated and update it
        let note = await Notes.findById(req.params.id);
        if(!note){
          return res.status(404).send("Not Found");
        }

        if(note.user.toString() !== req.user.id){
           return res.status(401).json({'error':"Not Allowed"});
        }

        note = await Notes.findByIdAndUpdate(req.params.id,{$set: newNote}, {new:true});
        res.json(note);
      }catch(error){
        return res.status(400).send(error);
      }
})

//ROUTE 4: Delete an Existing note using DELETE at 'api/notes/deletenote Login required
router.delete('/deletenote/:id',fetchUser,async(req,res) => {
  try {
    let note = await Notes.findById(req.params.id);

    if(!note){
      return res.status(404).send("Not Found");
    }

    if(note.user.toString() !== req.user.id){
      return res.status(401).json({"error":"Not Allowed"});
    }

    await Notes.findByIdAndDelete(req.params.id);
    res.json({"success":"Note Deleted","Note":note});

  } catch (error) {
    return res.status(400).send(error);
  }
})

module.exports = router;