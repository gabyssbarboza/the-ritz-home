

    var links = [
        {
            "name":  "home",
            "href": "https://gabyssbarboza.github.io/the-ritz-home/"
        },
        {
            "name":  "sobre",
            "href": "https://gabyssbarboza.github.io/the-ritz-sobre/"
        },
        {
            "name":  "trabalhe conosco",
            "href": "https://gabyssbarboza.github.io/the-ritz-home/trabalhe-conosco/index.html"
        },
        {
            "name":  "nossas atrações",
            "href": "https://gabyssbarboza.github.io/the-ritz-home/atracoes/index.html"  
        },
        {
            "name":  "localização",
            "href": "https://gabyssbarboza.github.io/the-ritz/localizacao/index.html"  
        }
    ];



 function montarLinks(items){

        var listLinks = document.querySelector(".container-top-menu");
        for(let i = 0; i < items.length; i++){
            var li = document.createElement("li");
            var link = document.createElement("a");
            link.href =  items[i].href;
            link.innerText = items[i].name;
            li.appendChild(link);
            li.classList = "container-top-menu--link"
            listLinks.appendChild(li);

        }
    }


montarLinks(links);
