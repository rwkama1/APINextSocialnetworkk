import cors from "../cors";
import { DataLikeImage } from "socialnetworkk/data/DataLikeImage";



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
            const {iduser,idimage} = req.body;
            let likeanimage = await DataLikeImage.likeanimage(iduser,idimage);
            if (likeanimage===-1) {
                throw new Error("The image does not exists");
            }
            if (likeanimage===-2) {
                throw new Error("The user does not exists");
            }
            if (likeanimage===-3) {
                throw new Error("The user already liked that image ");
            }
         
        return res.status(200).send("The likeimage was added successfully");   
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
      const {iduser,idimage} = req.body;
      let deletelikeanimage = await DataLikeImage.deletelikeanimage
      (iduser,idimage);
            if (deletelikeanimage===-1) {
                throw new Error("The image does not exists");
            }
            if (deletelikeanimage===-2) {
                throw new Error("The user does not exists");
            }
            if (deletelikeanimage===-3) {
                throw new Error("The likeimage does not exists ");
            }
          
        return res.status(200).send("The likeimage was deleted  successfully");
        
        }
        catch (error) {
            return res.status(500).send( error.message);
       }
   }

  }