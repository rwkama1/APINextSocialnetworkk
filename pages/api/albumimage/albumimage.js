import cors from "../cors";
import { DataAlbumImages } from "socialnetworkk/data/DataAlbumImage";
import { DTOAlbumPhoto } from "socialnetworkk/entity/DTOAlbumPhoto";

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
      let dtoalbumimage = new DTOAlbumPhoto();
      dtoalbumimage.user.iduser = data.iduser;
      dtoalbumimage.title = data.title;
        let addAlbumImage = await DataAlbumImages.addAlbumImage(dtoalbumimage);
        if (addAlbumImage===-1) {
           throw new Error("The user does not exists");
            }
        
        return res.status(200).send("The album of images was registered successfully");   
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
        let updateTitleAlbumImage = await DataAlbumImages.updateTitleAlbum(data.idalbum, 
          data.title);
        if (updateTitleAlbumImage===-1) {
           throw new Error("The album of images does not exists");
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
        let deleteAlbum = await DataAlbumImages.deleteAlbum(data.idalbum);
        if (deleteAlbum===-1) {
           throw new Error("The album of images does not exists");
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
          let getAlbumImage = await DataAlbumImages.getAlbumImage(pidalbum);
          if (getAlbumImage===-1) {
                throw new Error("The album of images does not exists");
            }

            return res.status(200).send(getAlbumImage);
            
            }
            catch (error) {
                return res.status(500).send(error.message);
            }
    }
}