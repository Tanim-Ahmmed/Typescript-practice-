{ 
//function for typescript
function add(num1 : number , num2 : number = 10): number{
    return num1 + num2;
}

// for arrow function 
const addArrow =(num1: number, num2: number): number =>{
    return num1+ num2
}

// a function inside object called method

const poorUser ={
    name: 'Tanim Ahmmed',
    balance: 0,
    addBalance(balance: number): string{
        return `my balance is: ${this.balance +balance}`;
    }
}

//map

const arr: number[] = [1,2,3,5]

const newArray: number[] = arr.map((elem:number): number => elem * elem);
}