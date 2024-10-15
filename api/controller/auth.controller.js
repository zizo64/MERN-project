import User from "../models/user.model.js"
import bcryotjs from "bcryptjs"
import jwt from "jsonwebtoken"
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

export const signIn=  async(req,res)=>{
   const{ email, password}=req.body
  try{
      const validUser= await User.findOne({email})
      if(!validUser){res.status(404).json("user not found")}
      const validPass= bcryotjs.compareSync(password,validUser.password)
      if(!validPass){res.status(401).json("wrong pass")}
      const token=jwt.sign({id:validUser._id},"zizoYasi")
      res.cookie("access_tekon",token).status(200).json(validUser)
  } catch(error){
res.status(500).json(error.message)
  }
}

export const google=  async(req,res)=>{
  const{name, email,photo}=req.body
 try{
     const user= await User.findOne({email})
     if(user){
      const token=jwt.sign({id:user._id},"zizoYasi")
      res.cookie("access_tekon",token).status(200).json(user)
     } 
     else{
      const generatedPassword= Math.random().toString(36).slice(-8)
      const hashPasword= bcryotjs.hashSync(generatedPassword,10)
      const newUser= new User({username: name.split(" ").join('')+Math.random().toString(36).slice(-4) , email, password:hashPasword, avatar: photo})
      await newUser.save()
      const token=jwt.sign({id:newUser._id},"zizoYasi")
      res.cookie("access_tekon",token).status(200).json(newUser)
     }
   
 } catch(error){
res.status(500).json(error.message)
 }
}