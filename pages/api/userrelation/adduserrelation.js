import cors from "../cors";
import { DataUserRelation } from "socialnetworkk/data/DataUserRelation";
import { DTOUserRelation } from "socialnetworkk/entity/DTOUserRelation";

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
        const data = req.body;
        let dtour = new DTOUserRelation();
        dtour.user.iduser = data.iduser;
        dtour.friend.iduser = data.idfriend;

        let addUserRelation1 = await DataUserRelation.addUserRelation(dtour);
        if (addUserRelation1===-1) {
            throw new Error("The user does not exists");
        }
        if (addUserRelation1===-2) {
            throw new Error("The friend does not exists");
        }
        if (addUserRelation1===-3) {
            throw new Error("The users relation already exists");
        }
        return res.status(200).send("Friend request has been sent");  
    
      }
      catch (error) {
        return res.status(500).send(error.message);    
        
      }
    }
} 