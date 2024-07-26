var timestamp = 0.0;
var times = 0;
    fst = false;
var page = 6;
var tadap = null;
var tadat = 0;

var effects = ["show" , "splash-show" , "btt-show" , "rot-show"];
var effectOffset = 0;


document.onreadystatechange = function(){
    if(document.readyState.toLowerCase() == "complete"){
            setTimeout(function(){
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            },1);
            document.addEventListener("mousewheel",function(e){
                console.log(e.wheelDelta);
                e.preventDefault();
                if(fst || e.timeStamp - timestamp < 1200.0){
                    return;
                }
                fst = true;
                timestamp = e.timeStamp;
                
                if(e.wheelDelta < 0){
                    times = (times >= page ) ? page : 1+times;
                    console.log("next");
                }else{
                    times = (times-1 <= 0 ) ? 0 : times-1;
                    console.log("previous");
                }
                softScrollTo(window.innerHeight*times);
                console.log(times);
                return;
                
                
                
                
            },true);
            if (typeof document.onmousewheel == "undefined") {
                console.log("FF");
                 document.addEventListener("DOMMouseScroll",function(e){
                    e.preventDefault();
                    console.log(e.detail);
                    if(e.timeStamp - timestamp < 1200.0){
                        return;
                    }
                    fst = true;
                    timestamp = e.timeStamp;
                    if(e.detail > 0){
                        times = (times >= page ) ?page : 1+times;
                        console.log("next");
                        
                    }else{
                        times = (times-1 <= 0 ) ? 0 : times-1;
                        console.log("previous");
                        
                    }
                    softScrollTo(window.innerHeight*times);
                    console.log(times);
                    return;
                    
                    
                    
                    
                },true);
               } 
               
          //tada box
          
          for(var i = 0 ; i<tada.children.length ; ++i){
              for(var p = 0; p < 28 ; ++p){
                  tada.children[i].innerHTML += '<span><span><img src="'+tada.children[i].dataset.src+'"/></span></span>';
              }
          }
            setInterval(function(){
                 // console.log(tadat);
                 background.style.display="none";
                  if(tadap != null){
                      
                     removeClass(tadap,effects[effectOffset]);
                 }
                           effectOffset = parseInt(Math.random()*4);
                           addClass(tada.children[tadat],effects[effectOffset]);
                           tadap = tada.children[tadat];
                           tadat++;
                           tadat = tadat % tada.children.length;
             },4000);
    }
}

document.body.addEventListener("mousemove",function(e){
    
    var offsetX = e.clientX / window.innerWidth - 0.5,
        offsetY = e.clientY / window.innerHeight- 0.5;
        
        background1.style.backgroundPosition = (-1*offsetX*10-5)+"px "+(-1*offsetY*10-5)+"px";
    
},true);


window.onload = function(){
    preloader.style.opacity = "0";
    timerAfter.innerText = ".container > .content-logo::after{\
                                                    content: ' ';\
                                                    display: block;\
                                                    position: absolute;\
                                                    width: 3em;\
                                                    height: 0.5em;\
                                                    border-radius: 0.25em;\
                                                    background: rgb(248,147,29);\
                                                    bottom: -0.5em;\
                                                    left: -3em;\
                                                    z-index: 6;\
                                                    animation: goAHead 4s linear 0s infinite;\
                                                    }";
    setTimeout(function(){
        document.body.removeChild(preloader);
        
    },500);
}


 

    