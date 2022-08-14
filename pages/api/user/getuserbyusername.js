import cors from "../cors";
import { DataUser } from "socialnetworkk/data/DataUser";


export default async function (req, res) 
{
    if(req.method==="GET")
    {
      await cors(req, res)
      try
      {
        const {pusername} = req.query;
        let getUserbyUserName = await DataUser.getUserbyUserName(pusername);
        if (getUserbyUserName===-1)
          {
            throw new Error("The user name does not exists");
          }
          return res.status(200).send(getUserbyUserName);
          
      }
      catch (error) {
              return res.status(500).send(error.message);
         }
    } 
}
