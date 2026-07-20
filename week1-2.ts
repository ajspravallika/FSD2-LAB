 //specail types-any ,unknown,void 
 let value:any="hello";
 value=10;
 value=true;
                                                   

 let notknown:unknown="unknown";
 if(typeof(notknown) == "string"){
    console.log(`length: ${notknown.length}`);
 }

 function notify(message: string):void{
    console.log(`Alert : ${message}`);
 }