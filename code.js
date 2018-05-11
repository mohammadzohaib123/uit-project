function mouseOver(Element)
{
    console.log(Element.nextSibling.nextSibling);
    Element.nextSibling.nextSibling.className="caret";
    var list=["Who are YOO?","Team","What YOO Do?","Services","Projects","Clients"];
    var list2=["Hotels & Resorts","Development"];
    var list3=["News","Press","Awards","Social","YOO Books"];
    var list4=["Contacts","Carrer"];
    console.log(Element.innerText);
    switch(Element.innerText.toLowerCase())
    {
        case "about":
        var arr=list;
        console.log(arr)
        show(arr);
        break;
        case "hotels":
        var arr=list2;
        console.log(arr)
        show(arr);
        break;
        case "media":
        var arr=list3;
        console.log(arr)
        show(arr);
        break;
        case "contact":
        var arr=list4;
        console.log(arr)
        show(arr);
        break;
        default:
        console.log("default")
        break;
    }
    function show(array)
    {
        var div_Element=document.createElement('div');
        var ul_Element=document.createElement('ul');
        div_Element.setAttribute("class","sub_nav")
        ul_Element.setAttribute("class","sub_ul");
        var header=document.getElementById('wrap');
        var div_In=header.appendChild(div_Element);
        var ul_In=div_In.appendChild(ul_Element);
        console.log("in_show")
        for (let index = 0; index < array.length; index++) {    
            var li_Element=document.createElement('li');
            var li_In=ul_In.appendChild(li_Element);
            li_In.innerHTML=array[index];}
    }
}
function mouseOut(Element)
{
    console.log(Element);
    Element.nextSibling.nextSibling.className=" ";
    var elements = document.getElementsByClassName('sub_nav');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}