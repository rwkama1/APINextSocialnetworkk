import cors from "../cors";
import { DataSubComment } from "socialnetworkk/data/DataSubComment";



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
            const {iduser,idcomment,text} = req.body;
            let addSubComment = await DataSubComment.
            addSubComment(iduser,idcomment,text);
            if (addSubComment===-1) {
                throw new Error("The comment does not exists");
            }
            if (addSubComment===-2) {
                throw new Error("The user does not exists");
            }
         
        return res.status(200).send("The sub comment was added successfully");   
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
            const {idsubcomment,idcomment,iduser,text} = req.body;
            let updateSubCommentText = await DataSubComment.
            updateSubCommentText(idsubcomment,idcomment,
                iduser,text);
            if (updateSubCommentText===-1) {
                throw new Error("The comment does not exists");
            }
            if (updateSubCommentText===-2) {
                throw new Error("The user does not exists");
            }
            if (updateSubCommentText===-3) {
             throw new Error("The sub comment does not exists");
             }
        return res.status(200).send("The sub comment was updated successfully");   
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
      let deleteSubComment = await DataSubComment.deleteSubComment
      (iduser,idsubcomment);
      if (deleteSubComment===-1) {
       throw new Error("The user does not exists");
      }
      if (deleteSubComment===-2) {
       throw new Error("The sub comment does not exists");
      }
        return res.status(200).send("The sub comment was deleted successfully");
        
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