import { DataUser } from "socialnetworkk/data/DataUser";

import cors from "../cors";


export default async function (req, res) {

  if(req.method==="PUT")
  {
    await cors(req, res)
    try
    {
            const data = req.body;
            let insertCoverPicture = await DataUser.insertCoverPicture(data.imgcoverurl, data.username);
            if (insertCoverPicture===-1)
             {
               throw new Error("The user name does not exists");
             }

           
            return res.status(200).send("The Cover Imagee was added successfully");
    }
    catch (error) {
      return res.status(500).send("Could not insert cover picture user: "+error.message);    
      
    }
  }
}