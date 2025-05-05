{
    //generic type 
type GenericArray<T> = Array<T>
    const rollNumbers : GenericArray<number> = [3,4,5];

    const mentors : GenericArray<string> =["Mr", "x", "y", "z"]

    const isPass : GenericArray<boolean> = [true, false]


    const user:  GenericArray<{name: string, age: number}> =[{
        name: "Tanim",
        age  : 23,
    },
    {
      name: "Robi",
      age: 13,
    }
]

// generic tuple 

type GenericTuple<x,y> = [ x , y]

const manush : GenericTuple<string, string> = ["x", "y"]

const userWithId : GenericTuple<number, {name: string, email: string}> = [111, {name: "Tanim" , email: "tanim@gmail.com"}]



}