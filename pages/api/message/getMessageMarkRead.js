import { DataMessage } from "socialnetworkk/data/DataMessage";
import cors from "../cors";

export default async function (req, res) {
    if(req.method==="GET")
        {
          await cors(req, res)
          try
          {
         
            const {idmessage} = req.query;
            let getMessageMarkRead=await DataMessage.getMessageMarkRead(idmessage);
            if (getMessageMarkRead===-1) 
            {
                throw new Error("The message does not exists ");    
            }
            getMessageMarkRead.DiffDatePublishDateNow()
              getMessageMarkRead.showDiffDatePublishDateNow()
        
            
            return res.status(200).send(getMessageMarkRead);
              
           }
        catch (error) {
                  return res.status(500).send(error.message);
            }
      }

    }