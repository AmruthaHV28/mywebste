interface Icloths{
    name:string
    prize:number
    size?:string //if we dont us ? it will show error
}




let cloth: Icloths={ 
    name:'t-shirt',
     prize:300,
    }

cloth.size='xl'
console.log(cloth)

//if you want to add new property here we can't it will show error 
//cloths.color(red)

//to allow we create interface interdace Icloths{ give a list of items and its data types}

//how to create interface in javascript?