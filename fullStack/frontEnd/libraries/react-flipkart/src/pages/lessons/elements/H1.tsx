// function H1(){
//     return <h1>hello im h1</h1>
// }
export let H1:React.FC<{}>=()=>{
    console.log(Calu())
    console.log(-4,3,"8")
  return <center>
    
    <h1>Elements in react</h1>
     
    
     
<Calu/>

     </center> 
}

function Calu(){
    return <h3>Elements are the smallest building blocks of React apps . An element describes what you want to see on the screen: const element = 'h1' Hello, world 'h1'; Unlike browser DOM elements, React elements are plain objects, and are cheap to create.</h3>
}