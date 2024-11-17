import styled from "styled-components";

export const NavWrapper = styled.nav`

background:linear-gradient(90deg, #4831d4 74%, #ccf381 26% );
padding-block:2rem;


.nav{
    display:flex;
    justify-content:space-between;
    align-items:center;
}

.nav h1{
    color:#ccf381;
    font-size:22px;
    animation:zoom 2s infinite;
}

.hamburger{
    display:none;
    padding:0px 15px;
}

.bars{
    height:3px;
    width:25px;
    background-color:#ccf381;
    margin:5px 0;
    display:block;
    transition: 0.2s ease-in-out;
}

@keyframes zoom{
    0%{
        transform:scale(1);
    }

    50%{
        transform:scale(1.2);
    }

    100%{
        transform:scale(1);
    }
}

.nav h1 span{
    font-size:18px;
    color:orange;
}

.nav h1:hover{
   color:orange;
   transition:0.3s ease-in-out;
}

.navRight{
    width:350px;
    display:flex;
    justify-content:space-between;
    align-items:center;

}


.navItems{
    display:flex;
    align-items:center;
    gap:2.5rem;
}

.navItems a{
    text-transform:capitalize;
    text-decoration:none;
    color:#fff;
    font-weight:600;
}

.navItems a:hover{
    color:#fff;
    transition:0.3s ease-in-out;
    border:2px solid orange;
    width:80px;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:orange;
    border-radius:30px;

}

.navItems a:active{
    opacity:.3;
}



@media screen and (max-width: 900px){
   
    .nav{
        height:10px;
        border: none;
        gap:3px;
        width:95%;
    }

    .nav h1{
        padding: 20px;
    }

    .hamburger{
        display:block;
    }

   .navRight .navItems{
    left: -100%;
    width: 100%;
    position:absolute;
    flex-direction:column;
    background-color: #ccf381 ;
    top: 4.6rem;
    transition: 0.3s ease-in-out;
    /* height: 100%; */
    border-radius: 20px;
    z-index:1;


   }

   .navItems a{
    font-size: 22px;
    text-align: start;
    position: relative;
    right: 0;
    color:#4831d4;
    margin:33px auto;
   }


   .rotate{
    
   }


    .navRight .navItems.open{
     left: 0;
   }

   .bars:nth-child(1){
     width: 30px;
   }

   .bars:nth-child(3){
    display:none;
   }

     .bars:nth-child(2){
        border: 1px solid;
        margin-top:10px;
        margin-left:8px;
        width:23px;
     }

   .bars.rotate:nth-child(2){
    opacity: 0;
    margin-top:0px;
   }
   .bars.rotate:nth-child(1){
    transform:translateY(8px)rotate(45deg);
    width:30px;
   }
   .bars.rotate:nth-child(3){
    transform:translateY(-8px)rotate(-45deg);
    display:block;
    width:30px;
   }

   background:#4831d4;
   height: 100%;
   width:100%;
}


`
export const BannerWrapper = styled.nav`

background:linear-gradient(90deg,#4831d4 74%, #ccf381 26% );
height:90vh;
padding-block:5rem;


.full.back{
    background-color:#000;
}

.full p{
    color:#ccf381;
    font-size:15px;
    text-transform:capitalize;
}


.full h3{
    font-size:12px;
    color:#ccf381;
}

.bannerContainer{
    display:flex;
    align-items:center;
    gap:15rem;
    margin-left:30px;
}



.bInfo h1{
    font-size:60px;
    color:#ccf381;
}

.bInfo h1 span{
    color:#ccf381;
}

.bInfo p{
    font-size:16px;
    width:430px;
    color:#fff;
}

.bannerImg img{
    height:300px;
    width:300px;
}

.span{
    display:flex;
    margin-left:30px;
    gap:30px;
}

.span p{
    font-size:12px;
    width:200px;
    color:#ccf381;
}

.toggle{
    height:30px;
    width: 60px;
    border-radius:50%/100%;
    display:flex;
    align-items:center;
    background-color:gray;
}

.toggle.change{
    background-color:green;
}

.slider{
    height:25px;
    width:25px;
    border-radius:50%;
    background-color:#fff
}

.slider.slide{
    transform:translateX(27px);
    background-color:#fff;
}

@media screen and (max-width: 900px){
    background:linear-gradient(180deg,#4831d4 60%, #ccf381 40% );
    height:100%;
    padding-block:2rem;
    

   .bannerContainer{
    flex-direction: column;
    margin-left:-18px;
    gap:5rem;
   }

   .full h3{
    margin-top: 20px;
    margin-left:20px;
    display:none;
   }

   .bInfo h1{
    font-size:40px;
    /* padding: 15px; */
    line-height: 45px;
    padding-block:10px;
    margin-left:10px;
   }

   .bInfo p{
    font-size: 17px;
    width: 270px;
    margin:10px;
    line-height: 30px;
   }

   .span{
    position: relative;
    top: -300px;
    margin-left:56px;
    gap:40px;
   }

   .span p{
    color:#ccf381;;
    width:110px;
    font-size:10px;
    margin-top:60px;
    line-height: 17px;
   }

   .bannerImg img{
    margin-top: 40px;
    height:200px;
    width: 200px;
    position: relative;
    top:140px;
   }
}



`

