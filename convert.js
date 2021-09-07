console.log("Dozenal Converter Converting Page!");
function main() {
    var pageElements = document.querySelectorAll("span", "div", "li", "ul", "footer", "h1", "h2", "h3", "h4", "h5", "h6");
    var regex = /\d+/g;
    pageElements.forEach((element) => {
        var text = element.innerText;
        var matches = text.match(regex);
        if(matches != null) {
            matches.forEach((match) => {
                if(parseInt(match) != NaN){
                    var converted = toDozenal(parseInt(match));
                    text = text.replace(match, converted);
                    element.innerText = text;
                }
            });
        }
    });
}
main();
setTimeout(main(), 600);
console.log("Dozenal Converter Done!");

function toDozenal(decimalInt) {
    var res="";
    var R, Q=Math.floor(Math.abs(decimalInt));
    while (true) {
        R = Q % 12;
        res = "0123456789XE".charAt(R)+res;
        Q = (Q-R) / 12;
        if (Q == 0) break;
    }
    return ((decimalInt<0) ? "-"+res : res);
}