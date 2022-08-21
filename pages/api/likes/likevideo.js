import cors from "../cors";
import { DataLikeVideo } from "socialnetworkk/data/DataLikeVideo";



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
            const {iduser,idvideo} = req.body;
         
            let likeanvideos = await DataLikeVideo.likeanvideo
            (iduser,idvideo);
            if (likeanvideos===-1) {
                throw new Error("The video does not exists");
            }
            if (likeanvideos===-2) {
                throw new Error("The user does not exists");
            }
            if (likeanvideos===-3) {
                throw new Error("The user already liked that video");
            }
       
         
        return res.status(200).send("The likevideo was added successfully");   
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
      const {iduser,idvideo} = req.body;
      let deletelikeanvideo = await DataLikeVideo.deletelikeanvideo
      (iduser,idvideo);
      if (deletelikeanvideo===-1) {
          throw new Error("The video does not exists");
      }
      if (deletelikeanvideo===-2) {
          throw new Error("The user does not exists");
      }
      if (deletelikeanvideo===-3) {
          throw new Error("The likevideo does not exists ");
      }
         
        return res.status(200).send("The likevideo was deleted  successfully");
        
        }
        catch (error) {
            return res.status(500).send( error.message);
       }
   }

  }