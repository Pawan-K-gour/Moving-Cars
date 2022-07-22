var x;
var m=0;
function start()
{
        x=setInterval(Anim,50);
    function Anim()
    {
        console.log(m);
        if(m==1200)
        {
            clearInterval(x);
            m=0;
        }
        else{
            m=m+5;
            document.getElementById("im").style.visibility="visible";
            var target=document.getElementById("im");
            target.style.marginLeft=m+'px';
        }
        
    }
}

function stop()
{
    clearInterval(x)
}

