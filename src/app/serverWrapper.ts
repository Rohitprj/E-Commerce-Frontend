// import axios from "axios";
// import { ReactNode } from "react";
// import { BASE_URL } from "../../utils/axiosInstance";
// import { redirect } from "next/navigation";

// export default async function ServerWrapper({
//   children,
// }: {
//   children: ReactNode;
// }) {
//   (async function () {
//     try {
//       const { data } = await axios.get(`${BASE_URL}/auth/is_loggedin`, {
//         withCredentials: true,
//       });
//       const userData = await data;
//       console.log({ userData });
//       if (userData.is_loggedin) {
//         redirect("/somewhare_else");
//       }
//     } catch (error) {
//       console.log({ error });
//     }
//   })();
//   console.log("THIS IS SERVER CODE!");
//   return children;
// }
