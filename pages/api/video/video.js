import cors from "../cors";
import { DataVideo } from "socialnetworkk/data/DataVideo";
import { DTOVideo } from "socialnetworkk/entity/DTOVideo";


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
            const {iduser,idalbum,title,description,urlvideo} = req.body;
            let dtovid = new DTOVideo();
            dtovid.user.iduser = iduser;
            dtovid.albumvideo.idalbumvideo = idalbum;
            dtovid.title = title;
            dtovid.description =description;
            dtovid.DateTimePublish = new Date();
            dtovid.urlvideo = urlvideo;
            let addVideo = await DataVideo.addVideo(dtovid);
            if (addVideo===-1) {
                throw new Error("The user does not exists");
                }
            if (addVideo===-2) {
                throw new Error("The album of videos does not exists");
            }

        return res.status(200).send("The video was added successfully");   
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
        const data = req.body;
        let deleteVideo = await DataVideo.deleteVideo(data.idvideo);
        if (deleteVideo===-1) {
         throw new Error("The video does not exists");
         }
    
          
        return res.status(200).send("The video was deleted successfully");
        
        }
        catch (error) {
            return res.status(500).send( error.message);
       }
   }
  if(req.method==="GET")
      {
        await cors(req, res)
        try
        {
          const {pid} = req.query;
          let getVideo=await DataVideo.getVideo(pid);
          if (getVideo===-1) {
               throw new Error("The video does not exists");
           }
           getVideo.DiffDatePublishDateNow();
           getVideo.showDiffDatePublishDateNow();
          return res.status(200).send(getVideo);
            
         }
        catch (error) {
                return res.status(500).send(error.message);
          }
  }
}