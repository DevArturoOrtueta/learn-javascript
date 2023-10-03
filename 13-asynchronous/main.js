const log = document.querySelector(".event-log");

document.querySelector("#xhr").addEventListener("click", () => {
  log.textContent = "";

  const xhr = new XMLHttpRequest();

  xhr.addEventListener("loadend", () => {
    log.textContent = `${log.textContent}Finished with status: ${xhr.status}`;
  });

  xhr.open(
    "GET",
    "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",
  );
  xhr.send();
  log.textContent = `${log.textContent}Started XHR request\n`;
});

document.querySelector("#reload").addEventListener("click", () => {
  log.textContent = "";
  document.location.reload();
});

// Callbacks

function modify(array, callback){
    array.push('Arturo');
    setTimeout(
        callback(array)
        ,3000
    )
}

const names = ['Pedro', 'Manuel', 'Juan']

modify(names, function (array) {
    console.log(`He modificado el array y ahora es de ${array.length} elementos!`)
})