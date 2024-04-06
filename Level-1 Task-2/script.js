function add(value){
    document.getElementById("screen").value += value;
}
function result(){
    let answer= eval(document.getElementById("screen").value)
    document.getElementById("screen").value=answer;
}
function clear_scr()
{
    document.getElementById("screen").value='';
}