import { DataSubComment } from "socialnetworkk/data/DataSubComment";
import cors from "../cors";

export default async function (req, res) {
    if(req.method==="GET")
        {
          await cors(req, res)
          try
          {
            const {idpost} = req.query;
            let arraydiff=[];
            let array=await DataSubComment.getIfExistsSubComentsOfCommentsPost
            (idpost);
            for (const subcommentpost of array) {
                if (subcommentpost.withsubcomments===1) {     
                    subcommentpost.DiffDatePublishDateNowComment()
                    subcommentpost.showDiffDatePublishDateNowComment()
                    
                    subcommentpost.DiffDatePublishDateNowSubComment()
                    subcommentpost.showDiffDatePublishDateNowSubComment()
            
                } else 
                {
                    subcommentpost.DiffDatePublishDateNowComment()
                    subcommentpost.showDiffDatePublishDateNowComment()
                   
                }
                arraydiff.push(subcommentpost) 
            }
            return res.status(200).send(arraydiff);
              
           }
             catch (error) {
                  return res.status(500).send(error.message);
            }
         }

    }