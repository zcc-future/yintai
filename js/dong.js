window.onload=function(){
   var sy1=$(".bannerleft");
   var sy2=$(".fu");	   
   for(var i=0;i<sy1.length;i++){
		  sy1[i].index=i;
			  sy1[i].onmouseover=function(){
			  sy2[this.index].style.display="block";
    }  
			  sy1[i].onmouseout=function(){
			  sy2[this.index].style.display="none";
   }
 }
  
  //选项卡
   var wx=$(".wx")[0];
   var wxk=$(".wxk")[0]; 
   var wximg=$("img",wx) 
   var wxspan=$("span",wx)[0]   
        wx.onmouseover=function(){
        wxk.style.display="block";
        wx.style.background="white";
        wximg[1].style.opacity=0;
         wxspan.style.opacity=0;
    }  
        wx.onmouseout=function(){
        wxk.style.display="none";
        wx.style.background="none";
        wximg[1].style.opacity=1;
        wxspan.style.opacity=1;
   }

  //微信选项卡
   var sjyt=$(".sjyt")[0];
   var sjk=$(".sjk")[0]; 
   var sjimg=$("img",sjyt)     
        sjyt.onmouseover=function(){
        sjk.style.display="block";
        sjyt.style.background="white";
        sjimg[1].style.opacity=0;
    }  
        sjyt.onmouseout=function(){
        sjk.style.display="none";
        sjyt.style.background="none";
        sjimg[1].style.opacity=1;
   }

  //手机银泰选项卡
    var wyt=$(".wyt")[0];
   var wytk=$(".wytk")[0];  
    var wyimg=$("img",wyt)    
        wyt.onmouseover=function(){
        wytk.style.display="block";
        wyt.style.background="white";
        wyimg[0].style.opacity=0;
    }  
        wyt.onmouseout=function(){
        wytk.style.display="none";
        wyt.style.background="none";
        wyimg[0].style.opacity=1;
   }

  //我的银泰选项卡

  var tu=$("img",$(".bannerz1")[0]);
  var datu=$("img",$(".bannertu1")[0]);
  var middle=$(".bannerz1")[0];
	var yuan=$(".xiao1");
  var jtR=$(".jtr")[0];
  var jtL=$(".jtl")[0];
  	 var a=0;
  var t=setInterval(move,2000);
     function move(){
       a++;
         if(a>=tu.length){
          a=0;
         }
      for(i=0;i<tu.length;i++){
         for(i=0;i<tu.length;i++){
            animate(tu[i],{opacity:0},2000,Tween.Quad.easeInOut)
            animate(datu[i],{opacity:0},2000,Tween.Quad.easeInOut)
            yuan[i].style.background="#666";
  } 
         yuan[a].style.background="red";
         animate(tu[a],{opacity:1},1000,Tween.Quad.easeInOut)
         animate(datu[a],{opacity:1},2000,Tween.Quad.easeInOut)
  }
    }


    function move1(){
    a--;
         if(a<0){
          a=tu.length-1;
         }
      for(i=0;i<tu.length;i++){
         for(i=0;i<tu.length;i++){
            animate(tu[i],{opacity:0},2000,Tween.Quad.easeInOut)
            animate(datu[i],{opacity:0},2000,Tween.Quad.easeInOut)
            yuan[i].style.background="#666";
           


  } 
         yuan[a].style.background="red";
         animate(tu[a],{opacity:1},2000,Tween.Quad.easeInOut);
         animate(datu[a],{opacity:1},2000,Tween.Quad.easeInOut);
  }
    }
  middle.onmouseover=function(){
    jtL.style.opacity=0.5;
      jtR.style.opacity=0.5;
    clearInterval(t);
  }
  middle.onmouseout=function(){
    
    jtR.style.opacity=0;
    jtL.style.opacity=0;
    t=setInterval(move,2000);
  }
  jtR.onclick=function(){
    move();
  }
  jtL.onclick=function(){
    move1();
  }

  for(i=0;i<yuan.length;i++){
    yuan[i].index=i;
    yuan[i].onclick=function(){
      for(j=0;j<yuan.length;j++){
              yuan[j].style.background="#666";
         animate(tu[j],{opacity:0},2000,Tween.Quad.easeInOut);
         animate(datu[j],{opacity:0},2000,Tween.Quad.easeInOut);
  } 
          this.style.background="red";
         animate(tu[this.index],{opacity:1},2000,Tween.Quad.easeInOut);
         animate(datu[this.index],{opacity:1},2000,Tween.Quad.easeInOut);
          i=a;
    }
  }

       
      
//banner 轮播
   var cz1=$(".zhong1top1");
   var zzhong1=$(".zhong1bottom1"); 
   var xsj=$(".xsj")
   cz1[0].style.borderBottomColor="#e5004f";
   zzhong1[0].style.display="block";
   xsj[0].style.borderBottomColor="#e5004f"
     cz1[0].style.fontWeight="bold";
   for(var i=0;i<cz1.length;i++){
      cz1[i].index=i;
        cz1[i].onmouseover=function(){
          for(j=0;j<cz1.length;j++){
            cz1[j].style.borderBottomColor="#333";
            zzhong1[j].style.display="none";
           xsj[j].style.borderBottomColor="#666"
           cz1[j].style.fontWeight="normal";
          }
          xsj[this.index].style.borderBottomColor="#e5004f"
          this.style.borderBottomColor="#e5004f";
        zzhong1[this.index].style.display="block";
        this.style.fontWeight="bold";
    }  
  
 }
//zhong1选项卡
 var zh2=$(".zhong2right3");
   var zzhong2=$(".zhong2xxk"); 
   var zh1=$(".zhong2xxk1")
   var xsj1=$(".xsj1")
    xsj1[0].style.borderBottomColor="#e5004f"
   for(i=0;i<zh1.length;i++){
     zh1[i].style.borderBottomColor="#eee"
     zh1[i].style.borderTopColor="#eee"
     zh1[i].style.borderLeftColor="#eee"
     zh1[i].style.borderRightColor="#eee"
   }
   
   zh2[0].style.borderBottomColor="#e5004f";
   zzhong2[0].style.display="block";
   for(var i=0;i<zh2.length;i++){
      zh2[i].index=i;
        zh2[i].onmouseover=function(){
          for(j=0;j<zh2.length;j++){
            zh2[j].style.borderBottomColor="#333";
          }
           for(j=0;j<zzhong2.length;j++){
            zzhong2[j].style.display="none";
          }
          for(j=0;j<xsj1.length;j++){
           xsj1[j].style.borderBottomColor="#666"
          }
          xsj1[this.index].style.borderBottomColor="#e5004f"
          this.style.borderBottomColor="#e5004f";
        zzhong2[this.index].style.display="block";
    }  
  
 }
//zhong2选项卡

function centerxxk(imgbox){
     var ddtu=imgbox;
    var tutu=$(".zhong3img",ddtu);
    var yy1=$(".gy1",ddtu)
    var now=0;
    var next=0;
  var zjt=$(".cjtL",ddtu)[0]
  var yjt=$(".cjtR",ddtu)[0]
  var flag=true;
  var width=parseInt(getStyle(ddtu,"width"))
   // var t=setInterval(ress,2000);
     zjt.style.display="none";
     yjt.style.display="none";
     yy1[0].style.background="red";
     tutu[0].style.left=0;

     function ress(type){
      var type=type||"1";
      if(type=="1"){
        next=now+1;
      if(next>=tutu.length){
        next=0;
      }
      tutu[next].style.left=width+"px";
      animate(tutu[now],{left:-width},500);
     }else if(type=="2"){
      next=now-1;
      if(next<0){
        next=tutu.length-1;
      }
      tutu[next].style.left=-width+"px";
      animate(tutu[now],{left:width},500);
     }
      
      animate(tutu[next],{left:0},function(){
        flag=true;
      })
      for(i=0;i<yy1.length;i++){
       yy1[i].style.background="#666";
      }
      yy1[next].style.background="red";
      now=next;
     }
   
     ddtu.onmouseover=function(){
      zjt.style.display="block";
     yjt.style.display="block";
       // clearInterval(t);
     }
     ddtu.onmouseout=function(){
        zjt.style.display="none";
       yjt.style.display="none";
       // t=setInterval(ress,2000)
     }
      yjt.onclick=function(){
       if(flag){
          ress("1")
        }
        flag=false;
      }
      zjt.onclick=function(){
        if(flag){
          ress("2")
        }
        flag=false;
      }
      for(i=0;i<yy1.length;i++){
        yy1[i].index=i;
        yy1[i].onclick=function(){
             if(flag==false){
              return
             }
             flag=false;
          if(this.index>now){
           tutu[next].style.left=width+"px";
            animate(tutu[now],{left:-width});
            
          }else if(this.index<now){
            tutu[this.index].style.left=-width+"px";
               animate(tutu[now],{left:width});
            }
             animate(tutu[this.index],{left:0},function(){
        flag=true;
      })
          for(i=0;i<yy1.length;i++){
             yy1[i].style.background="#666";
          }
             this.style.background="red";
          now=this.index;
          next=this.index;
        }
      }
  }
  
 centerxxk($(".zhong3center")[0]);
 centerxxk($(".zhong3center")[3])     
 centerxxk($(".zhong3center")[4]) 
 centerxxk($(".zhong3center")[5]) 
 centerxxk($(".zhong3center")[6]) 
 centerxxk($(".zhong3center")[7]) 



 
//zhong3轮播
 function jiedian(i){
  var centerLeft=$(".centerLeft")[i];
  var zhong3left=$(".zhong3left3")[i]
  var img=$(".centerLeft2",centerLeft)
  var imgbox=$(".centerLeft1",centerLeft)[0]
  var leftjtz=$(".leftjtz",zhong3left)[0]
  var leftjty=$(".leftjty",zhong3left)[0];  
  var flag=true;
  console.log(img,imgbox,leftjtz,leftjty,centerLeft)
  var width=parseInt(getStyle(img[0],"width"))
  function move(){
    animate(imgbox,{left:-width},1000,function(){
      var first=firstChild(imgbox);
      imgbox.appendChild(first);
      imgbox.style.left=0
      flag=true;
    })
  }
  function moveL(){
      imgbox.style.left=-width+"px";
      var first=firstChild(imgbox);
      var last=lastChild(imgbox);
      imgbox.insertBefore(last,first);     
     animate(imgbox,{left:0},1000,function(){
      flag=true;
     })

  }
  leftjty.onclick=function(){
    if(flag){
      move();
      flag=false;
    }
  }
  leftjtz.onclick=function(){
    if(flag){
      moveL();
      flag=false;
    }
  }
  
 
  }
  for(var i=0;i<10;i++){
    jiedian(i)

  }
  

//中节点


function border(zhong1){
  var zhong1=zhong1
  var borderL=$(".borderL",zhong1)[0];
  var borderT=$(".borderT",zhong1)[0];
  var borderR=$(".borderR",zhong1)[0];
  var borderB=$(".borderB",zhong1)[0];
  borderB.style.display="none"
  var widthB=parseInt(getStyle(zhong1,"width"))
  var heightB=parseInt(getStyle(zhong1,"height"))
  zhong1.onmouseover=function(){
    borderB.style.display="block"
    animate(borderL,{bottom:0},600)
    animate(borderT,{right:0},600)
    animate(borderR,{top:0},600)
    animate(borderB,{left:0},600)
  }
  zhong1.onmouseout=function(){
    borderB.style.display="none"
    animate(borderL,{bottom:heightB},600)
    animate(borderT,{right:widthB},600)
    animate(borderR,{top:heightB},600)
    animate(borderB,{left:widthB},600)
  }
}
var zhong1=$(".zhong1tu")
for(var i=0;i<zhong1.length;i++){
  border(zhong1[i])
}


function border2(zhong2){
  var zhong2=zhong2
  var borderL1=$(".borderL1",zhong2)[0];
  var borderT1=$(".borderT1",zhong2)[0];
  var borderR1=$(".borderR1",zhong2)[0];
  var borderB1=$(".borderB1",zhong2)[0];
  var widthB=parseInt(getStyle(zhong2,"width"))
  var heightB=parseInt(getStyle(zhong2,"height"))
  zhong2.onmouseover=function(){
    animate(borderL1,{bottom:0},600)
    animate(borderT1,{right:0},600)
    animate(borderR1,{top:0},600)
    animate(borderB1,{left:0},600)
  }
  zhong2.onmouseout=function(){
    animate(borderL1,{bottom:heightB},600)
    animate(borderT1,{right:widthB},600)
    animate(borderR1,{top:heightB},600)
    animate(borderB1,{left:widthB},600)
  }
}
var zhong2=$(".zhong2xxk1")
for(var i=0;i<zhong2.length;i++){
  border2(zhong2[i])
}


function border3(zhong3){
  var zhong3=zhong3
  var borderL2=$(".borderL2",zhong3)[0];
  var borderT2=$(".borderT2",zhong3)[0];
  var borderR2=$(".borderR2",zhong3)[0];
  var borderB2=$(".borderB2",zhong3)[0];
   borderB2.style.display="none"
  var widthB=parseInt(getStyle(zhong3,"width"))
  var heightB=parseInt(getStyle(zhong3,"height"))
  zhong3.onmouseover=function(){
    borderB2.style.display="block"
    animate(borderL2,{bottom:0},600)
    animate(borderT2,{right:0},600)
    animate(borderR2,{top:0},600)
    animate(borderB2,{left:0},600)
  }
  zhong3.onmouseout=function(){
    borderB2.style.display="none"
    animate(borderL2,{bottom:heightB},600)
    animate(borderT2,{right:widthB},600)
    animate(borderR2,{top:heightB},600)
    animate(borderB2,{left:widthB},600)
  }
}
  
var zhong3=$(".zhong3right1")
border3(zhong3[0])
for(var i=0;i<zhong3.length;i++){
  border3(zhong3[i])
}

//border
  var lou=[$(".zhong3tou")[0],$(".zhong3tou")[1],$(".zhong3tou")[2],$(".zhong3tou")[3],$(".zhong3tou")[4],$(".zhong3tou")[5],$(".zhong3tou")[6],$(".zhong3tou")[7],$(".zhong3tou")[8],$(".foot4")[0]]
  var F1="<img src='./images/ll1.jpg' alt='加载失败'>"
  var F2="<img src='./images/ll2.jpg' alt='加载失败'>"
  var F3="<img src='./images/ll3.jpg' alt='加载失败'>"
  var F4="<img src='./images/ll4.jpg' alt='加载失败'>"
  var F5="<img src='./images/ll5.jpg' alt='加载失败'>"
  var F6="<img src='./images/ll6.jpg' alt='加载失败'>"
  var F7="<img src='./images/ll7.jpg' alt='加载失败'>"
  var F8="<img src='./images/ll8.jpg' alt='加载失败'>"
  var F9="<img src='./images/ll9.jpg' alt='加载失败'>"
  var F10="<img src='./images/ll10.jpg' alt='加载失败'>"
  var lou1=[F1,F2,F3,F4,F5,F6,F7,F8,F9,F10]
  var wz1=["时尚<br/>名品"," 潮流<br/>女装"," 精品<br/>男装","时尚<br/>鞋靴","潮流<br/>箱包","美容<br/>护肤","运动<br/>户外","内衣<br/>配饰","可爱<br/>童婴","返回<br/>顶部"]
  var gd=$(".gd")[0];
  var gdlou=$(".gdlou");
  var now;
  var cWidth=document.documentElement.clientWidth;
  var cHeight=document.documentElement.clientHeight;

   for(var i=0;i<lou.length;i++){
    lou[i].h=lou[i].offsetTop
   }
    for(var j=0;j<gdlou.length;j++){
      gdlou[j].innerHTML=lou1[j]
   }
 window.onscroll=function(){
    obj=document.body.scrollTop?document.body:document.documentElement;
    var top2=obj.scrollTop
    if(top2>lou[0].h-300){
      gd.style.display="block";
      var gdHeight=gd.offsetHeight;
      gd.style.top=(cHeight-gdHeight)/2+"px";     
    }else{
      gd.style.display="none";
    } 
    
    for(i=0;i<lou.length;i++){
      if(top2>lou[i].h-300){
        for(j=0;j<gdlou.length;j++){
            gdlou[j].innerHTML=lou1[j]
             }
       gdlou[i].innerHTML=wz1[i]
       now=i;
      }    
    }

    for(i=0;i<gdlou.length;i++){
      gdlou[i].index=i;
      
      gdlou[i].onclick=function(){
        animate(document.body,{scrollTop:lou[this.index].h},500);
        animate(document.documentElement,{scrollTop:lou[this.index].h},500)
        for(j=0;j<gdlou.length;j++){
             gdlou[j].innerHTML=lou1[j]
             }
        this.innerHTML=wz1[this.index]
         now=this.index;
         
      }
      gdlou[i].onmouseover=function(){

        this.innerHTML=wz1[this.index]

      }
      gdlou[i].onmouseout=function(){
        if(this.index==now){
          return;
        }
        this.innerHTML=lou1[this.index]
      }

    }
    gdlou[9].onclick=function(){
        animate(document.body,{scrollTop:0},500);
    }
  }

  //楼层


}

