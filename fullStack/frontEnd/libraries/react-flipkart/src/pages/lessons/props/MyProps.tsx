export let MyProps:React.FC<{}>=()=>{
    return <div>
        <center><h1>props</h1></center>
        
        <h2>In ReactJS, the props are a type of object where the value of attributes of a tag is stored . The word “props” implies “properties”, and its working functionality is quite similar to HTML attributes. Basically, these props components are read-only components.</h2>

        <h3>Example: </h3>
           {Check({a:"watch"})} 
          <Check a={"car"}/>
        </div> 
}

let Check:React.FC<{a:any}>=(props)=>{
    return <h2>{props.a}</h2>
}