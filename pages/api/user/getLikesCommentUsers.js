import cors from "../cors";
import { DataUser } from "socialnetworkk/data/DataUser";


export default async function (req, res) 
{
    if(req.method==="GET")
    {
      await cors(req, res)
      try
      {
        const {idcomment} = req.query;
        let getLikesCommentUsers = await DataUser.getLikesCommentUsers(idcomment);
          return res.status(200).send(getLikesCommentUsers);
          
      }
      catch (error) {
              return res.status(500).send(error.message);
         }
  }
}