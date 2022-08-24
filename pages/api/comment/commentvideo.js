import cors from "../cors";
import { DataCommentVideo } from "socialnetworkk/data/DataCommentVideo";



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
            const {iduser,idvideo,text} = req.body;
           
            let CommentVideo = await DataCommentVideo.CommentVideo
            (iduser,idvideo,text);
            if (CommentVideo===-1) {
                throw new Error("The video does not exists");
            }
            if (CommentVideo===-2) {
                throw new Error("The user does not exists");
            }
 
        return res.status(200).send("The comment video was added successfully");   
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
            const {iduser,idcomment,idvideo,text} = req.body;
            let UpdateTextCommentVideo = await DataCommentVideo.
            UpdateTextCommentVideo(iduser,idcomment,idvideo,
                text);
            if (UpdateTextCommentVideo===-1) {
                throw new Error("The comment video does not exists");
            }
            if (UpdateTextCommentVideo===-2) {
             throw new Error("The video does not exists");
         }
            if (UpdateTextCommentVideo===-3) {
                throw new Error("The user does not exists");
            }
            if (UpdateTextCommentVideo===-4) {
             throw new Error("The comment does not exists");
         }
        return res.status(200).send("The comment video was updated successfully");   
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
        const {iduser,idcomment,idvideo} = req.body;
        let deleteCommentVideo = await DataCommentVideo.deleteCommentVideo
        (iduser,idcomment,idvideo);
           if (deleteCommentVideo===-1) {
             throw new Error("The comment video does not exists");
                }
             if (deleteCommentVideo===-2) {
                throw new Error("The video does not exists");
             }
             if (deleteCommentVideo===-3) {
                 throw new Error("The user does not exists");
             }
            if (deleteCommentVideo===-4) {
              throw new Error("The comment does not exists");
               }
        return res.status(200).send("The comment video was deleted successfully");
        
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
       const {idvideo} = req.query;
       let array=await DataCommentVideo.getsCommentsVideo(idvideo);
       for (const commentvideo of array) {
           commentvideo.DiffDatePublishDateNow()
           commentvideo.showDiffDatePublishDateNow()
           arraydiffdate.push(commentvideo);
       }     
         return res.status(200).send(arraydiffdate);
         
      }
     catch (error) {
        return res.status(500).send(error.message);
       }
 }

  }