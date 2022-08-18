import { DataPhoto } from "socialnetworkk/data/DataPhoto";
import cors from "../cors";

export default async function (req, res) {
    if(req.method==="GET")
        {
          await cors(req, res)
          try
          {
            let arraydiffdate=[];
            
            let array=await DataPhoto.getImages();
            for (const image of array) {
                image.DiffDatePublishDateNow();
                image.showDiffDatePublishDateNow();
                arraydiffdate.push(image);
              }
  
              return res.status(200).send(arraydiffdate);
              
           }
          catch (error) {
                  return res.status(500).send(error.message);
            }
      }
  }