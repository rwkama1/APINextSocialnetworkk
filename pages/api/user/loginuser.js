import { LoginUser } from "socialnetworkk/security/LoginUser";

import cors from "../cors";


export default async function (req, res) {

  if(req.method==="POST")
  {
    await cors(req, res)
    try
    {
        const data = req.body;
        let loginuser = await LoginUser.loginUser(data.username,data.password);
       return res.status(200).send(loginuser);
    }
    catch (error) {
      return res.status(500).send(error.message);    
      
    }
  }
 
  
}