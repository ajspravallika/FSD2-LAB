let userName : string="Jahnavi";
let age:number=19;
let ismember:boolean=true;
console.log("Datatyp of username is -->"+typeof userName);
console.log("Datatyp of age is -->"+typeof age);
console.log("Datatyp of ismember is -->"+typeof ismember);
function displayuserprofile(name:String,age:number,active:boolean):void{
    console.log(`User :${name}`);
    console.log(`age :${age}`);
    console.log(`status :${active ? "Active":"InActive"}`);
}
displayuserprofile(userName,age,ismember);
