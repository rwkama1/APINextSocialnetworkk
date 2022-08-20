import cors from "../cors";
import { DataAlbumVideo } from "socialnetworkk/data/DataAlbumVideo";
import { DTOAlbumVideo } from "socialnetworkk/entity/DTOAlbumVideos";

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
      const data = req.body;
      let dtoalvideo = new DTOAlbumVideo();
      dtoalvideo.user.iduser = data.iduser;
      dtoalvideo.title = data.title;
      let addAlbumVideo = await DataAlbumVideo.addAlbumVideo(dtoalvideo);
      if (addAlbumVideo===-1) {
         throw new Error("The user does not exists");
          }

         return res.status(200).send("The album of videos was registered successfully");   
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
        const data = req.body;
        let updateTitleAlbum = await DataAlbumVideo.updateTitleAlbum
        (data.idalbumvideo, data.title);
        if (updateTitleAlbum===-1) {
           throw new Error("The album of videos does not exists");
            }
        return res.status(200).send("The title was updated successfully");   
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
        const data = req.body;
        let deleteAlbum = await DataAlbumVideo.deleteAlbum(data.idalbumvideo);
        if (deleteAlbum===-1) {
           throw new Error("The album of videos does not exists");
         }
       
        return res.status(200).send("The album was deleted successfully");
        
        }
        catch (error) {
            return res.status(500).send(error.message);
        }
      }
  if(req.method==="GET")
      {
        await cors(req, res)
        try
        {
          const {pidalbum} = req.query;
          let getAlbumVideos = await DataAlbumVideo.getAlbumVideos(pidalbum);
          if (getAlbumVideos===-1) {
                throw new Error("The album of videos does not exists");
            }
         
            return res.status(200).send(getAlbumVideos);
            
            }
            catch (error) {
                return res.status(500).send(error.message);
            }
    }
}