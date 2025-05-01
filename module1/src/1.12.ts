{
    //nullable types 
    const searchName = ( value: string | null) =>{
        if(value){
            console.log("Searching");

        }else {
            console.log("There is nothing to search");
        }
    }
    searchName(null);



// unknown type

const getSpeeedInMeterPerSecond = (Value : unknown) =>{
    if(typeof Value === "number"){
        const convertedSpeed = (Value *1000)/ 3600;
        console.log(`The Speed is ${convertedSpeed} ms^-1`)
    }
    else if(typeof Value === "string"){
        const [res, unit] = Value.split(" ");
        const convertedSpeed = (parseFloat(res)* 1000)/3600;
        console.log(`The Speed is ${convertedSpeed} ms^-1`);
    } else {
        console.log("Wrong input");
    }
}

getSpeeedInMeterPerSecond("11 ms");


// never type 
const throwError = (msg: string): never =>{
    throw new Error(msg);
}

// throwError("mainee tooooo error hogaya")

}