const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");


//const session = require("express-session");

const logouts= async(req,res)=>{
    

//    // const userCookie = document.cookie
//   .split('; ')
//   .find((cookie) => cookie.startsWith('user='));
// const user = userCookie ? JSON.parse(userCookie.split('=')[1]) : null;
// console.log(user);
    console.log(req.session.user)
  
}
 module.exports = logouts;