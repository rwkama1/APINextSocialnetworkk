import { DataSubComment } from "socialnetworkk/data/DataSubComment";
import cors from "../cors";

export default async function (req, res) {
    if(req.method==="GET")
        {
          await cors(req, res)
          try
          {
            const {idvideo} = req.query;
            let arraydiff=[];
            let array=await DataSubComment.getIfExistsSubComentsOfCommentsVideo
            (idvideo);
            for (const subcommentv of array) {
                if (subcommentv.withsubcomments===1) {     
                    subcommentv.DiffDatePublishDateNowComment()
                    subcommentv.showDiffDatePublishDateNowComment()
                    
                    subcommentv.DiffDatePublishDateNowSubComment()
                    subcommentv.showDiffDatePublishDateNowSubComment()
            
                } else 
                {
                    subcommentv.DiffDatePublishDateNowComment()
                    subcommentv.showDiffDatePublishDateNowComment()
                   
                }
                arraydiff.push(subcommentv) 
            }
            return res.status(200).send(arraydiff);
              
           }
             catch (error) {
                  return res.status(500).send(error.message);
            }
         }

    }