export const ShelfWrapper = styled.section`

background-color:#f5f4fc;

.shelf h1{
  text-align: center;
  padding-block: 4rem;
  color: #474747;
  font-size:30px;
}

`

export const PerformanceWrapper = styled.section`

  

.performanceContainer{
    border-block:1px solid #cbc9dd;
    /* display:flex; */
    padding-block:40px;
    border-top:none;
    width:900px;
    margin-left:80px;
}

.performanceContainer h1{
    text-transform:capitalize;
    font-size:30px;
    color:#474747;
    width:600px;
}

.performanceContainer p{
    font-size:16px;
    width:640px;
    font-weight:300;
}

.performanceContainer a{
    text-decoration:none;
    color:unset;
}

@media screen and (max-width: 900px){
    width:100%;
    .performanceContainer{
        width: 500px;
        margin-left:40px;
        padding-block:20px;
        width: 320px;
    }


    .performanceContainer h1{
        font-size:23px;
        width:300px;
        padding-block:20px;
    }

    .performanceContainer p{
        font-size: 15px;
        width: 328px;
        line-height: 30px;
    }

}

`

export const FooterWrapper = styled.footer`

background:#3d155f;
height:80vh;
margin-top:120px;
padding-block:4rem;

.footContainer{
    margin-left:160px;
}

.footContainer h1{
    color:#fff;
    font-weight:300;
}

.footContainer h1:hover{
    font-size:34px;
    color:#ccf381;
    transition: 0.5s ease-in-out;
    text-transform:uppercase;
}

.footInfo{
    display:flex;
    gap:150px;
    margin-top:20px;
    
}

.footInfo p{
    color:#ccf381;
    font-size:18px;
}


.footF a{
    color:#ccf381;
    text-decoration:none;
    font-size:20px;
    font-weight:300;

}

.line{
    border-block:1px solid #ccf381;
    width:900px;
    margin-top:50px;
    opacity:.3;
}

@media screen and (max-width: 900px){
    height:70vh;
    width:100%;


.footContainer{
    margin-left: 30px;
}

.footContainer h1{
    font-size: 18px;
    text-transform:uppercase
}

.footContainer h1:hover{
    font-size: 20px;
}

.footInfo{
    flex-direction:column;
    gap:40px;
}

.footInfo p{
    font-size:14px;
}

.footF{
    margin-top: 40px;
}

.footF a{
    font-size:15px;
}

.line{
    width:300px;
    margin-top:130px;
}

}

`

