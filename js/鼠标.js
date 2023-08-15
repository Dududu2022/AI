 
  let shubiao = document.querySelector('.shubiao')
         // 定义小图片的旋转角度
         let deg = 0
         // 定义小图片位于网页左侧的位置
         let shubiaox = 0
         // 定义小图片位于网页顶部的位置
         let shubiaoy = 0
         // 定义小图片x轴的位置
         let shubiaol = 0
         // 定义小图片y轴的位置
         let shubiaot = 0
         // 定义小图片翻转的角度
         let y = 0
         // 定义一个计数器
         let index = 0
 
         window.addEventListener('mousemove',function(xyz){
             // 获取网页左侧距离的图片位置
             shubiaox = xyz.x - shubiao.offsetLeft - shubiao.clientWidth /2
             // 多去网页顶部距离图片的位置
             shubiaoy = xyz.y - shubiao.offsetTop - shubiao.clientHeight /2
             // 套入公式，定义图片的旋转角度
             deg = 360*Math.atan(shubiaoy/shubiaox)/(2*Math.PI)
             // 每当鼠标移动的时候重置index
             index= 0
             // 定义当前鼠标的位置
             let x = event.clientX
             // 当鼠标的x轴大于图片的时候，提普安就要对着鼠标，所以需要将图片翻转过来
             // 否则就不用翻转
             if(shubiao.offsetLeft<x){
                 y=-180
             }else{
                 y=0
             }
         })
         setInterval(()=>{
             // 设置小图片的旋转和翻转
             shubiao.style.transform = "rotateZ("+deg+"deg) rotateY("+y+"deg)"
             index++
             // 在这里设置小图片的位置和速度，并判断小图片到达鼠标位置时停止移动
             if(index<25){
                 shubiaol+=shubiaox/50
                 shubiaot+=shubiaoy/40
             }
             shubiao.style.left = shubiaol+"px"
             shubiao.style.top = shubiaot+"px"
         },10)