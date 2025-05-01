{
    //union types

    // type FrontendDeveloper = "Fakibaz" | "JuniorDeveloper"
    // type FullStackDeveloper = FrontendDeveloper | 'ExpertDeveloper'


    // type User = {
    //     name: string;
    //     email?: string;
    //     gender: "male" | "female";
    //     bloodGroup:"O+" | "A+" | "AB+"
    // }

    // const user1: User ={
    //     name: "Tanim",
    //     gender: "male",
    //     bloodGroup: "A+",
    // }

    //intersaction

    type FrontendDeveloper = {
        skills: string[];
        designation1: 'FrontendDeveloper'
    }
    
    type BackendDeveloper = {
        skills: string[];
        designation2: 'Backend Developer'
    }

    type FullStackDeveloper = FrontendDeveloper & BackendDeveloper

    const fullstackDeveloper : FullStackDeveloper = {
        skills : ["HTML", "CSS", "javascript", "Express"],
        designation1: "FrontendDeveloper",
        designation2: "Backend Developer",
    }

}