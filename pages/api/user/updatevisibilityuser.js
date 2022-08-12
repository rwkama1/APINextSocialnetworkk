import { DataUser } from "socialnetworkk/data/DataUser";
import cors from "../cors";

export default async function (req, res) {

    if(req.method==="PUT")
    {
      await cors(req, res)
      try
      {
              const data = req.body;
              let updateVisibilityUser = await DataUser.updateVisibilityUser(data.visibility, data.username);
              if (updateVisibilityUser===-1)
              {
                throw new Error("The user name does not exists");
              }
                
              return res.status(200).send("The visibility was updated successfully");
      }
      catch (error) {
        return res.status(500).send("Could not update visibility user: "+error.message);    
        
      }
    }
   
    
  }