export const WebProblemsWrapper = styled.section`



padding-block:2rem;


.back{
    font-size:27px;
    color:#4831d4;
    cursor: pointer;
}


.webContainer{
    padding-block:8rem;
    margin-left:100px;
}

.webContainer h1{
    font-size:30px;
    color:#4831d4;
}

.webContainer p{
    color:#474747;
    width:788px;
    line-height:30px;
    font-size:17px;
    padding-block:1.2rem;
    font-weight:400;
}

.webInfo h1{
    color:#474747;
    font-size:25px;
}

.webInfo p{
    line-height:30px;
    font-weight:400;
    color:#474747;
}

.webInfo ul{
    margin-left:20px;
    line-height:30px;
}

.webInfo ol{
    margin-left:15px;
    font-size:18px;
}

.webInfo ol li h1{
    font-size:18px;
}

.webDetails h2{
    margin-top:30px;
    color:#474747;
    font-size:27px;
}

.webDetails p{
    line-height:30px;
    font-weight:400;
    width:820px;
}

.webDetails a{
    border-bottom:3px solid whitesmoke;
    text-decoration:none;
    font-size:18px;
    color:#4831d7;
    font-weight:300;
}

.webDetails ul li{
    font-size:16px;
    color:#474747;
    line-height:40px;
}

.tags{
    display:flex;
    max-width:800px;
    gap:20px;
    margin-top:40px;
}

.tags h4{
    font-weight:400;
    color:#474747;
}

.links{
    display:flex;
    gap:30px;
    width:800px;
}

.links a{
    text-decoration:none;
    color:#474747;
}

.icons{
    display:flex;
    align-items:center;
    gap:15px;
}



.twitter{
    color:#1da1f2;
    font-size:22px;
    cursor: pointer;
}

.face{
    color:#4172b8;
    cursor: pointer;
    font-size:22px;
    
}

.face:hover{
    font-size:27px;
    transition:.2s ease-in-out;
    position:relative;
    top:-4px;
    
}

.twitter:hover{
    font-size:27px;
    transition:.2s ease-in-out;
    position:relative;
    top:-4px;
    
}

.arrow{
    display:flex;
    justify-content:space-between;
    width:800px;
    align-items:center;
    margin-top:30px;
}

.arrow a{
    text-decoration:none;
}

.first{
    display:flex;
    align-items:center;
    gap:20px;
}

.first span{
    color:#4831d4;
    font-size:18px;
    font-weight:400;
}

.first span:first-child{
    opacity:.5;
}

.home{
    font-size:25px;
    color:#4831d4;
}

.big{
    font-size:40px;
    font-weight:300;
    transition:transform 0.4s ease-in-out;
    color:#4831d4;
    cursor: pointer;
}

.big:hover{
    /* transform: scaleX(1.5); */
    position:relative;
    left: -5px;
    transition:.4s ease-in-out;
}

.bigg{
    font-size:40px;
    font-weight:300;
    color:#4831d4;
    opacity:.5;
}

@media screen and (max-width: 900px){


    .back{
        margin-left:20px;
    }

    .webContainer{
        margin-left:30px;
        padding-block: 6rem;
        max-width:300px;
    }

    .webContainer h1{
        font-size: 29px;
        width:280px;
        font-weight:600;
    }

    .webContainer p{
        font-size: 15px;
        width:290px;
    }

    .webDetails h2{
        font-size:23px;
        width:300px;
    }

    .webDetails p{
        width:328px;
    }

    .webDetails a{
        font-size:16px;
    }

    .webDetails ul li{
        font-size:15px;
        width:280px;
    }

    .tags{
        max-width: 200px;
        gap:20px;
    }

    .links{
        justify-content:center;
        align-items:center;
        width:200px;
        gap:10px;
        flex-direction:column;
    }

    .links a{
        font-size:14px;
        width:300px;
    }

    .links a:nth-child(1){
        margin-left:90px;
        margin-top:3px;
    }

    .links a:nth-child(2){
        margin-left:-23px;
    }

    .icons{
        gap:14px;
        position:relative;
        top:-12px;
        left:-15px;
    }


    .arrow{
        max-width:320px;
    }

    .first span{
        font-size: 13px;
    }

   
}


`

export const NewsLetterWrapper = styled.section`


.news{
    border:3px solid #fff;
    height:350px;
    width:800px;
    background-color:#fff;
    padding:70px;
}

.news h1{
    color:#4831d4;
    font-size:38px;
    width:300px;
    padding-block:10px;
    font-weight:550;
}

.news span{
    text-transform:capitalize;
    font-size:18px;
    font-weight:300;
}

.news span:active{
    color:#4831d4;
    cursor:pointer;

}

.email{
    display:flex;
    gap:30px;
    padding-block:10px;
}

.input{
    width:500px;
    border:1px solid;
    border-top:none;
    border-left:none;
    border-right:none;
    outline:none;
}

.input::placeholder{
    color:#4831d4;
    opacity:.5;
}

.email button{
    height:50px;
    width:150px;
    text-transform:uppercase;
    color:#4831d4;
    font-size:15px;
    font-weight:550;
    border:1px solid #4831d4;
    background-color:#fff;
    transition: width 2s ;
    cursor: pointer;

}

.email button:hover{
    width:180px;
    background-color:#4831d4;
    color:#fff;
}

.email button:disabled{
    background-color: gray;
    color:black;
    border:none;
    opacity:0;
}

@media screen and (max-width: 900px){

  
    .news{
        height:250px;
        width:350px;
        padding:20px;
    }

    .news h1{
        font-size: 26px;
    }

    .input{
        width:300px;
    }

    .email {
        flex-direction:column;
        gap:15px;
    }

    .email button{
        width:305px;
    }
}

`

