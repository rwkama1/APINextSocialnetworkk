import { DataPhotoPostVideo } from "socialnetworkk/data/DataPhotoPostVideo";
import cors from "../cors";

export default async function (req, res) {
    if(req.method==="GET")
        {
          await cors(req, res)
          try
          {
            let arraydiffdate=[];
            const {iduserlogin,country} = req.query;
        
            let array=await DataPhotoPostVideo.getPhotoPostVideoMainPage(iduserlogin
                ,country)
            const sortdatearray = array.sort((a, b) => b.datepublish - a.datepublish)
            //Order by Dates descending
            for (const post of sortdatearray) {
                post.DiffDatePublishDateNow()
                post.showDiffDatePublishDateNow()
                arraydiffdate.push(post)
            }
            return res.status(200).send(arraydiffdate);
              
           }
        catch (error) {
                  return res.status(500).send(error.message);
            }
      }

    }