function generatePassword(key, site) {
  var hashObj = new jsSHA(key+site+key, "TEXT");
  return hashObj.getHash("SHA-256", "B64");
}

function domEdit() {
  var key = document.getElementById("key").value;
  var site = document.getElementById("site").value;
  var ret = generatePassword(key, site);
  document.getElementById("output").value = ret.substring(0, 16);
}
