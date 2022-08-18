import cors from "../cors";
import { DataPhoto } from "socialnetworkk/data/DataPhoto";
import { DTOPhoto } from "socialnetworkk/entity/DTOPhoto";


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
            const {iduser,idalbum,title,description,urlimage} = req.body;
            let dtophoto = new DTOPhoto();
            dtophoto.user.iduser = iduser;
            dtophoto.albumphoto.idalbumphoto = idalbum;
            dtophoto.title = title;
            dtophoto.description =description;
            dtophoto.DateTimePublish = new Date();
            dtophoto.urlimage =urlimage ;
            let addImage = await DataPhoto.addImages(dtophoto);
            if (addImage===-1) {
                throw new Error("The user does not exists");
                }
            if (addImage===-2) {
                throw new Error("The album of images does not exists");
            }

        return res.status(200).send("The image was added successfully");   
    }
    catch (error) {
      return res.status(500).send("Could not add user: "+error.message);    
      
    }
  }
  if(req.method==="DELETE")
  {
    await cors(req, res)
    try
    {
        const data = req.body;
        let deletePhoto = await DataPhoto.deletePhoto(data.idimage);
        if (deletePhoto===-1) {
            throw new Error("The image does not exists");
            }
          
        return res.status(200).send("The image was deleted successfully");
        
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
          let id=Number(pid);
            let getImage = await DataPhoto.getImage(id);
            if (getImage===-1) {
                throw new Error("The image does not exists");
              }
            getImage.DiffDatePublishDateNow();
            getImage.showDiffDatePublishDateNow();

            return res.status(200).send(getImage);
            
         }
        catch (error) {
                return res.status(500).send(error.message);
          }
    }
}