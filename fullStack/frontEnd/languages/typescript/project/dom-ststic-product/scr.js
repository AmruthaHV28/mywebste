let div=document.getElementById('root')


let myproducts=[
    {name:'men-shoes',image:'./1.jpg'},
    {name:'men-shoes',image:'./2.jpg'},
    {name:'female-shoes',image:'./3.jpg'},
    {name:'men-shoes',image:'./4.jpg'},
    {name:'female-shoes',image:'./5.jpg'},
    {name:'men-shoes',image:'./6.jpg'},
    {name:'female-shoes',image:'./7.jpg'},
    {name:'men-shoes',image:'./8.jpg'},
    {name:'female-shoes',image:'./9.jpg'},
    {name:'babyshoes',image:'./10.jpg'}
]
let category=myproducts.filter((item)=>{return item.name=='men-shoes'})
console.log(category)
function displayProducts(){
   



    category.map((item)=>{
        let image=document.createElement('img')
        image.src=item.image
        image.style.width="200px"
        image.style.padding="40px"
        div.appendChild(image)
    })
}