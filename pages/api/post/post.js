import cors from "../cors";
import { DataPost } from "socialnetworkk/data/DataPost";
import { DTOPost } from "socialnetworkk/entity/DTOPost";


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
            const {iduser,title,description} = req.body;
            let dtopost = new DTOPost();
            dtopost.user.iduser = iduser;
            dtopost.title =title;
            dtopost.description = description;
            let addPost = await DataPost.addPost(dtopost);
            if (addPost===-1) {
                throw new Error("The user does not exists");
            }
        return res.status(200).send("The post was added successfully");   
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
      const {idpost} = req.body;
      let deletePost = await DataPost.deletePost(idpost);
      if (deletePost===-1) {
           throw new Error("The post does not exists");
       }
          
        return res.status(200).send("The post was deleted successfully");
        
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
          const {pid} = req.query;
          let getPost=await DataPost.getPost(pid);
         if (getPost===-1) {
             throw new Error("The Post does not exists");
         }
         getPost.DiffDatePublishDateNow();
         getPost.showDiffDatePublishDateNow();
           return res.status(200).send(getPost);
            
         }
        catch (error) {
                return res.status(500).send(error.message);
          }
    }
}