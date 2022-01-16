const btn=document.querySelector("#calculate");
btn.addEventListener(`click`,function(e)
{   loop=document.getElementById("loop-input").value;
    bish=document.getElementById("bish-input").value;
    bosh=document.getElementById("bosh-input").value;
    let result = `OUtPUT:  `;
    for (let i = 1; i <= loop; i++) {
      if (i % bish === 0 && i % bosh === 0) 
        result += "Bish-Bosh, ";
       else if (i % bish === 0)
        result += "Bish, ";
       else if (i % bosh === 0) 
        result += "Bosh, ";
       else 
        result += i + ", ";
    }
    document.getElementById("output").innerHTML = result;
} )
