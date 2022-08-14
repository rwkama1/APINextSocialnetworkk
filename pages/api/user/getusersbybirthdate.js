import cors from "../cors";
import { DataUser } from "socialnetworkk/data/DataUser";


export default async function (req, res) 
{
    if(req.method==="GET")
    {
      await cors(req, res)
      try
      {
        const {pdate1,pdate2} = req.query;
        let getUsersbyBirthDate = await DataUser.getUsersbyBirthDate(
         pdate1,pdate2);

          return res.status(200).send(getUsersbyBirthDate);
          
      }
      catch (error) {
              return res.status(500).send(error.message);
         }
  }
}