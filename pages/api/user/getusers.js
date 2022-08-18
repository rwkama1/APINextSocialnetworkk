import cors from "../cors";
import { DataUser } from "socialnetworkk/data/DataUser";


export default async function (req, res) 
{
    if(req.method==="GET")
    {
      await cors(req, res)
      try
      {
      
          let getUsers = await DataUser.getUsers();
          return res.status(200).send(getUsers);
          
      }
      catch (error) {
              return res.status(500).send(error.message);
         }
     }
}
