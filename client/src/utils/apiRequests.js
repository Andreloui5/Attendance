import API from "./API";
// export function findEventByKeyword(value) {
//   // set Timeout so that the API doesn't fire until a break in typing
//   setTimeout(() => {
//     //makes an api call to find events by keyword
//     API.findByKeyword(value).then(res => {
//       setSearchResults(res.data);
//     }, 400);
//   });
// }
export function findPersonByName(value) {
  let searchText = value.trim().split(" ");
  let first = searchText[0];
  let last = searchText[1];
  // set Timeout so that the API doesn't fire until a break in typing
  setTimeout(() => {
    //makes an api call to find events by keyword
    API.findPersonByName(first, last).then(res => {
      console.log(res.data);
    }, 400);
  });
}
export function findEventByName(value) {
  // set Timeout so that the API doesn't fire until a break in typing
  setTimeout(() => {
    //makes an api call to find events by name
    API.findByName(value).then(res => {
      console.log(res.data);
    }, 400);
  });
}
