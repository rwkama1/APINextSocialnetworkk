import cors from "../cors";
import { DataUser } from "socialnetworkk/data/DataUser";


export default async function (req, res) 
{
    if(req.method==="GET")
    {
      await cors(req, res)
      try
      {
        const {pname,pnick,pusername,pemail,pwebsite,pocupation,pcity,
        pcountry} = req.query;
        let getUsersSearchs = await DataUser.getUsersSearchs(
            pname,pnick,pusername,pemail,pwebsite,pocupation,pcity,pcountry);
          return res.status(200).send(getUsersSearchs);
          
      }
      catch (error) {
              return res.status(500).send(error.message);
         }
  }
}