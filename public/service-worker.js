self.addEventListener("install", function (event) {
    // Perform some task
    console.log("installed");
  });
  self.addEventListener("activate", function (event) {
    // Perform some task
    console.log("activated");
  });
  