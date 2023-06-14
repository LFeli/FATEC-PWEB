console.log("1");
t();
console.log("3");

function t() {
  setTimeout(function () {
    console.log("depois do tempo foi... ");
  }, 3000);
}
