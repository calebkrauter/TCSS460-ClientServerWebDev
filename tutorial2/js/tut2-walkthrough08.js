/* code goes here */

function init() {
    document.getElementById("sampleForm").addEventListener("submit", checkForEmptyFields);
}

window.addEventListener("load", init);
function checkForEmptyFields(e) {
    var errorArea = document.getElementById("errors");
    errorArea.className = "hidden";
    var cssSelector = "input[type=text],input[type=password]";
    var fields = document.querySelectorAll(cssSelector);

    var fieldList = [];
    for (i = 0; i < fields.length; i++) {
        if (fields[i].value == null || fields[i].value == "") {
            e.preventDefault();
            fieldList.push(fields[i]);
        }
    }
    var msg = "The following fields can't be empty: ";
    if (fieldList.length > 0) {
        for (i = 0; i < fieldList.length; i++) {
            msg += fieldList[i].id + ", ";
        }

        alert(msg);
        errorArea.innerHTML = "<p>" + msg + "</p>";
        errorArea.className = "visible";
    }
}
