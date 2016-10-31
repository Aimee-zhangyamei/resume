var mySwiper=new Swiper(".swiper-container",{
    direction:"vertical",
    loop:true,
    effect:"flip",
    onSlideChangeEnd: function (swiper) {
        var slides=swiper.slides,
            curIndex=swiper.activeIndex,
            trueSlideNum=slides.length- 2,
            lastSlideNum=trueSlideNum+1;
        [].forEach.call(slides, function (item, index) {
//console.log(item.id);
            item.id="";
            if(index==curIndex){
                switch  (index){
                    case 0:
                        item.id="page"+trueSlideNum;
                        break;
                    case lastSlideNum:
                        item.id="page1";
                        break;
                    default :
                        item.id="page"+curIndex;
                }
            }
        })

    },
    onInit: function () {

    }
});
var music=document.getElementById("music"),
    beyond=music.getElementsByClassName("beyond")[0];
//console.log(beyond);
window.setTimeout(function () {
   beyond.play();
    beyond.addEventListener("canplay", function () {
        music.className="player playMusic";
        music.style.opacity=1;
    });
},500);
    music.addEventListener("click", function () {
        if(beyond.paused){
            beyond.play();
            music.className="player playMusic";
        }else{
            beyond.pause();
            music.className="player";
        }
    });

var deW=640,
    maxWidth=document.documentElement.clientWidth,
    fontSi=100;
var res=document.documentElement.style.fontSize=maxWidth/deW*fontSi+"px";
console.log(res);





