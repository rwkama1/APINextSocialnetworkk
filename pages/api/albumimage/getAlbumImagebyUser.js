import { DataAlbumImages } from "socialnetworkk/data/DataAlbumImage";
import cors from "../cors";



export default async function (req, res) 
{
    if(req.method==="GET")
    {
      await cors(req, res)
      try
      {
        const {piduser} = req.query;
        let getAlbumImagebyUser = await DataAlbumImages.getAlbumImagebyUser(
            piduser);

          return res.status(200).send(getAlbumImagebyUser);
          
      }
      catch (error) {
              return res.status(500).send(error.message);
         }
  }
}