var data = fetch("https://restcountries.com/v3.1/all")
data.then((res) => res.json())
    .then((res1) => foo(res1));


var container = document.createElement("div");
container.className = "container";

var row = document.createElement("div");
row.className = "row";


function foo(res1) {
    for (var i = 0; i < res1.length; i++) {
        var col = document.createElement("div");
        col.className = "col-md-4 mt-3";
        col.innerHTML = `<div class="card card border-dark" style="width: 18rem;">
        <div class="card-header bg-dark text-white text-center">
        ${res1[i].name.common}
       </div>
        <img src=" ${res1[i].flags.svg}" class="rounded mx-auto d-block img-fluid img-thumbnail" style="height: 160px; width: 200px;" alt="flag image">
        <div class="card-body">
          <p class="card-text text-center">
            Capital:${res1[i].capital}<br>
            Region:${res1[i].region}


          </p>
        
        </div>
      </div>`

        row.append(col);
        container.append(row);
        document.body.append(container);

    }
}