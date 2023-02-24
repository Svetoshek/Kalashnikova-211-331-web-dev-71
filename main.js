let URL = "http://tasks-api.std-900.ist.mospolytech.ru/api/tasks";
let key = "api_key=50d2199a-42dc-447d-81ed-d68a443b697e";
let requestURL = URL + "?" + key;

function sendReqestGet(method, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);

    xhr.responseType = "json";
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };
    xhr.onerror = () => {
      reject(xhr.response);
    };
    xhr.send();
  });
}

if (search - field != false)
  sendReqestGet("GET", requestURL)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

//request GET

//-------------------------------------------
//-------------------------------------------
//-------------------------------------------
//-------------------------------------------
//-------------------------------------------
//-------------------------------------------
//-------------------------------------------
//-------------------------------------------

//request POST
formElem.onsubmit = async (element) => {
  element.preventDefault();

  let response = await fetch(requestURL, {
    method: "POST",
    body: new FormData(formElem),
  });

  let result = await response.json();

  alert("Success");
};

// active form
let = activeBg = document.querySelector(".action_bg");
let actionForm = document.querySelector(".action_form");
let openActionFormButtons = document.querySelectorAll(".open_active");
openActionFormButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    activeBg.classList.add("active");
    actionForm.classList.add("active");
  });
});

document.addEventListener("click", (event) => {
  if (event.target === activeBg) {
    activeBg.classList.remove("active");
    actionForm.classList.remove("active");
  }
});
