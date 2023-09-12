interface Icloths{
    //expecting some keys and value [key:string ]:any value

    [key:string ]:any
}
var clothS= {
    name: 't-shirt',
    prize: 300
}



//obj human ethics 
//makeit generic 

interface Ihuman<t>{                    //no wher can we use any so weassigne t that 
    [key:string ]:t  //callanyone they call

}

let huma:Ihuman<string>={
    eye:"yes he has eyes"  //answer in string

}
let human:Ihuman<boolean>={
    eye:false                 //give the answer in boolean

}