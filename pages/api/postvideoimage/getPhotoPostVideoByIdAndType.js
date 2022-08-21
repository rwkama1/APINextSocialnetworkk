import { DataPhotoPostVideo } from "socialnetworkk/data/DataPhotoPostVideo";
import cors from "../cors";

export default async function (req, res) {
    if(req.method==="GET")
        {
          await cors(req, res)
          try
          {
         
            const {id,type} = req.query;
            
            let data=await DataPhotoPostVideo.getPhotoPostVideoByIdAndType
            (id,type)   
            data.DiffDatePublishDateNow()
            data.showDiffDatePublishDateNow()
        
            return res.status(200).send(data);
              
           }
        catch (error) {
                  return res.status(500).send(error.message);
            }
      }

    }