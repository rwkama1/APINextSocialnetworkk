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
  if(req.method==="POST")
  {
    await cors(req, res)
    try
    {
            const {iduserreceived,idusersender,title,text} = req.body;
            let addMessage = await DataMessage.addMessage
            (iduserreceived,idusersender,title,text);
            if (addMessage===-1) {
                throw new Error("The user received does not exists");
            }
            if (addMessage===-2) {
                throw new Error("The user sender does not exists");
            }
         
        return res.status(200).send("The message was added successfully");   
    }
    catch (error) {
      return res.status(500).send(error.message);    
      
    }
  }
  if(req.method==="DELETE")
  {
    await cors(req, res)
    try
    {
      const {iduserreceived,idusersender,idmessage} = req.body;
      let deleteMessage = await DataMessage.deleteMessage
      (iduserreceived,idusersender,idmessage);
              
      if (deleteMessage===-1) {
          throw new Error("The user received does not exists");
      }
      if (deleteMessage===-2) {
          throw new Error("The user sender does not exists");
      }
      if (deleteMessage===-3) {
       throw new Error("The message does not exists");
      }
       
       return res.status(200).send("The message was deleted successfully");
        
    }
        catch (error) {
            return res.status(500).send( error.message);
       }
   }
 
}