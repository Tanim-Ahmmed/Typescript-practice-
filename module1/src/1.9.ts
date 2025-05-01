{
    //type alias in Typescript
    //type alias for object
    type Student = {
        name: string;
        id: number;
        contactNo?: number;
        gender: string;
        address: string;
    }
    const student1: Student ={
     name: "Tanim",
     id: 221902037,
    contactNo: 1766045464,
    gender: "male",
    address: "narshingdi",
    }

    const student2: Student={
    name: "mir",
    id:222103476,
    gender:"male",
    address:"Dhaka",
    }

    //type alias for variable

    type UserName = string;
    const uesrName : UserName ="Tanim";


    //type alias in function 

    type Add = (num1: number, num2: number) => number;
    const add: Add = (num1, num2) => num1+ num2 ;
}