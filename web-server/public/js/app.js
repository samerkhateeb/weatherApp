console.log("Hala Hala Hala");

// fetch("http://puzzle.mead.io/puzzle").then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//   });
// });

const form = document.querySelector("form");
const search = document.querySelector("input");
const message1 = document.querySelector("#message1");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;
  message1.textContent = "loading .....";

  fetch(`http://127.0.0.1:3000/weather?address=${location}`).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) console.log(data.error);
        else {
          message1.textContent = data.message;

          //   message1.value(data.current_temp);
          console.log(data);
        }
        // console.log(data);
      });
    }
  );

  console.log("listening ....", location);
});
