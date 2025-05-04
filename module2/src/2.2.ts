{

     // we can use type alias and interface same way but type alias used on premetive , non premetive both and interface used only object 

    //interface in object 
    type User1 = {
      name: string;
      age : number;
    }

    interface User2 {
        name: string;
        age : number;
    }


    type userWithRole = User1 & {role: number}
   
    interface userWithRole2 extends User2{role: number}
    interface userWithRole2 extends User1{role: number}

    const user:  userWithRole ={
        name: "Tanim",
        age : 24,
        role: 75,
    }


    //interface in array 

    type Role1 = number[]
    interface Role2 {
        [index: number] : number
    }

    const role : Role2 = [10,20,30];


    //interface in funcion
    
    type Add1 = (num1: number, num2: number) => number
    interface Add2 {
        (num1: number, num2: number): number
    }

    const add: Add2 = (num1, num2) => num1 + num2; 




}