{

    // utility types 

    type Person ={
        name: string;
        age : string;
        contactNo: string;
        email?: string;
    }

    

    //pick

   type PersonPick = Pick<Person, "name" | "age">

   //Omit

   type PersonOmit = Omit<Person, "name"| "age">

   //Required

   type PersonRequired = Required<Person>

   //partial 

   type PersonPartial = Partial<Person>

   //readonly

   type PersonReadOnly = Readonly<Person>


   // Record 

   const EmptyObj : Record<string, unknown> ={}



}