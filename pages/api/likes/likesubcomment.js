import cors from "../cors";
import { DataLikeSubComment } from "socialnetworkk/data/DataLikeSubComment";



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
            const {iduser,idsubcomment} = req.body;
            let likeansubcomment = await DataLikeSubComment.likeansubcomment
            (iduser,idsubcomment);
            if (likeansubcomment===-1) {
                throw new Error("The sub comment does not exists");
            }
            if (likeansubcomment===-2) {
                throw new Error("The user does not exists");
            }
            if (likeansubcomment===-3) {
                throw new Error("The user already liked that subcomment");
            }
        return res.status(200).send("The like sub comment was added successfully");   
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
      const {iduser,idsubcomment} = req.body;
      let deletelikeansubcomment = await DataLikeSubComment.deletelikeansubcomment
      (iduser,idsubcomment);
      if (deletelikeansubcomment===-1) {
          throw new Error("The subcomment does not exists");
      }
      if (deletelikeansubcomment===-2) {
          throw new Error("The user does not exists");
      }
      if (deletelikeansubcomment===-3) {
          throw new Error("The likesubcomment does not exists ");
      }
        return res.status(200).send("The likesubcomment was deleted  successfully");
        
        }
        catch (error) {
            return res.status(500).send( error.message);
       }
   }

  }