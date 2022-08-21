import cors from "../cors";
import { DataUser } from "socialnetworkk/data/DataUser";


export default async function (req, res) 
{
    if(req.method==="GET")
    {
      await cors(req, res)
      try
      {
        const {idvideo} = req.query;
        let getLikesVideoUsers = await DataUser.getLikesVideoUsers(idvideo);
          return res.status(200).send(getLikesVideoUsers);
          
      }
      catch (error) {
              return res.status(500).send(error.message);
         }
  }
}