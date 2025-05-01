{
    // ternary operator || nullish coalescing oparator

    const age: number = 23;

    if(age >= 18){
        console.log('adult')
    } else{
        console.log("chiled")
    }
  // ternary oparator
    const isAdult = age>= 18? "Adult" : "Not Adult";
    console.log({isAdult});


   // nullish coalescing operator

   const isAuthenticated = null;

   const result1 = isAuthenticated ?? "Guest";
   console.log({result1});


   const user : {
     name: string;
     address :{
      presentAddress: string;
      permanentAddress?: string;
     } 
   } ={
     name: "Tanim",
     address: {
        presentAddress: "NSD",
     },
   }

   const permanentAddress = user?.address?.permanentAddress ?? "NO Address"
   
   console.log({permanentAddress});

}