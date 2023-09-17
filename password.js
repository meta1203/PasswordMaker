function generatePassword(key, site) {
  var hashObj = new jsSHA(key+site+key, "TEXT");
  return hashObj.getHash("SHA-256", "B64");
}

function domEdit() {
  var key = document.getElementById("key").value;
  var site = document.getElementById("site").value.toLowerCase();
  var ret = generatePassword(key, site).substring(0, 16);
  // ensure there is at least one special character in the
  // generated password for improved site compatibility
  if (!ret.includes("+") && !ret.includes("!"))
    ret += "!";

  document.getElementById("output").value = ret;
  document.getElementById("output").select();
}
