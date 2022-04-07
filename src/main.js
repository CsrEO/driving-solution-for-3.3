import input from "input";

const myAge = 32;
const drivingUsAge = 18;

const driverAge = await input.text("what is your age");
const hasLicense = await input.confirm("do you have a license?");

if(hasLicense && myAge >= driverAge){
    console.log("you can drive now")
} else{
    console.log("you can not drive go get your license first");
}







