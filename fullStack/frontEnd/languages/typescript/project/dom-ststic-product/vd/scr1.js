let div=document.getElementById('root')


let videos=[
    
      {name:"view",video:'111.mp4'}
    ]


function displayProducts(){
   



  videos.map((item)=>{
        let video=document.createElement('video')
        video.src=item.video
        video.controls=true
        div.appendChild(video)
    })
}