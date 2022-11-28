function removeInitial() {
    let element = document.getElementById("choice-text");
    element.remove();

    element = document.getElementById("choice-f");
    element.remove();

    element = document.createElement("ul");
}
function f1() {
    removeInitial();
    let element = document.createElement("ul");
    let li1 = document.createElement("li");
    li1.innerHTML = "Please type the name of city:";
    element.appendChild(li1);
    let container = document.getElementById("container");
    container.appendChild(element);
    element = document.createElement("ul");
    li1 = document.createElement("li");
    let inp1 = document.createElement("input");
    inp1.setAttribute("type","text");
    inp1.setAttribute("id","city-name");
    li1.appendChild(inp1);
    element.appendChild(li1);
    container.append(element);
    
    let ul3 = document.createElement("ul");
    let li = document.createElement("li");
    let btn = document.createElement("button");
    btn.setAttribute("onclick","getDataUsingCity()");
    btn.innerHTML = "Submit";
    li.appendChild(btn);
    ul3.appendChild(li);
    container.appendChild(ul3);
}

function f2() {
    removeInitial();
    let ul1 = document.createElement("ul");
    let li1 = document.createElement("li");
    li1.innerHTML = "Please enter latitude and longitude:";
    ul1.appendChild(li1);
    let container = document.getElementById("container");
    container.appendChild(ul1);

    let ul2 = document.createElement("ul");
    let li2 = document.createElement("li");
    let inp2 = document.createElement("input");
    inp2.setAttribute("type","text");
    inp2.setAttribute("id","lat");
    li2.appendChild(inp2);
    ul2.appendChild(li2);
    container.appendChild(ul2);
    ul2 = document.createElement("ul");
    li2 = document.createElement("li");
    inp2 = document.createElement("input");
    inp2.setAttribute("type","text");
    inp2.setAttribute("id","lon");
    li2.appendChild(inp2);
    ul2.appendChild(li2);
    container.appendChild(ul2);

    let ul3 = document.createElement("ul");
    let li = document.createElement("li");
    let btn = document.createElement("button");
    btn.setAttribute("onclick","getDataUsingMeasures()");
    btn.innerHTML = "Submit";
    li.appendChild(btn);
    ul3.appendChild(li);
    container.appendChild(ul3);
}

function f3() {
    removeInitial();
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getGeoLocation);
      } else {
        alert("Check access settings");
    }
}

function getDataUsingCity() {
    let cityName = document.getElementById("city-name").value;
}

function getDataUsingMeasures() {
    let latitude = document.getElementById("lat").value;
    let longitude = document.getElementById("lon").value;
    console.log(latitude+" "+longitude);
}

function getGeoLocation(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    console.log(latitude+" "+longitude);
  }