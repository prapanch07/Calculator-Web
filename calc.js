function numdis(val){
    document.getElementById("screen").value+=val
}
function clearval(){
    document.getElementById("screen").value=""
}
function equalTo(){
    var res = document.getElementById("screen").value
    var result = eval(res)
    document.getElementById("screen").value=result
}