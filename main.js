function disp_details(pDetails) {
    console.log("ID:", pDetails.id);
    window.document.body.innerHTML += "<dt>Id:</dt> <dd>" + pDetails.id + "</dd>";
    console.log("Name", pDetails.name);
    window.document.body.innerHTML += "<dt>Id:</dt> <dd>" + pDetails.name + "</dd>";
    if (pDetails.mailId != undefined)
        console.log("Email Id", pDetails.mailId);
    window.document.body.innerHTML += "<dt>Id:</dt> <dd>" + pDetails.mailId + "</dd>";
    console.log("PhoneNo:", pDetails.phoneNo);
    window.document.body.innerHTML += "<dt>Id:</dt> <dd>" + pDetails.phoneNo + "</dd>";
}
var person1 = { id: 1, name: "Rathi", phoneNo: 5879840125 };
var person2 = { id: 2, name: "Ram", mailId: "ram378krish@gmail.com", phoneNo: 5879820278 };
disp_details(person1);
disp_details(person2);
