# APIREST NextJS SocialNetwork

## Content

1. [User](#User)
2. [UserRelation](#UserRelation)
3. [AlbumImage](#AlbumImage)
4. [AlbumVideo](#AlbumVideo)
5. [Video](#Video)
6. [Images](#Images)
7. [Post](#Post)
8. [PostVideoImage](#PostVideoImage)
9. [Likes](#Likes)
10. [Message](#Message)
11. [Comment](#Comment)
12. [SubComment](#SubComment)

## Usage

### USER

#### GET

https://apin-ext-socialnetworkk.vercel.app/api/user/user?pid=2

#### POST

https://apin-ext-socialnetworkk.vercel.app/api/user/user

Body-raw-JSON

{
    "name":"name",
    "nick":"nick",
    "userrname":"userrname",
    "password":"password",
    "country":"country",
    "email":"email@gmail.com",
    "datebirth":"1900-08-08"
}

#### PUT

https://apin-ext-socialnetworkk.vercel.app/api/user/user

Body-raw-JSON

{
    "iduser":2,
     "name":"name",
    "nick":"nick",
    "country":"country",
    "email":"emailupdate@gmail.com",
    "datebirth":"1901-08-08",
    "address":"address",
    "ocupattion":"ocupattion",
    "website":"website",
     "gender":"gender",
    "city":"city",
    "province":"province",
    "urlfacebook":"urlfacebook",
     "urlinstagram":"urlinstagram",
    "urllinkedin":"urllinkedin",
     "urltwitter":"urltwitter",
    "martialstatus":"martialstatus",
    "description":"description"

}

#### DELETE

https://apin-ext-socialnetworkk.vercel.app/api/user/user

Body-raw-JSON
{
    "iduser":3
}
#### Update Visibility User (PUT)

https://apin-ext-socialnetworkk.vercel.app/api/user/updateVisibilityUser

Body-raw-JSON
{
     "visibility":"Friend",
      "username":"UserName20"

}
#### Update State User (PUT)

https://apin-ext-socialnetworkk.vercel.app/api/user/updatestateuser

Body-raw-JSON
{
     "visibility":"Friend",
      "username":"UserName20"

}

#### Update State User (PUT)

https://apin-ext-socialnetworkk.vercel.app/api/user/updatestateuser

Body-raw-JSON
{
     "visibility":"Friend",
      "username":"UserName20"

}

#### Update UserName Password User (PUT)

https://apin-ext-socialnetworkk.vercel.app/api/user/updateuserpassword

Body-raw-JSON
{
       "iduser":1,
      "username":"UserNameUpdate2",
      "password":"password1"
}

#### Login User (POST)

https://apin-ext-socialnetworkk.vercel.app/api/user/loginuser

Body-raw-JSON
{
      "username":"UserNameUpdate2",
      "password":"password1"
}

#### Get Login User (GET)

https://apin-ext-socialnetworkk.vercel.app/api/user/loginuser



#### Logout User (POST)

https://apin-ext-socialnetworkk.vercel.app/api/user/logout

#### Insert Profile Picture (PUT)

https://apin-ext-socialnetworkk.vercel.app/api/user/insertprofilepicture

Body-raw-JSON
{
      "imgurl":"imgurl",
      "username":"UserNameUpdate2"
}

#### Insert Cover Picture (PUT)

https://apin-ext-socialnetworkk.vercel.app/api/user/insertcoverpicture

Body-raw-JSON
{
      "imgcoverurl":"imgurlcover",
      "username":"UserNameUpdate2"
}

#### Delete Profile Picture (PUT)

https://apin-ext-socialnetworkk.vercel.app/api/user/deleteprofilepicture

Body-raw-JSON
{
    
      "username":"UserNameUpdate2"
}
#### Delete Cover Picture (PUT)

https://apin-ext-socialnetworkk.vercel.app/api/user/deletecoverpicture

Body-raw-JSON
{
      "username":"UserNameUpdate2"
}

#### Get Users By DateEntry (GET)

https://apin-ext-socialnetworkk.vercel.app/api/user/getusersbydateentry?pdate1=2021-08-08&pdate2=2022-10-09

#### Get Users (GET)

https://apin-ext-socialnetworkk.vercel.app/api/user/getusers

#### Get User By UserName (GET)

https://apin-ext-socialnetworkk.vercel.app/api/user/getuserbyusername?pusername=UserName20

#### Get User By Email (GET)

https://apin-ext-socialnetworkk.vercel.app/api/user/getuserbyemail?pemail=email@gmail.com


#### Get Search User (GET)

https://apin-ext-socialnetworkk.vercel.app/api/user/getsearchuser?pname=User&pnick=UserNick&pusername=UserName&pemail=email&pwebsite&pocupation&pcity&pcountry=USA

#### Get Likes Video Users (GET)

https://apin-ext-socialnetworkk.vercel.app/api/user/getLikesVideoUsers?idvideo=1

#### Get Likes Post Users (GET)

https://apin-ext-socialnetworkk.vercel.app/api/user/getLikesPostUsers?idpost=1

#### Get Likes Image Users (GET)

https://apin-ext-socialnetworkk.vercel.app/api/user/getLikesImageUsers?idimage=1

#### Get Likes Comment Users (GET)

https://apin-ext-socialnetworkk.vercel.app/api/user/getLikesCommentUsers?idcomment=4

#### Get Likes SubComment Users (GET)

https://apin-ext-socialnetworkk.vercel.app/api/user/getLikesSubCommentUsers?idsubcomment=2

### USERRELATION

#### Add User Relation (POST)

https://apin-ext-socialnetworkk.vercel.app/api/userrelation/adduserrelation

Body-raw-JSON

{
    "iduser":2,
    "idfriend":25
   
}

#### Block User Relation (PUT)

https://apin-ext-socialnetworkk.vercel.app/api/userrelation/blockuserrelation

Body-raw-JSON

{
    "iduser":2,
    "idfriend":25
   
}

#### Confirm User Relation (PUT)

https://apin-ext-socialnetworkk.vercel.app/api/userrelation/confirmfriend

Body-raw-JSON

{
    "iduser":2,
    "idfriend":25
   
}

#### Delete User Relation (DELETE)

https://apin-ext-socialnetworkk.vercel.app/api/userrelation/deleteuserrelation

Body-raw-JSON

{
    "iduser":2,
    "idfriend":25
   
}

#### Get All Friends By User (GET)

https://apin-ext-socialnetworkk.vercel.app/api/userrelation/getallfriendsbyuser?piduser=2

#### Get Confirmed Friends By User (GET)

https://apin-ext-socialnetworkk.vercel.app/api/userrelation/getconfirmedfriendbyuser?piduser=2

#### Get Friends of Friends Not Friends By User (GET)

https://apin-ext-socialnetworkk.vercel.app/api/userrelation/getFriendsOfFriendsNotFriendUser?piduser=2

#### Get Friends of Friends By User (GET)

https://apin-ext-socialnetworkk.vercel.app/api/userrelation/getFriendsOfFriendsUser?piduser=2

#### Get Mutual Friends By User (GET)

https://apin-ext-socialnetworkk.vercel.app/api/userrelation/getMutualFriendsByUsers?piduserlogin=1&piduser2=8

#### Get Search Name Friends By User (GET)

https://apin-ext-socialnetworkk.vercel.app/api/userrelation/getSearchNameFriendsbyUser?piduser=1&pname=User25

#### Get Search Nick Friends By User (GET)

https://apin-ext-socialnetworkk.vercel.app/api/userrelation/getsearchnickfriendsbyuser?piduser=1&pnick

#### Get Sent Pending Users By User (GET)

https://apin-ext-socialnetworkk.vercel.app/api/userrelation/getsentpendingusersbyuser?piduser=1

#### Get User Relation (GET)

https://apin-ext-socialnetworkk.vercel.app/api/userrelation/getuserrelation?piduser=1&pidfriend=2

### ALBUMIMAGE

#### GET

https://apin-ext-socialnetworkk.vercel.app/api/albumimage/albumimage?pidalbum=2

#### POST

https://apin-ext-socialnetworkk.vercel.app/api/albumimage/albumimage

Body-raw-JSON

{
   "iduser":8,
   "title":"AlbumImagesTitle"
}

#### PUT

https://apin-ext-socialnetworkk.vercel.app/api/albumimage/albumimage

Body-raw-JSON

{
   "idalbum":2,
   "title":"AlbumImagesTitleUpdated"
}

#### DELETE

https://apin-ext-socialnetworkk.vercel.app/api/albumimage/albumimage


Body-raw-JSON

{  
  "idalbum":2

}



### CATEGORY

#### GET

 https://api-next-ecommercee.vercel.app/api/category/category?pname=Almacenamiento

#### POST

 https://api-next-ecommercee.vercel.app/api/category/category

Body-raw-JSON

{

    "name":"name",

    "description":"description"

}

#### PUT

 https://api-next-ecommercee.vercel.app/api/category/category

Body-raw-JSON

{

    "name":"name",

    "description":"description"

}


#### DELETE

 https://api-next-ecommercee.vercel.app/api/category/category

Body-raw-JSON

{

    "name":"name",

    "description":""

}

#### Get Categories (GET)

https://api-next-ecommercee.vercel.app/api/category/getcategories

#### Get Categories by Name (GET)

https://api-next-ecommercee.vercel.app/api/category/getcategoriesbyname?pname=C
### ARTICLE  


#### GET

https://api-next-ecommercee.vercel.app/api/article/article?pbarcode=12345678909898

#### POST

https://api-next-ecommercee.vercel.app/api/article/article

Body-raw-JSON

{

    "categoryname":"categorynameexist",

    "barcode":"1568789",

    "name":"name",

    "price":80,

    "stock":20,

    "description":"description",

    "img":"imgurl"

}

#### PUT

https://api-next-ecommercee.vercel.app/api/article/article

Body-raw-JSON

{

    "categoryname":"categorynameexist",

    "barcode":"1568789",

    "name":"name",

    "price":80,

    "stock":20,

    "description":"description",

    "img":"imgurl"

}

#### DELETE

 https://api-next-ecommercee.vercel.app/api/article/article

Body-raw-JSON

{  

    "barcode":"1568789"

}
 #### Filter Articles by Category (POST)

https://api-next-ecommercee.vercel.app/api/article/filterarticlesbycategory

Body-raw-JSON

{  

 "categoryname":"Monitor"

}

 #### Get Articles (GET)

https://api-next-ecommercee.vercel.app/api/article/getarticles

 #### Get Articles by Name (GET)

https://api-next-ecommercee.vercel.app/api/article/getarticlesbyname?pname=Router


 #### Order Articles by Category (GET)

https://api-next-ecommercee.vercel.app/api/article/orderarticlesbycategory

 #### Order Articles by Price (GET)

https://api-next-ecommercee.vercel.app/api/article/orderarticlesbyprice

 #### Register Stock (POST)

https://api-next-ecommercee.vercel.app/api/article/registerstock

Body-raw-JSON

{  

 "barcode":"1235468",
 "stock":20

}
### USER  

#### Get Login User (GET)

https://api-next-ecommercee.vercel.app/api/user/getloginuser

#### Logout (POST)

https://api-next-ecommercee.vercel.app/api/user/logout

#### GET

https://api-next-ecommercee.vercel.app/api/user/user?pidcard=72289541

#### POST

https://api-next-ecommercee.vercel.app/api/user/user?pusername=Admin3&ppassword=Admin3
### ORDER  

#### Start Order (POST)

https://api-next-ecommercee.vercel.app/api/order/post/startorder

#### Register Item Order (POST)

https://api-next-ecommercee.vercel.app/api/order/post/registeritemorder

Body-raw-JSON

{

    "barcode":"152345688789546",
    "quantity":1

}
#### Close Order (POST)

https://api-next-ecommercee.vercel.app/api/order/post/closeorder

#### Save Order (POST)

https://api-next-ecommercee.vercel.app/api/order/post/saveorder?pidcard=72289541

#### Deliver Order (POST)

https://api-next-ecommercee.vercel.app/api/order/post/deliverorder?pid=54654654

#### Remove Item Order (POST)

https://api-next-ecommercee.vercel.app/api/order/post/removeitemonorder

Body-raw-JSON

{

    "barcode":"152345688789546"
   

}

#### Cancel Order (POST)

https://api-next-ecommercee.vercel.app/api/order/post/cancelorder

#### Get Client Orders (POST)

https://api-next-ecommercee.vercel.app/api/order/get/getclientorders?pidcard=72289541

#### Get Client Orders (GET)

https://api-next-ecommercee.vercel.app/api/order/get/getdeliveredorders

#### Get Order (GET)

https://api-next-ecommercee.vercel.app/api/order/get/getorder?pid=6791169809

#### Get Pending Orders (GET)

https://api-next-ecommercee.vercel.app/api/order/get/getpendingorders

#### Get Orders by Date (POST)

https://api-next-ecommercee.vercel.app/api/order/get/getordersbydate

Body-raw-JSON
{

    "datei": "2021-06-12",
    "datef": "2022-08-22"

}
