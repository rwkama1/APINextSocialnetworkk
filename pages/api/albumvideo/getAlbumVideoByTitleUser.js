import { DataAlbumVideo } from "socialnetworkk/data/DataAlbumVideo";
import cors from "../cors";

export default async function (req, res) {
    if(req.method==="GET")
        {
          await cors(req, res)
          try
          {
            
            const {title,piduser} = req.query;
            let getAlbumVideoByTitleUser = await DataAlbumVideo.getAlbumVideoByTitleUser
            (title,piduser);
          
            return res.status(200).send(getAlbumVideoByTitleUser);
              
           }
        catch (error) {
                  return res.status(500).send(error.message);
            }
      }

    }