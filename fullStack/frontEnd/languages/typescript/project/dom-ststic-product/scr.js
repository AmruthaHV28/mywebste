let div=document.getElementById('root')






async function displayProducts(){
    let api1=fetch('https://fakestoreapi.com/products')
api1=await(await api1).json()
console.log("api 1", api1)
let category=api1.filter((item)=>{return item.name=="men's clothing"})
console.log(category)
api1.map((item)=>{
        let image=document.createElement('img')
        image.src=item.image
        image.style.width="200px"
        image.style.padding="40px"
      
        
    })
    
}