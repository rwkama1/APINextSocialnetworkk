import { DataAlbumVideo } from "socialnetworkk/data/DataAlbumVideo";
import cors from "../cors";

export default async function (req, res) {
    if(req.method==="GET")
        {
          await cors(req, res)
          try
          {
            
            const {piduser} = req.query;
            let getAlbumVideobyUser = await DataAlbumVideo.getAlbumVideobyUser
            (piduser);
          
            return res.status(200).send(getAlbumVideobyUser);
              
           }
        catch (error) {
                  return res.status(500).send(error.message);
            }
      }

    }