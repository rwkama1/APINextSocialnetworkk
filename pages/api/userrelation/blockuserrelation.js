import cors from "../cors";
import { DataUserRelation } from "socialnetworkk/data/DataUserRelation";


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
        let blockFriend = await DataUserRelation.blockFriend(data.iduser
            ,data.idfriend);
        if (blockFriend===-1) {
         throw new Error("The user does not exists");
     }
     if (blockFriend===-2) {
         throw new Error("The friend does not exists");
     }
     if (blockFriend===-3) {
         throw new Error("The users relation does not exists");
     }

        return res.status(200).send("Friend request has been blocked");  
    
      }
      catch (error) {
        return res.status(500).send(error.message);    
        
      }
    }
} 