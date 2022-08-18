import { DataAlbumImages } from "socialnetworkk/data/DataAlbumImage";
import cors from "../cors";



export default async function (req, res) 
{
    if(req.method==="GET")
    {
      await cors(req, res)
      try
      {
        const {piduser,ptitle} = req.query;
        let getAlbumImageByTitleUser = await DataAlbumImages.getAlbumImageByTitleUser(
            ptitle,piduser);

          return res.status(200).send(getAlbumImageByTitleUser);
          
      }
      catch (error) {
              return res.status(500).send(error.message);
         }
  }
}