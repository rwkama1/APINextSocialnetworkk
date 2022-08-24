import { DataMessage } from "socialnetworkk/data/DataMessage";
import cors from "../cors";

export default async function (req, res) {
    if(req.method==="GET")
        {
          await cors(req, res)
          try
          {
            let arraydiffdate=[];
            const {iduserlogin,name} = req.query;
            let array=await DataMessage.getSearchNameMessagesByUserReceived
            (iduserlogin,name);
            for (const message of array) {
                message.DiffDatePublishDateNow()
                message.showDiffDatePublishDateNow()
                arraydiffdate.push(message);
                
            
            }     
            return res.status(200).send(arraydiffdate);
              
           }
        catch (error) {
                  return res.status(500).send(error.message);
            }
      }

    }