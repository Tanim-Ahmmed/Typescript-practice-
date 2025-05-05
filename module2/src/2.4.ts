{
    //generic type with interface 

    interface Developer<T, X = null> {
        name: string;
        computer:{
            brand : string;
            model : string;
            releaseYear: number;
        };
        smartWatch: T;
        bike?: X;
    }

    type EmilabWatch = {
        brand : string;
        model: string;
        display: string;
 
     }

    const poorDeveloper : Developer<EmilabWatch> = {
        name: "Tanim",
         computer : {
          brand : "Asus",
          model:" X-255UR",
          releaseYear: 2013,
        },
        smartWatch : {
               brand : "Emilab",
               model : "kw66",
               display: "OLED",
        }
   }

   interface AppleWatch {
        brand : string;
        model: string;
        heartTrack: boolean;
        sleepTrack: boolean;
     
   }
   interface Yamaha {
    model : string;
    engineCapacity: string;
   }

   const richDeveloper : Developer<AppleWatch, Yamaha> = {
     name: "sakil",
      computer : {
       brand : "Hp",
       model:" X-255UR",
       releaseYear: 2018,
     },
     smartWatch : {
            brand : "Apple watch",
            model : "Something",
            heartTrack: true,
            sleepTrack: true, 
     },
     bike: {
        model : "Yamaha",
        engineCapacity: "400cc"
     }
}





}