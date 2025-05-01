{
   //spread & rest operator  
 
const poorUser = {
    name: 'Tanim'
}


//spread operator

const bros1: string[] = ["mejba", "mizan","mir"]
const bros2: string[] = ["tonmoy","firoz", "nahid"]
 bros1.push(...bros2)

 const mentors1 ={
    typeScript: "mejba",
    redux: 'mir',
    dbms:'mizan'
 }
 const mentors2 ={
    prisma: 'firoz',
    next: 'Tonmoy',
    cloud: 'Nahid',
 }
 const MentorList = {
...mentors1,
...mentors2
 }


//rest operator
 const greetFriends = (...friends: string[] )=>{
 friends.forEach((friend: String)=> console.log (`Hi ${friend}`))
 }


greetFriends("Abul","babul","kabul","mokbul")






}

