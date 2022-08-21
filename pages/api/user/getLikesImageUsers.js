import cors from "../cors";
import { DataUser } from "socialnetworkk/data/DataUser";


export default async function (req, res) 
{
    if(req.method==="GET")
    {
      await cors(req, res)
      try
      {
        const {idimage} = req.query;
        let getLikesImageUsers = await DataUser.getLikesImageUsers(idimage);
          return res.status(200).send(getLikesImageUsers);
          
      }
      catch (error) {
              return res.status(500).send(error.message);
         }
  }
}