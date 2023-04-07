const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("../models/user");
const axios = require("axios");
// import * as bcrypt from 'bcrypt';
const bcrypt=require('bcrypt');
const session = require("express-session");
const cookieParser = require("cookie-parser");

const createmusers = async (req, res) => {
  const user = req.body;
  let publics = await UserModel.find();
  let c = false;
  let users;
  let bherror = true;

  
      users = {
        name: user.name,
        email: user.email,
        password:await bcrypt.hash(user.password, 10),
        authType:"PASSWORD"
        
      };

   
      
      publics.forEach(function (item, index) {
        if (item.email === req.body.email) {
          c = true;
        }
      });
   

  if (c) {
    res.send({message:"email exist , please sign in "});
  } else {
    if (bherror) {
      const newUser = new UserModel(users);
      await newUser.save();
      console.log("user added");
      let publics2 = await UserModel.find({email:user.email});
      res.send(publics2[0]);
    } else {
        res.send({message:"server busy , user not added"});
        console.log("user not added");
    }
  }
  
};


const muserlogin = async (req, res) => {
  const user = req.body;
  let publics = await UserModel.find({email:user.email});
  console.log(publics[0].password);
  let c = false;
  let users;
  let bherror = true;

  
      users = {
        name: publics.name,
        email: publics.email,
        
        
        
      };

   
      c=await bcrypt.compare(user.password, publics[0].password);
      
   

  if (c) {
    res.send(publics[0]);
    console.log(publics[0]);
    
  } else {
    if (bherror) {
      
      res.send({message:"Invalid Credentails ",status:403});
    } else {
        res.send({message:"server busy , user not added",status:500});
        console.log("user not added");
    }
  }
  
};


module.exports = {createmusers,muserlogin};