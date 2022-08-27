
import { DataUserRelation } from "socialnetworkk/data/DataUserRelation";
import cors from "../cors";



export default async function (req, res) 
{
    if(req.method==="GET")
    {
      await cors(req, res)
      try
      {
        const {piduser,pidfriend} = req.query;
        let getUserRelation = await DataUserRelation.getUserRelation(piduser,pidfriend);
        if (getUserRelation===-1)
          {
            throw new Error("The user relation does not exists");
          }
          return res.status(200).send(getUserRelation);
          
      }
      catch (error) {
              return res.status(500).send(error.message);
         }
    } 
}