export const BigPictureWrapper = styled.section`

padding-block:2rem;

.back{
    font-size:27px;
    color:#4831d4;
    cursor: pointer;
}

.back:hover{
    position: relative;
    left:-5px;
}

.pictureContainer{
    padding-block:8rem;
    margin-left:100px;
}

.pictureContainer h1{
    font-size:34px;
    color:#4831d4;
    
}

.pictureContainer p{
    color:#474747;
    width:788px;
    line-height:30px;
    font-size:17px;
    padding-block:1.2rem;
    font-weight:400;
}

.pictureInfo h2{
    color:#474747;
    font-size:29px;
}

.pictureInfo h4{
    color:#474747;
    font-size:18px;
    font-weight:550;
    padding-block:1.5rem;
}

.pictureInfo p{
    width:780px;
    padding-block:2rem;
}

.pictureInfo ul li{
    line-height:30px;
    margin-left:20px;
    margin-top:15px;
}

.pictureInfo a{
    font-size:18px;
    text-decoration:none;
    border-bottom:2px solid #edeafa;
    font-weight:399;
    color:#4831d4;

}

.pictureInfo a:hover{
    background-color:#edeafa;
}

.pictureInfo li{
    font-size:18px;
    width:800px;
    color:#474747;
}

.tags{
    display:flex;
    max-width:800px;
    gap:20px;
    margin-top:40px;
}

.tags h4{
    font-weight:400;
    color:#474747;
}

.links{
    display:flex;
    gap:30px;
    width:800px;
}

.links a{
    text-decoration:none;
    color:#474747;
}

.icons{
    display:flex;
    align-items:center;
    gap:15px;
}


.home{
    font-size:25px;
    color:#4831d4;
}

.face{
    color:#4172b8;
    cursor: pointer;
    font-size:22px;
    
}

.twitter{
    color:#1da1f2;
    font-size:22px;
    cursor: pointer;
}

.face:hover{
    font-size:27px;
    transition:.2s ease-in-out;
    position:relative;
    top:-4px;
    
}

.twitter:hover{
    font-size:27px;
    transition:.2s ease-in-out;
    position:relative;
    top:-4px;

}

.arrows{
    display:flex;
    width:800px;
    justify-content:space-between;
    align-items:center;
    margin-top:30px;
    
}

.arrows a{
    text-decoration:none;
}

.first{
    display:flex;
    align-items:center;
    gap:10px;
}

.first span{
    color:#4831d4;
    font-size:18px;
    font-weight:400;
}

.first span:last-child{
    opacity:.5;
}

.big{
    color:#4831d4;
    font-size:40px;
    font-weight:300;
    opacity:.5;
}

.bigg{
    color:#4831d4;
    font-size:40px;
    font-weight:300;
    cursor: pointer;
}

.bigg:hover{
    position: relative;
    left:5px;
}

@media screen and (max-width: 900px){

     .back{
        margin-left:20px;
     }

    .pictureContainer{
        max-width:300px;
        margin-left:30px;
    }

    .pictureContainer h1{
        font-size:29px;
        width:280px;
    }

    .pictureContainer p{
        font-size:15px;
        width:300px;
    }

    .pictureInfo h2{
        font-size:22px;
    }

    .pictureInfo h4{
        font-size:16px;
    }

    .pictureInfo a{
        font-size:18px;
    }

    .pictureInfo ul li{
        font-size: 15px;
        width:300px;
    }

    .tags{
        max-width: 200px;
        gap:20px;
    }

    .links{
        justify-content:center;
        align-items:center;
        width:200px;
        gap:10px;
        flex-direction:column;
    }

    .links a{
        font-size:14px;
        width:300px;
    }

    .links a:nth-child(1){
        margin-left:90px;
        margin-top:3px;
    }

    .links a:nth-child(2){
        margin-left:-23px;
    }

    .icons{
        gap:14px;
        position:relative;
        top:-12px;
        left:-15px;
    }


    .arrows{
        max-width:320px;
    }

    .first span{
        font-size: 13px;
    }
}

`

export const WorkWrapper = styled.section`




background-color:#f5f4fc;


.work h1{
  text-align: center;
  padding-block: 4rem;
  color: #474747;
  font-size:30px;
}


`

export const WorkStationWrapper = styled.section`
height:290px;
width:350px;
background: linear-gradient(180deg, #f9f8fd 70%, #fff 30% );
cursor: pointer;

a{
    text-decoration: none;
}



img{
    height:50px;
    width:50px;
}

.workInfo{
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:50px;
    gap:10px;
}

.workInfo h2{
    font-size:19px;
}

.workLinks{
    padding:30px;
}

.workLinks h3{
    margin-top:90px;
    /* padding:30px; */
    color:#474747;
    font-weight:500;
}

@media screen and (max-width:900px){
    height:260px;
    width:350px;
    background: linear-gradient(180deg, #f9f8fd 60%, #fff 40% );


    

    .workLinks{
        padding:25px;
    }

    .workLinks h3{
        margin-top:60px;
    }
}



`

export const ContactWrapper = styled.section`

background-color: #f5f4fc;

.contact h1{
    text-align: center;
    padding-block: 4rem;
    color: #474747;
    font-size:30px;
}


`

