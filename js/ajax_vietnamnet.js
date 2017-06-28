/**
 * Created by huy on 6/28/17.
 */
function readyAjax(){
    try{
        return new XMLHttpRequest();
    }
    catch(e){
        return new ActiveXObject("Msxm12.XMLHTTP");
    }
}
var requestObj = readyAjax();
var url = "	http://vietnamnet.vn/rss/home.rss";
requestObj.open("GET",url,true);
requestObj.send();
requestObj.onreadystatechange =function () {
    if(requestObj.readyState == 4){
        var xmlDocument = requestObj.responseXML;
        displayData(xmlDocument);

    }
}

function displayData(xmlDocument){
    var news = xmlDocument.getElementsByTagName("item");
    for(i =0 ;i<news.length;i++){
        var listNew = document.createElement("div");
        var titte = news[i].childNodes[0].firstChild.nodeValue;
        listNew.appendChild(document.createElement("p").appendChild(document.createTextNode(titte)));
        document.body.appendChild(listNew);
    }
}