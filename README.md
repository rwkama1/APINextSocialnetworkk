# APIREST NextJS SocialNetwork

## Content

1. [User](#USER)
2. [UserRelation](#USERRELATION)
3. [AlbumImage](#ALBUMIMAGE)
4. [AlbumVideo](#ALBUMVIDEO)
5. [Video](#VIDEO)
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

#### Get Album Image By Title User (GET)

https://apin-ext-socialnetworkk.vercel.app/api/albumimage/getAlbumImageByTitleUser?ptitle=AlbumImage1&piduser=1

#### Get Album Image By User (GET)

https://apin-ext-socialnetworkk.vercel.app/api/albumimage/getAlbumImagebyUser?piduser=1

#### Get Album Images (GET)

https://apin-ext-socialnetworkk.vercel.app/api/albumimage/getsAlbumImages


### ALBUMVIDEO


#### GET

https://apin-ext-socialnetworkk.vercel.app/api/albumvideo/albumvideo?pidalbum=2

#### POST

https://apin-ext-socialnetworkk.vercel.app/api/albumvideo/albumvideo

Body-raw-JSON

{
   "iduser":1,
   "title":"AlbumVideoTitle"
}

#### PUT

https://apin-ext-socialnetworkk.vercel.app/api/albumvideo/albumvideo

Body-raw-JSON

{
   "idalbumvideo":1,
   "title":"AlbumVideoTitleUpdated"
}

#### DELETE

https://apin-ext-socialnetworkk.vercel.app/api/albumvideo/albumvideo


Body-raw-JSON

{  
  "idalbumvideo":2

}

#### Get Album Video By Title User (GET)

https://apin-ext-socialnetworkk.vercel.app/api/albumvideo/getAlbumVideoByTitleUser?title=AlbumVideo&piduser=1

#### Get Album Video By User (GET)

https://apin-ext-socialnetworkk.vercel.app/api/albumvideo/getAlbumVideobyUser?piduser=1

#### Get Album Videos (GET)

https://apin-ext-socialnetworkk.vercel.app/api/albumvideo/getsAlbumVideos



### VIDEO





#### GET

https://apin-ext-socialnetworkk.vercel.app/api/video/video?pid=2

#### POST

https://apin-ext-socialnetworkk.vercel.app/api/video/video
Body-raw-JSON
{
  "iduser":1,
  "idalbum":2,
  "title":"VideoTitle",
  "description":"DescriptionVideo",
  "urlvideo":"urlvideo"
  
}


#### DELETE

https://apin-ext-socialnetworkk.vercel.app/api/video/video

Body-raw-JSON

{
  "idvideo":1
}

#### Update Title Description Video (PUT)

https://apin-ext-socialnetworkk.vercel.app/api/video/updateTitleDescriptionVideo

Body-raw-JSON
{
  "idvideo":2,
  "description":"Description",
  "title":"VideoTitle"
  
}

#### Update Visibility Video (PUT)

https://apin-ext-socialnetworkk.vercel.app/api/video/updateVisibilityVideo

Body-raw-JSON
{
  "idvideo":2,
  "visibility":"Friend"
  
}

#### Get Videos By Album (GET)

https://apin-ext-socialnetworkk.vercel.app/api/video/getVideosbyAlbum?pidalbum=2

#### Get Videos By Album and User (GET)

https://apin-ext-socialnetworkk.vercel.app/api/video/getVideosbyAlbumAndUser?pidalbum=3&iduser=8

#### Get Videos By Friend User (GET)

https://apin-ext-socialnetworkk.vercel.app/api/video/getVideosbyFriendUser?iduser=3

#### Get Videos (GET)

https://apin-ext-socialnetworkk.vercel.app/api/video/getVideos

#### Get Videos By Id User (GET)

https://apin-ext-socialnetworkk.vercel.app/api/video/getVideosbyIdUser?iduser=2

#### Get Videos By Like User (GET)

https://apin-ext-socialnetworkk.vercel.app/api/video/getVideosByLikeUser?iduserlogin=1

#### Get Videos Main Page (GET)

https://apin-ext-socialnetworkk.vercel.app/api/video/getVideosMainPage?iduserlogin=1&country=USA

#### Get Videos Visibility By User Relation (GET)

https://apin-ext-socialnetworkk.vercel.app/api/video/getVideosVisibilityByUserRelation?iduserlogin=1&iduser=2

#### Get Videos Visibility By Friend User (GET)

https://apin-ext-socialnetworkk.vercel.app/api/video/getVideosVisibilityFriendUser?iduser=2

#### Get Videos Visibility By Public User (GET)

https://apin-ext-socialnetworkk.vercel.app/api/video/getVideosVisibilityPublicUser?iduser=1




### IMAGES





#### GET

https://apin-ext-socialnetworkk.vercel.app/api/images/image?pid=2

#### POST

https://apin-ext-socialnetworkk.vercel.app/api/images/image
Body-raw-JSON
{
  "iduser":1,
  "idalbum":2,
  "title":"ImageTitle",
  "description":"DescriptionImage",
  "urlimage":"urlimage"
  
}


#### DELETE

https://apin-ext-socialnetworkk.vercel.app/api/images/image

Body-raw-JSON

{
  "idimage":1
}

#### Update Title Description Image (PUT)

https://apin-ext-socialnetworkk.vercel.app/api/images/updateTitleDescriptionPhoto

Body-raw-JSON
{
  "idimage":2,
  "description":"Description",
  "title":"ImageTitle"
  
}

#### Update Visibility Images (PUT)

https://apin-ext-socialnetworkk.vercel.app/api/images/updateVisibilityPhoto

Body-raw-JSON
{
  "idimage":2,
  "visibility":"Friend"
 
  
}


#### Get Images By Album (GET)

https://apin-ext-socialnetworkk.vercel.app/api/images/getImagesByAlbum?pidalbum=1

#### Get Images By Album and User (GET)

https://apin-ext-socialnetworkk.vercel.app/api/images/getImagesbyAlbumAndUser?pidalbum=1&piduser=1

#### Get Images By Friend User (GET)

https://apin-ext-socialnetworkk.vercel.app/api/images/getImagesbyFriendUser?piduser=3

#### Get Images (GET)

https://apin-ext-socialnetworkk.vercel.app/api/images/getImages

#### Get Images By Id User (GET)

https://apin-ext-socialnetworkk.vercel.app/api/images/getImagesbyIdUser?piduser=1

#### Get Images By Like User (GET)

https://apin-ext-socialnetworkk.vercel.app/api/images/getImagesByLikeUser?piduser=3

#### Get Images Main Page (GET)

https://apin-ext-socialnetworkk.vercel.app/api/images/getImagesMainPage?iduserlogin=1&country=USA

#### Get Videos Visibility By User Relation (GET)

https://apin-ext-socialnetworkk.vercel.app/api/video/getVideosVisibilityByUserRelation?iduserlogin=1&iduser=2

#### Get Videos Visibility By Friend User (GET)

https://apin-ext-socialnetworkk.vercel.app/api/video/getVideosVisibilityFriendUser?iduser=2

#### Get Videos Visibility By Public User (GET)

https://apin-ext-socialnetworkk.vercel.app/api/video/getVideosVisibilityPublicUser?iduser=1






