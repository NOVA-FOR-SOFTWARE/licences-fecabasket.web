import { OpenAPI } from "@/services/api";

// import type { ApiResponse } from '@core/Errors'
// import { User } from '@services/user/entities/User.entity'

export const setApiBaseUrl = () => {
  OpenAPI.BASE = import.meta.env.VITE_API_URL;
};


// export const asyncWrapper = async <T>(request): Promise<T> => {
//   request
//     .then<ApiResponse<User[]>>((users) => {
//       const userEntities = users.map(
//         (user) =>
//           new User(
//             {
//               email: user.email,
//               lastname: user.lastName,
//               firstname: user.firstname,
//               status: user.status,
//               roles: user.roles,
//             },
//             user.id,
//           ),
//       );
//       this.users = userEntities;
//       return {
//         status: "success",
//         data: userEntities,
//       };
//     })
//     .catch((error) => {
//       console.error(error);
//       return {
//         status: "error",
//         message: (error as Error).message,
//       };
//     })
// }
