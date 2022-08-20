import { DataVideo } from "socialnetworkk/data/DataVideo";
import cors from "../cors";

export default async function (req, res) {
    if(req.method==="GET")
        {
          await cors(req, res)
          try
          {
            let arraydiffdate=[];
            const {pidalbum,iduser} = req.query;
        
            let array=await DataVideo.getVideosbyAlbumAndUser(pidalbum,iduser)
            for (const vid of array) {
                vid.DiffDatePublishDateNow()
                vid.showDiffDatePublishDateNow()
                arraydiffdate.push(vid);
            }
            return res.status(200).send(arraydiffdate);
              
           }
        catch (error) {
                  return res.status(500).send(error.message);
            }
      }

    }