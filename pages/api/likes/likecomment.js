import cors from "../cors";
import { DataLikeComment } from "socialnetworkk/data/DataLikeComment";



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
            const {iduser,idcomment} = req.body;
            let likeancomment = await DataLikeComment.likeancomment
            (iduser,idcomment);
            if (likeancomment===-1) {
                throw new Error("The comment does not exists");
            }
            if (likeancomment===-2) {
                throw new Error("The user does not exists");
            }
            if (likeancomment===-3) {
                throw new Error("The user already liked that comment");
            }
         
        return res.status(200).send("The likeancomment was added successfully");   
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
      const {iduser,idcomment} = req.body;
      let deletelikeancomment = await DataLikeComment.deletelikeancomment
      (iduser,idcomment);
      if (deletelikeancomment===-1) {
          throw new Error("The comment does not exists");
      }
      if (deletelikeancomment===-2) {
          throw new Error("The user does not exists");
      }
      if (deletelikeancomment===-3) {
          throw new Error("The likecomment does not exists ");
      }
          
        return res.status(200).send("The likecomment was deleted  successfully");
        
        }
        catch (error) {
            return res.status(500).send( error.message);
       }
   }

  }