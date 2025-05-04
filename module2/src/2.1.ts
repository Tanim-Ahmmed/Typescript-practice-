{
    // type assertion 
    let anything : any;
    anything = "next level web development" ;
    anything =  221 ;
    (anything as number).

     const kgToGm = (value : number | string) : number | string | undefined =>{
         if(typeof(value) == "string"){
          const convertedValue = parseFloat(value)*1000;
          return `The Value is ${convertedValue} `; 
         }
         if(typeof(value) == "number"){
            return value*1000;
         }
          
         const res1 = kgToGm(100) as number;
         const res2 = kgToGm("100") as string




     }

}