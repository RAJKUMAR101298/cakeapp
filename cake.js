 i=1
 function fun1()
{
    var kg=document.getElementById("kg").value;
    console.log(kg)


    var qnty=document.getElementById("qnty").value;
    console.log(qnty)
    
    var price=document.getElementById("price").value;
    console.log(price)

    var totalprice=document.getElementById("totalprice");
    totalprice.value=(Number(kg)*Number(qnty)*Number(price))
}
