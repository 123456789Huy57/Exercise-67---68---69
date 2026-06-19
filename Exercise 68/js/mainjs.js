function load_cd_collection(dataset_path,bodycd)
{
    bodycd.innerHTML=""
    var xhr = new XMLHttpRequest();
    xhr.open("GET",dataset_path,true);
    xhr.send();
    xhr.onreadystatechange=function()
    {
        if (xhr.readyState==4 && xhr.status==200)
        {
            var xmlDoc =xhr.responseXML;
            tag_cds=xmlDoc.getElementsByTagName("CD")
            for(i=0;i<tag_cds.length;i++)
            {
            value_tag_artist=tag_cds[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue
            value_tag_title=tag_cds[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue
            tr=document.createElement("tr")
            td_artist=document.createElement("td")
            td_artist.innerHTML=value_tag_artist
            td_title=document.createElement("td")
            td_title.innerHTML=value_tag_title
            tr.appendChild(td_artist);
            tr.appendChild(td_title);
            bodycd.appendChild(tr);
            }
        }
    }
}
