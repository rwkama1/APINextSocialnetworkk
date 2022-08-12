import cors from "../cors";
import { DataUser } from "socialnetworkk/data/DataUser";
import { DTOUser } from "socialnetworkk/entity/DTOUser";
import { HashPassword } from "socialnetworkk/security/hashPassword";

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
        const data = req.body;
        let dtouser = new DTOUser();
        dtouser.name = data.name ;
        dtouser.nick = data.nick ;
        dtouser.userrname = data.userrname ;
        dtouser.password = data.password ;
        dtouser.country=data.country ;
        dtouser.datebirth = new Date(data.datebirth);

        dtouser.email = data.email;

        const passh = HashPassword.hashPassword(dtouser.password);
        dtouser.password = passh.hash;
        dtouser.hash = passh.salt;
        let registeruser = await DataUser.registerUser(dtouser);
        if (registeruser===-1) {
            throw new Error("The username already exists");
        }
        return res.status(200).send("The user registered successfully");   
    }
    catch (error) {
      return res.status(500).send("Could not add user: "+error.message);    
      
    }
  }
  if(req.method==="PUT")
  {
    await cors(req, res)
    try
    {
        const data = req.body;
        let dtouserupdate = new DTOUser();
        dtouserupdate.iduser = data.iduser ;
        dtouserupdate.name = data.name ;
        dtouserupdate.nick = data.nick ;
        dtouserupdate.datebirth = new Date(data.datebirth) ;
        dtouserupdate.email = data.email ;
        dtouserupdate.address = data.address ;
        dtouserupdate.ocupattion = data.ocupattion ;
        dtouserupdate.website = data.website ;
        dtouserupdate.gender = data.gender ;
        dtouserupdate.city = data.city ;
        dtouserupdate.province = data.province ;
        dtouserupdate.urlfacebook = data.urlfacebook ;
        dtouserupdate.urlinstagram =data.urlinstagram ;
        dtouserupdate.urllinkedin = data.urllinkedin ;
        dtouserupdate.urltwitter =data.urltwitter ;
        dtouserupdate.martialstatus =data.martialstatus ;
        dtouserupdate.description = data.description ;
        dtouserupdate.country = data.country ;
        let updateUser = await DataUser.updateUser(dtouserupdate);
        if (updateUser===-1) {
          throw new Error("The user does not exists");
        }
        return res.status(200).send("The user updated successfully");   
    }
    catch (error) {
      return res.status(500).send("Could not update user: "+error.message);    
      
    }
  }
  if(req.method==="DELETE")
  {
    await cors(req, res)
    try
    {
        const data = req.body;
        let deleteuser = await DataUser.deleteUser(data.iduser);
        if (deleteuser === -1) {
            throw new Error("The user does not exists");
        }
        return res.status(200).send("The user was successfully unsubscribed");
        
        }
        catch (error) {
            return res.status(500).send("Could not DELETE user: " + error.message);
        }
      }
      
  
}