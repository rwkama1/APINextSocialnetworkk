import cors from "../cors";
import { DataUser } from "socialnetworkk/data/DataUser";


export default async function (req, res) 
{
    if(req.method==="GET")
    {
      await cors(req, res)
      try
      {
        const {idpost} = req.query;
        let getLikesPostUsers = await DataUser.getLikesPostUsers(idpost);
          return res.status(200).send(getLikesPostUsers);
          
      }
      catch (error) {
              return res.status(500).send(error.message);
         }
  }
}