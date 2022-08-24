import cors from "../cors";
import { DataMessage } from "socialnetworkk/data/DataMessage";
import { DTOPost } from "socialnetworkk/entity/DTOPost";


export default async function (req, res) {

  if(req.method==="OPTIONS")
  {
    try
    {
        return res.status(200).send("OK")
    }
    catch (error) {
      return res.status(500).send("OPTION ERROR "+error.message);
    }
  }
  if(req.method==="PUT")
  {
    await cors(req, res)
    try
    {
            const {iduserlogin} = req.body;
            let markallMessagesasreadbyUser = await DataMessage.
            markallMessagesasreadbyUser(iduserlogin);
          
            if (markallMessagesasreadbyUser===-1) {
                throw new Error("The user  does not exists");
            }
         
        return res.status(200).send("The messages were  updated");   
    }
    catch (error) {
      return res.status(500).send(error.message);    
      
    }
  }

}