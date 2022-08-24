import { DataSubComment } from "socialnetworkk/data/DataSubComment";
import cors from "../cors";

export default async function (req, res) {
    if(req.method==="GET")
        {
          await cors(req, res)
          try
          {
            const {idimage} = req.query;
            let arraydiff=[];
            let array=await DataSubComment.getIfExistsSubComentsOfCommentsImage
            (idimage);
            for (const subcommentimg of array) {
                if (subcommentimg.withsubcomments===1) {     
                    subcommentimg.DiffDatePublishDateNowComment()
                    subcommentimg.showDiffDatePublishDateNowComment()
                    
                    subcommentimg.DiffDatePublishDateNowSubComment()
                    subcommentimg.showDiffDatePublishDateNowSubComment()
            
                } else 
                {
                    subcommentimg.DiffDatePublishDateNowComment()
                    subcommentimg.showDiffDatePublishDateNowComment()
                   
                }
                arraydiff.push(subcommentimg) 
            }
            return res.status(200).send(arraydiff);
              
           }
             catch (error) {
                  return res.status(500).send(error.message);
            }
         }

    }