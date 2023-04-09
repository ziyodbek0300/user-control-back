export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  role: "admin" | "user" | "head" | "other";
}