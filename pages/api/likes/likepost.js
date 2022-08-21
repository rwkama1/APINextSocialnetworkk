import cors from "../cors";
import { DataLikePost } from "socialnetworkk/data/DataLikePost";



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
            const {iduser,idpost} = req.body;
            let likeanpost = await DataLikePost.likeanpost(iduser,idpost);
           if (likeanpost===-1) {
               throw new Error("The post does not exists");
           }
           if (likeanpost===-2) {
               throw new Error("The user does not exists");
           }
           if (likeanpost===-3) {
               throw new Error("The user already liked that post");
           }
          
         
        return res.status(200).send("The likepost was added successfully");   
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
      const {iduser,idpost} = req.body;
      let deletelikeanpost = await DataLikePost.deletelikeanpost(iduser,idpost);
      if (deletelikeanpost===-1) {
          throw new Error("The post does not exists");
      }
      if (deletelikeanpost===-2) {
          throw new Error("The user does not exists");
      }
      if (deletelikeanpost===-3) {
          throw new Error("The likepost does not exists ");
      }
  
          
        return res.status(200).send("The likepost was deleted  successfully");
        
        }
        catch (error) {
            return res.status(500).send( error.message);
       }
   }
 
}