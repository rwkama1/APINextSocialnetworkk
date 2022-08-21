import { DataPost } from "socialnetworkk/data/DataPost";
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
        const {idpost,visibility} = req.body;
            
       
        let updateVisibilityPost = await DataPost.updateVisibilityPost(idpost,visibility);
        if (updateVisibilityPost===-1) {
            throw new Error("The Post does not exists");
        }
 
          return res.status(200).send("The visibility was updated successfully");   
      }
      catch (error) {
        return res.status(500).send(error.message);    
        
      }
    }
  
  }