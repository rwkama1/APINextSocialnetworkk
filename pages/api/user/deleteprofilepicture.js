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
                let deleteProfilePicture = await DataUser.deleteProfilePicture(data.username);
                if (deleteProfilePicture===-1)
            {
                throw new Error("The user name does not exists");
            }
            return res.status(200).send("The Profile Picture was deleted successfully");
    }
    catch (error) {
      return res.status(500).send("Could not delete profile picture user: "+error.message);    
      
    }
  }
} 