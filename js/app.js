if (!window.indexedDB) {
  console.log("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
}

document.getElementById('name').oninput = function () {
  var sessionName = this.value;
  console.log(sessionName)
}




var db;
// Let us open our database
var request = window.indexedDB.open("POP Ghana");
request.onerror = function(event) {
  // Do something with request.errorCode!
  console.log("Why didn't you allow my web app to use IndexedDB?!");
};
request.onsuccess = function(event) {
  // Do something with request.result!
  db = event.target.result;
  db.onerror = function(event) {
    // Generic error handler for all errors targeted at this database's
    // requests!
    console.error("Database error: " + event.target.errorCode);
  };
};


// This event is only implemented in recent browsers   
request.onupgradeneeded = function(event) { 
  // Save the IDBDatabase interface 
  var db = event.target.result;

  // Create an objectStore for this database
  var sessionStore = db.createObjectStore("sessions", { keyPath: "id" }, {autoIncrement: "true"});
  var pharmacyStore = db.createObjectStore("pharmacies", {keyPath: "id"},{autoIncrement: "true"});
};
