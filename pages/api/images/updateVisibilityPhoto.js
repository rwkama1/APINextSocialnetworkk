import { DataPhoto } from "socialnetworkk/data/DataPhoto";
import cors from "../cors";

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
        const {idimage,visibility} = req.body;
            
        let updateVisibilityPhoto = await DataPhoto.updateVisibilityPhoto
        (idimage,visibility);
        if (updateVisibilityPhoto===-1) {
            throw new Error("The image does not exists");
            }
          return res.status(200).send("The visibility was updated successfully");   
      }
      catch (error) {
        return res.status(500).send(error.message);    
        
      }
    }
  
  }