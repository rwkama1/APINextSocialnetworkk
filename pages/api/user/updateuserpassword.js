import { DataUser } from "socialnetworkk/data/DataUser";
import { HashPassword } from "socialnetworkk/security/hashPassword";
import cors from "../cors";


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
  if(req.method==="PUT")
  {
    await cors(req, res)
    try
    {
            const data = req.body;
            const passh = HashPassword.hashPassword(data.password);
            let hashpassword = passh.hash;
            let salt = passh.salt;
       
            let updateusernamepassword = await DataUser.updateUserNamePassword
            (data.username, hashpassword, salt, data.iduser);
            if (updateusernamepassword===-1) {
                throw new Error("The user does not exists");
            }
            if (updateusernamepassword===-2) {
                throw new Error("The username already exists");
            }
            return res.status(200).send("The username and password updated successfully");
    }
    catch (error) {
      return res.status(500).send("Could not update username password user: "+error.message);    
      
    }
  }
 
  
}