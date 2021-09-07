console.log("Dozenal Converter Converting Page!");
function main() {
    var pageElements = document.querySelectorAll("span", "div", "li", "ul", "footer", "h1", "h2", "h3", "h4", "h5", "h6");
    // var bodyText = body.in;
    // console.log(document);
    var regex = /\d+/g;
    pageElements.forEach((element) => {
        var text = element.innerText;
        var matches = text.match(regex);
        if(matches != null) {
            matches.forEach((match) => {
                // matchIndexes.push(text.indexOf(match));
                if(parseInt(match) != NaN){
                    var converted = toDozenal(parseInt(match));
                    
                    console.log(text = text.replace(match, converted));
                }
                element.replaceChild(document.createTextNode(text), element);
            });
        }
        console.log(text);     
    });
}
main();
setTimeout(main(), 600);

function toDozenal(decimalInt) {
    var res="";
    var R, Q=Math.floor(Math.abs(decimalInt));
    while (true) {
        R = Q % 12;
        //res = "0123456789𝑥ε".charAt(R)+res;
        res = "0123456789XE".charAt(R)+res;
        Q = (Q-R) / 12;
        if (Q == 0) break;
    }
    return ((decimalInt<0) ? "-"+res : res);
}