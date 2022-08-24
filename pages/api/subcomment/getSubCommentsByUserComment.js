import { DataSubComment } from "socialnetworkk/data/DataSubComment";
import cors from "../cors";

export default async function (req, res) {
    if(req.method==="GET")
        {
          await cors(req, res)
          try
          {
            const {idcomment,iduser} = req.query;
            let arraydiff=[];
            let array=await DataSubComment.getSubCommentsByUserComment
            (idcomment,iduser);
            for (const subcomment of array) {
               
                    subcomment.DiffDatePublishDateNowComment()
                    subcomment.showDiffDatePublishDateNowComment()
                    
                    subcomment.DiffDatePublishDateNowSubComment()
                    subcomment.showDiffDatePublishDateNowSubComment()
            
                
                    arraydiff.push(subcomment);
               
            }     
            return res.status(200).send(arraydiff);
              
           }
             catch (error) {
                  return res.status(500).send(error.message);
            }
         }

    }