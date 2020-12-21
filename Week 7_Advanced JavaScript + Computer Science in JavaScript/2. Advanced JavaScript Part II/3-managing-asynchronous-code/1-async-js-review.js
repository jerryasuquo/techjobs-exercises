fetch(
  "https://icanhazdadjoke.com/",
  function (data) {
    console.log("Cool, here's some joke data: ", data);
  },
  function (error) {
    console.log("Oops something went wrong!", error);
  }
);

// fetch(
//   "https://icanhazdadjoke.com/search?term=spider",
//   function (data) {
//     console.log("Here's some data on spider jokes: ", data);
//     fetch(
//       "https://icanhazdadjoke.com/search?term=ghost",
//       function (data) {
//         console.log("Here's some data on ghost jokes: ", data);
//         fetch(
//           "https://icanhazdadjoke.com/search?term=pizza",
//           function (data) {
//             console.log("Here's some data on pizza jokes: ", data);
//           },
//           function (error) {
//             console.log("Oops something went wrong!", error);
//           }
//         );
//       },
//       function (error) {
//         console.log("Oops something went wrong!", error);
//       }
//     );
//   },
//   function (error) {
//     console.log("Oops something went wrong!", error);
//   }
// );
