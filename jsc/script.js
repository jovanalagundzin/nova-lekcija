//callback funct
let da = function () {
  console.log("uspeo si");
};
let ne = function () {
  console.log("nisi uspeo");
};

let provera = function (yes, no, broj) {
  if (broj % 2 == 0) {
    yes();
  } else {
    no();
  }
};
provera(da, ne, 11);

//arow function
setTimeout(() => console.log("prosao dve sedkunde"), 2000);

provera(
  () => console.log("uspeo si"),
  () => console.log("nisi uspeo"),
  12
);
arr = ["petar", "marko"];
let ispis = "";
let addListItem = () => {
  setTimeout(() => {
    for (let key of arr) {
      ispis += "<li>" + key + "</li>";
    }
    document.body.innerHTML = ispis;
  }, 2000);
};

let anotherItem = () => {
  setTimeout(() => {
    ispis += "<li>" + "nikola" + "</li>";
  }, 3000);
};
anotherItem();
addListItem();

let anotherItem = () => {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      ispis += "<li>" + "nikola" + "</li>";
    }, 3000);
  });
};
anotherItem().then(addListItem);

let cekaj = (resolve, reject) => {
  setTimeout(() => {
    ispis += "<li>" + "nikola" + "</li>";
    resolve();
  }, 3000);
};
let addItempromise = new Promise(cekaj);
addItempromise.then(anotherItem);

let cekaj = (resolve, reject) => {
  setTimeout(() => {
    ispis += "<li>" + "nikola" + "</li>";
    let error = true;
    if ((error = false)) resolve();
    else reject("desilo se nesto lose");
  }, 3000);
};
let addItempromise = new Promise(cekaj);
addItempromise.then(addListItem).catch((err) => console.log(err));
