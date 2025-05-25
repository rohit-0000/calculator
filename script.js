let result=document.getElementById("res");
let buttons=document.querySelectorAll("button");

let str="";
let arr=Array.from(buttons);

//cursor input
arr.forEach(button => {
    button.addEventListener('click',function(e){
        solve(e.target.innerHTML);
    }) 
});

//keyboard input
document.addEventListener('keydown',function(e){
    let key=e.key;
    if((key>='0' && key<='9') || ['+','-','*','/'].includes(key)){
        solve(key);
    }
    else if(key==='Enter' || key=='=')
    {
        solve('=');
    }
    else if(key==='Backspace')
    {
        solve('DE');
    }
    else if(key==='Escape')
    {
        solve('AC');
    }
})

//main function
function solve(val)
{
    if(val=='AC')
        {
            str="";
            result.value=str;
        }
        else if(val=='=')
        {
            try{
            str=eval(str);
            result.value=str;
            }
            catch(e)
            {
                result.value="Error";
            }
        }
        else if(val=='DE')
        {
            str=str.substring(0,str.length-1);
            result.value=str;
        }
        else{
            str+=val;
            result.value=str;
        }
}