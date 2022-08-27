import { DataUser } from "socialnetworkk/data/DataUser";

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
  if(req.method==="PUT")
  {
    await cors(req, res)
    try
    {
            const data = req.body;
            let insertProfilePicture = await DataUser.insertProfilePicture(
              data.imgurl, data.username);
            if (insertProfilePicture===-1)
            {
                throw new Error("The user name does not exists");
            }
           
            return res.status(200).send("The Profile Picture was added successfully");
    }
    catch (error) {
      return res.status(500).send("Could not insert profile picture user: "+error.message);    
      
    }
  }
 
  
}