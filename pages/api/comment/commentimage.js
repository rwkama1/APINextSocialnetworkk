import cors from "../cors";
import { DataCommentImage } from "socialnetworkk/data/DataCommentImage";



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
            const {iduser,idimage,text} = req.body;
            let commentimage = await DataCommentImage.CommentImage(
                iduser,idimage,text);
           if (commentimage===-1) {
               throw new Error("The image does not exists");
           }
           if (commentimage===-2) {
               throw new Error("The user does not exists");
           }
      
         
        return res.status(200).send("The comment image was added successfully");   
    }
    catch (error) {
      return res.status(500).send(error.message);    
      
    }
  }
  if(req.method==="PUT")
  {
    await cors(req, res)
    try
    {
            const {iduser,idcomment,idimage,text} = req.body;
              let UpdateTextCommentImage = await DataCommentImage.
              UpdateTextCommentImage(iduser,idcomment
                ,idimage,text);
              if (UpdateTextCommentImage===-1) {
                  throw new Error("The comment images does not exists");
              }
              if (UpdateTextCommentImage===-2) {
               throw new Error("The image does not exists");
           }
              if (UpdateTextCommentImage===-3) {
                  throw new Error("The user does not exists");
              }
              if (UpdateTextCommentImage===-4) {
               throw new Error("The comment does not exists");
           }
              
         
        return res.status(200).send("The comment image was updated successfully");   
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
      const {iduser,idcomment,idimage} = req.body;
      let deleteCommentImage = await DataCommentImage.deleteCommentImage
      (iduser,idcomment,idimage);
        if (deleteCommentImage===-1) {
            throw new Error("The comment images does not exists");
            }
            if (deleteCommentImage===-2) {
            throw new Error("The image does not exists");
            }
            if (deleteCommentImage===-3) {
                throw new Error("The user does not exists");
            }
        if (deleteCommentImage===-4) {
            throw new Error("The comment does not exists");
            }
        
        return res.status(200).send("The comment image was deleted successfully");
        
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
       let arraydiffdate=[];
       const {idimage} = req.query;
       let array=await DataCommentImage.getsCommentsImage(idimage);
        for (const commentimg of array) {
            commentimg.DiffDatePublishDateNow()
            commentimg.showDiffDatePublishDateNow()
            arraydiffdate.push(commentimg)
        }


         return res.status(200).send(arraydiffdate);
         
      }
     catch (error) {
             return res.status(500).send(error.message);
       }
 }

  }