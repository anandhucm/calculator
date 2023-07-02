function entry(val){
document.getElementById("screen").value=document.getElementById("screen").value+val
}
function clean(){
    document.getElementById("screen").value=""
}
function res(){
    var result=document.getElementById("screen").value
var final=eval(result)
document.getElementById("screen").value=final
}