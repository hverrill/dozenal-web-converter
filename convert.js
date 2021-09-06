console.log("HEY");
function main() {
    var body = document.querySelectorAll("body")[0];
    var bodyText = body.innerText;
    console.log(bodyText);
    var regex = /\d+/g;

    var matches = bodyText.match(regex);  // creates array from matches
    matches.forEach((match) => {
        console.log("MATCH:", match);
        console.log("CONVERSION:", parseInt(match, 12));
        console.log("CONVERTED:", match);
    });

    // all.forEach((element) => {
        
    // })

}
main();
setTimeout(main(), 600);


// // background.js

// let color = '#3aa757';


// chrome.runtime.onInstalled.addListener(() => {
//     chrome.storage.sync.set({ color });
//     console.log('Default background color set to %cgreen', `color: ${color}`);

//     var all = document.querySelectorAll();
//     for (var i=0, max=all.length; i < max; i++) {
//         var textElement = all[i].innerText;
//         //
//         // /[\d|,|.|e|E|\+]+
//         var regex = /\d+/g;

//         var matches = textElement.match(regex);  // creates array from matches
//         matches.forEach((match) => {
//             console.log(match);
//             match = parseInt(parseInt(match), 12).toString;
//             console.log(match);
//         });

//         document.write(matches); //5,123.6
//         textElement.
//         console.log(all[i].innerHTML);
//     }
// });