import cors from "../cors";
import { DataVideo } from "socialnetworkk/data/DataVideo";



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
  if(req.method==="PUT")
  {
    await cors(req, res)
    try
    {
        const {idvideo,description,title} = req.body;
        let updateTitleDescriptionVideo = await DataVideo.
        updateTitleDescriptionVideo(idvideo,description,title);
        if (updateTitleDescriptionVideo===-1) {
         throw new Error("The video does not exists");
         }
            
        return res.status(200).send("The video was updated successfully");   
    }
    catch (error) {
      return res.status(500).send(error.message);    
      
    }
  }
  
 
}