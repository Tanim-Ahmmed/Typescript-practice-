{
    //function  with generics 
    const createArray = (parram: string) : string[] =>{
        return [parram]
    }

    const createArrayWithGeneric = <T>(parram: T) : T[] => {
        return [parram];
    };

    const res1 = createArray('Bangladesh');
    const res2 = createArrayWithGeneric<string>("Bangladesh");
    interface User{
        id: number;
        name: string;
    }
    const res3 = createArrayWithGeneric <User>({id:221902037, name:"Tanim"})




    // tuple

    const createArrayWithTuple = <T, Q>(param1:T, param2: Q) : [T, Q] =>{

        return [param1, param2];
    }


    const res4 = createArrayWithTuple<string, number>("Bangladesh", 221);
    const res5 = createArrayWithTuple<string, {nameOfCity: string}> ("Bangladesh", {nameOfCity: "Dhaka"})



    const addCourseToStudent =<T>(student: T) =>{
        const course = 'Next Level Web Development'
        return {...student, course}
    }

    const student1 = addCourseToStudent({name:"Tanim Ahmmed", email:"tanim@gmail.com", devType:'NLWD'})
    const student2 = addCourseToStudent({name:"Rakib mia", email:"rakib@gmail.com", softType:'SWE'})
    



}