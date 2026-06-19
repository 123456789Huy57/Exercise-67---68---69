var tag_employees=[]
function load_employee_fromxml(dataset_path,drptitle,bodyemployee)
{
    var xhr = new XMLHttpRequest();
    xhr.open("GET",dataset_path,true);
    xhr.send();
    xhr.onreadystatechange=function()
    {
        if (xhr.readyState==4 && xhr.status==200)
        {
            var xmlDoc =xhr.responseXML;
            tag_employees=xmlDoc.getElementsByTagName("employee")
            var titles=[]
            for(i=0;i<tag_employees.length;i++)
            {
                var title=tag_employees[i].getAttribute("title")
                if(titles.indexOf(title)==-1)
                {
                    titles.push(title)
                }
            }
            for(i=0;i<titles.length;i++)
            {
                var option=document.createElement("option")
                option.value=titles[i]
                option.innerHTML=titles[i]
                drptitle.appendChild(option)
            }
        }
    }
}
function display_employee_bytitle(drptitle,bodyemployee)
{
    bodyemployee.innerHTML=""
    var selected_title=drptitle.value
    for(i=0;i<tag_employees.length;i++)
    {
        var title=tag_employees[i].getAttribute("title")
        if(title==selected_title)
        {
            var employee_id=tag_employees[i].getAttribute("id")
            var employee_name=tag_employees[i].getElementsByTagName("name")[0].childNodes[0].nodeValue
            var employee_phone=tag_employees[i].getElementsByTagName("phone")[0].childNodes[0].nodeValue
            tr=document.createElement("tr")
            td_id=document.createElement("td")
            td_id.innerHTML=employee_id
            td_name=document.createElement("td")
            td_name.innerHTML=employee_name
            td_phone=document.createElement("td")
            td_phone.innerHTML=employee_phone
            tr.appendChild(td_id);
            tr.appendChild(td_name);
            tr.appendChild(td_phone);
            bodyemployee.appendChild(tr);
        }
    }
}
