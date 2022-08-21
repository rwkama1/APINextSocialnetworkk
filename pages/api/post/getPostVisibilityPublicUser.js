import { DataPost } from "socialnetworkk/data/DataPost";
import cors from "../cors";

export default async function (req, res) {
    if(req.method==="GET")
        {
          await cors(req, res)
          try
          {
            const {pid} = req.query;
            let arraydiffdate=[];
            let array=await DataPost.getPostVisibilityPublicUser(pid);
            for (const post of array) {
              post.DiffDatePublishDateNow()
              post.showDiffDatePublishDateNow()
              arraydiffdate.push(post);
            }
            return res.status(200).send(arraydiffdate);
              
           }
        catch (error) {
                  return res.status(500).send(error.message);
            }
      }

    }