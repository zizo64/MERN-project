import User from "../models/user.model.js"
import bcryotjs from "bcryptjs"
export const signUp=  async(req,res)=>{
    const{username, email, password}=req.body
    const hashPasword= bcryotjs.hashSync(password,10)
    const newUser= new User({username, email, password:hashPasword})
   try{
       await newUser.save()
        res.status(201).json("user add successfully")
   } catch(error){
res.status(500).json(error.message)
   }
}