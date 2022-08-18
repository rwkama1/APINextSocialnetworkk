
import { DataUserRelation } from "socialnetworkk/data/DataUserRelation";
import cors from "../cors";

export default async function (req, res) 
{
    if(req.method==="GET")
    {
      await cors(req, res)
      try
      {
        const {piduser,pnick} = req.query;
        let getSearchNickFriendsbyUser = await DataUserRelation.getSearchNickFriendsbyUser(piduser,pnick);
          return res.status(200).send(getSearchNickFriendsbyUser);
          
      }
      catch (error) {
              return res.status(500).send(error.message);
         }
    } 
}
