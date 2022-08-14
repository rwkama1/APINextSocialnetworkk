import { LoginUser } from "socialnetworkk/security/LoginUser";

import cors from "../cors";


export default async function (req, res) {
    if(req.method==="OPTIONS")
    {
      try
      {
          return res.status(200).send("OK")
      }
      catch (error) {
        return res.status(500).send("OPTION ERROR "+error.message);
      }
    }
  if(req.method==="POST")
  {
    await cors(req, res)
    try
    {    
        let logout = await LoginUser.logoutUser();
       return res.status(200).send(logout);
    }
    catch (error) {
      return res.status(500).send(error.message);    
      
    }
  }
 
}