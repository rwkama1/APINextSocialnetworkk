import { DataPhotoPostVideo } from "socialnetworkk/data/DataPhotoPostVideo";
import cors from "../cors";

export default async function (req, res) {
    if(req.method==="GET")
        {
          await cors(req, res)
          try
          {
            let arraydiffdate=[];
            const {country} = req.query;
        
            let array=await DataPhotoPostVideo.getPhotoPostVideoCountryUser
            (country)
            for (const post of array) {
                post.DiffDatePublishDateNow()
                post.showDiffDatePublishDateNow()
                arraydiffdate.push(post);
            }
            return res.status(200).send(arraydiffdate);
              
           }
        catch (error) {
                  return res.status(500).send(error.message);
            }
      }

    }