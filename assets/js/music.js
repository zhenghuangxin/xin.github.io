   var anniu = document.querySelector(".anniu2")
   var yinyue = document.querySelector(".music")
   var a = 1
   anniu.onclick = function(){
    a = a + 1;
    if(a % 2 == 0){
        yinyue.play()
    }else{
        yinyue.pause()
    }
   }
