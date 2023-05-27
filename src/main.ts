
//Type alias

type StringOrNumber = string | number;

type stringOrNumberArray = (StringOrNumber)[]


type Guitarist = {
    name: string,
    active: boolean, 
    albums : stringOrNumberArray
}

type UserId = StringOrNumber  //This same cannot be done with interface

//Literal type
let myName: 'Rohan'

let username: 'Rohan' | 'user 1' | 'user 2'

username = 'Rohan'

//functions
const add = (a:number, b:number):StringOrNumber => {
    return a+b
}

console.log(add(2, 5))


const logMsg = (message: any) => {
    console.log(message)
}

//to use type with functions we can define function before hand
type mathFuntions = (c: number, d: number) => number
//interface method as well
interface mathFuntionsInterface  {
    (a: number,
    b:number):number
}

//so now if we have to define same function add as above we can simply use this
const add2: mathFuntions = (a, b) => {
    return a+b
}

console.log(add2(23, 5))


//optinal parameter

const addAll= (a: number, b: number, c?: number):number => {
    if(typeof c !== 'undefined') {
        return a+b+c
    }
    return a+b
}

//Rest parametet
const total = (...nums: number[]): number => {
    return nums.reduce((prev,curr)=> prev+curr)
}


//NEVER

const createError = (msg: string) => {
    throw new Error(msg)
}

const checkNumString=(value: StringOrNumber):string => {
    if (typeof value === 'string') return 'string'
    if (typeof value === 'number') return 'number'
    return createError('This should never happen')
}

