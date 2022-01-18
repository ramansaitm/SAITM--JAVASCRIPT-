// console.log("hi rman done")
// function Circle(radius)
// {
//     this.radius=radius;
//     this.draw=function()
//     {
//         console.log("Hi there")
//     };
// }
// const circle= new Circle(10);
// for(key in circle)
// {
//     if(typeof circle[key]!== 'function')
//     {
//     console.log(key,circle[key]);
//     }
// }

//ABSTRACTION IT HIDE ESSESTIONAL INFORMATION AND SHOW USER USEFUL INFORMATION LIKE DVD JUST 
//PLAY USING BOTTON BUT YOU DO NOT KNOW HOW INSIDE THE PROCESS IS GOING ON
console.log("raman")
function Raman(radius)
{
    let ramanvalue=function()
    {
        console.log("Hey! I am there")
    }
    this.radius=radius;
    this.draw=function()
    {
     console.log("Raman Kumar")   
    };
};
// console.log(Raman)
delete Raman.radius;
const raman =new Raman(4);