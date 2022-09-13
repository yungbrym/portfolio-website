

    var sidemeu = document.getElementById("sidemenu");

    function openmenu(){
        sidemeu.style.right = "0";
    }
    function closemenu(){
        sidemeu.style.right = "-200px";
    }



    const scriptURL =
    "https://script.google.com/macros/s/AKfycbxJjjhEMKyq6IRrrX_gc-9ElUlU1tP9ND_AgWQuRIazOQDcBdyMje8YP6deL5quGkZE/exec"
    const form = document.forms["submit-to-google-sheet"];

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => console.log("Success!", response))
        .catch((error) => console.error("Error!", error.message));
    });
  
