

    var links = [
        {
            "name":  "home",
            "href": "choose-side"
        },
        {
            "name":  "sobre",
            "href": "personagens"
        },
        {
            "name":  "trabalhe conosco",
            "href": "planetas"
        },
        {
            "name":  "nossas atrações",
            "href": "planetas"  
        }
    ];



 function montarLinks(items){

        var listLinks = document.querySelector(".container-top-menu");
        for(let i = 0; i < items.length; i++){
            var li = document.createElement("li");
            var link = document.createElement("a");
            link.href = "#" + items[i].href;
            link.innerText = items[i].name;
            li.appendChild(link);
            li.classList = "container-top-menu--link"
            listLinks.appendChild(li);

        }
    }


montarLinks(links);
