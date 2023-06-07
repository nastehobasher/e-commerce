export const base_url = "http://localhost:50356/api/";

const getTokenFromLocalStorage = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : null;

console.log("kkk", getTokenFromLocalStorage);

export const config = {
    headers: {
        Authorization: `Bearer ${getTokenFromLocalStorage !== null
            ? getTokenFromLocalStorage
            : ""}`,
        Accept: "application/json",
    },
};

// const getTokenFromLocalStorage = localStorage.getItem("customer")
//     ? JSON.parse(localStorage.getItem("customer"))
//     : null;
// console.log("kkk", localStorage);

// export const config = {
//     headers: {
//         Authorization: `Bearer ${getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
//             }`,
//         Accept: "application/json",
//     },
// };

