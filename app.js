let type = "px";

function changetype(x) {
    type = x;
    document.getElementById("box").style.removeProperty('borderTopRightRadius', 'borderTopRightRadius', 'borderBottomLeftRadius', 'borderBottomRightRadius');
    return type;
}

document.getElementById("tl").oninput = function() {
    let tl = document.getElementById("tl");
    let tlraduis = document.getElementById("box");
    tlraduis.style.borderTopLeftRadius = tl.value + type;
    return tlraduis;

}
document.getElementById("tr").oninput = function() {
    let tr = document.getElementById("tr");
    let trraduis = document.getElementById("box");
    trraduis.style.borderTopRightRadius = tr.value + type;
    return trraduis;
}
document.getElementById("bl").oninput = function() {
    let bl = document.getElementById("bl");
    let blraduis = document.getElementById("box");
    blraduis.style.borderBottomLeftRadius = bl.value + type;
    return blraduis;
}
document.getElementById("br").oninput = function() {
    let br = document.getElementById("br");
    let brraduis = document.getElementById("box");
    brraduis.style.borderBottomRightRadius = br.value + type;
    return brraduis;

}

function copycss() {
    document.getElementById("cssbox").innerHTML = '';
    let a = document.createElement("p");
    a.append("border-top-left-radius: " + document.getElementById("box").style.borderTopLeftRadius);
    console.log(a);
    let b = document.createElement("p");
    b.append("border-top-right-radius: " + document.getElementById("box").style.borderTopRightRadius);
    console.log(b);
    let c = document.createElement("p");
    c.append("border-bottom-left-radius: " + document.getElementById("box").style.borderBottomLeftRadius);
    console.log(c);
    let d = document.createElement("p");
    d.append("border-bottom-right-radius: " + document.getElementById("box").style.borderBottomRightRadius);
    console.log(d);
    document.getElementById("cssbox").appendChild(a);
    document.getElementById("cssbox").appendChild(b);
    document.getElementById("cssbox").appendChild(c);
    document.getElementById("cssbox").appendChild(d);


}