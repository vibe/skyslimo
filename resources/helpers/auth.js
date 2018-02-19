// import cookie from "node-cookie";
// import axios from "axios";
//
// export const getUserFromToken = () => {
//   console.log("Get User: From localstorage");
//   const token = localStorage.getItem("token");
//
//   if (!token) {
//     return {
//       valid: false
//     };
//   }
//
//   return axios
//     .get("http://localhost:3333/api/account", {
//       headers: {
//         authorization: `Bearer ${token}`
//       }
//     })
//     .then(response => response.data)
//     .catch(response => response.data);
//
//   };
//
//
// export const getUserFromCookie = request => {
//   console.log("Get User: From cookie");
//   let cookies = {};
//
//   try {
//     cookies = cookie.parse(request, 'iEfXdNqYqpp1hGWGhrxy1aZP4c4gVMC2', true);
//   } catch (e) {
//     console.log("Error: no cookie");
//   }
//
//   if (!cookies.authorization) {
//     return {
//       valid: false
//     };
//   }
//
//   return axios
//     .get("http://localhost:3333/api/account", {
//       headers: {
//         authorization: cookies.authorization
//       }
//     })
//     .then(response => response.data)
//     .catch(response => response.data);
// };
