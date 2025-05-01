//destructuring 
{

    //object destructuring
const mySelf = {
    id: 221902037,
    name :{
        firstName: "Tanim",
        lastName: "Ahmmed",
    },
    constactNo: "01766045464",
    address: "Uganda",
};

const { constactNo, name:{firstName} } = mySelf;

//array destructuring & uses of rest operator 

const myFriends = ["chendlar", "greem", "strom", "rachel", "hank", "publo"]

const [,, sujansFN, ...rest] = myFriends;


}