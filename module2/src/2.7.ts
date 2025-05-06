{
    //generic constraint with keyof operator
    
    
    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }


    type Owner2 = keyof Vehicle

    const getPropertyValue = < X, Y extends keyof X>(obj: X, key:Y) =>{
        return obj[key];
    }

    const car ={
        model: "Toyota 100",
        year:"2006"
    }

    const result1 = getPropertyValue(car, "year");


















}