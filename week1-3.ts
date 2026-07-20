//program with annotations 
let book:string="Women";
let publishyear:number=2024;
let isgood:boolean=true;

function getbookreview(name:string,year:number,isgood:boolean):string{
    return `${name} is published in the year ${year} and it is ${isgood?"good":"bad"}`;
}
 let jonor:string[]=["love","respect"];
 const summary:string=getbookreview(book,publishyear,isgood);
 console.log(summary);
 console.log("Hello");