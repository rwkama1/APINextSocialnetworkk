
import { DataUserRelation } from "socialnetworkk/data/DataUserRelation";
import cors from "../cors";

export default async function (req, res) 
{
    if(req.method==="GET")
    {
      await cors(req, res)
      try
      {
        const {piduser} = req.query;
        let getFriendsOfFriendsUser = await DataUserRelation.getFriendsOfFriendsUser(piduser);
        return res.status(200).send(getFriendsOfFriendsUser);
          
      }
      catch (error) {
         return res.status(500).send(error.message);
     }
    } 
}
