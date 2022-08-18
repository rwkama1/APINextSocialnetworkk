
import { DataUserRelation } from "socialnetworkk/data/DataUserRelation";
import cors from "../cors";

export default async function (req, res) 
{
    if(req.method==="GET")
    {
      await cors(req, res)
      try
      {
        const {piduserlogin,piduser2} = req.query;
        let getMutualFriendsByUsers = await DataUserRelation.getMutualFriendsByUsers(piduserlogin,piduser2);
        return res.status(200).send(getMutualFriendsByUsers);
          
      }
      catch (error) {
         return res.status(500).send(error.message);
     }
    } 
}
