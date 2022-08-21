import cors from "../cors";
import { DataUser } from "socialnetworkk/data/DataUser";


export default async function (req, res) 
{
    if(req.method==="GET")
    {
      await cors(req, res)
      try
      {
        const {idsubcomment} = req.query;
        let getLikesSubCommentUsers = await DataUser.getLikesSubCommentUsers(idsubcomment);
          return res.status(200).send(getLikesSubCommentUsers);
          
      }
      catch (error) {
              return res.status(500).send(error.message);
         }
  }
}