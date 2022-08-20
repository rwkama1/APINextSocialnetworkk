import { DataAlbumVideo } from "socialnetworkk/data/DataAlbumVideo";
import cors from "../cors";

export default async function (req, res) {
    if(req.method==="GET")
        {
          await cors(req, res)
          try
          {
        
            let getAlbumVideos = await DataAlbumVideo.getsAlbumVideos
            ();
          
            return res.status(200).send(getAlbumVideos);
              
           }
        catch (error) {
                  return res.status(500).send(error.message);
            }
      }

    }