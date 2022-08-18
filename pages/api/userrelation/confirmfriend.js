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
        let confirmFriend1 = await DataUserRelation.confirmFriend(data.iduser
            ,data.idfriend);
        if (confirmFriend1===-1) {
         throw new Error("The user does not exists");
     }
     if (confirmFriend1===-2) {
         throw new Error("The friend does not exists");
     }
     if (confirmFriend1===-3) {
         throw new Error("The users relation does not exists");
     }

        return res.status(200).send("Friend request has been confirmed");  
    
      }
      catch (error) {
        return res.status(500).send(error.message);    
        
      }
    }
} 