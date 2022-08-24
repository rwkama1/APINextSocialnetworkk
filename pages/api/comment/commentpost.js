import cors from "../cors";
import { DataCommentPost } from "socialnetworkk/data/DataCommentPost";



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
            const {iduser,idpost,text} = req.body;
            let CommentPost = await DataCommentPost.CommentPost
            (iduser,idpost,text);
            if (CommentPost===-1) {
                throw new Error("The post does not exists");
            }
            if (CommentPost===-2) {
                throw new Error("The user does not exists");
            }
         
      
         
        return res.status(200).send("The comment post was added successfully");   
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
            const {iduser,idcomment,idpost,text} = req.body;
            let UpdateTextCommentPost = await DataCommentPost.
            UpdateTextCommentPost(iduser,idcomment,idpost,text);
            if (UpdateTextCommentPost===-1) {
                throw new Error("The comment post does not exists");
            }
            if (UpdateTextCommentPost===-2) {
             throw new Error("The post does not exists");
         }
            if (UpdateTextCommentPost===-3) {
                throw new Error("The user does not exists");
            }
            if (UpdateTextCommentPost===-4) {
             throw new Error("The comment does not exists");
         }
        
        return res.status(200).send("The comment post was updated successfully");   
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
      const {iduser,idcomment,idpost} = req.body;
      let deleteCommentPost = await DataCommentPost.deleteCommentPost
      (iduser,idcomment,idpost);
      if (deleteCommentPost===-1) {
        throw new Error("The comment post does not exists");
           }
        if (deleteCommentPost===-2) {
           throw new Error("The post does not exists");
        }
        if (deleteCommentPost===-3) {
            throw new Error("The user does not exists");
        }
       if (deleteCommentPost===-4) {
         throw new Error("The comment does not exists");
          }
        return res.status(200).send("The comment post was deleted successfully");
        
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
       const {idpost} = req.query;
       let array=await DataCommentPost.getsCommentsPost(idpost);
        for (const commentpost of array) {
            commentpost.DiffDatePublishDateNow()
            commentpost.showDiffDatePublishDateNow()
            arraydiffdate.push(commentpost);
        }     
         return res.status(200).send(arraydiffdate);
         
      }
     catch (error) {
        return res.status(500).send(error.message);
       }
 }

  }