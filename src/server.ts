import App from "@/app";
import AuthRoute from "@routes/authRoutes";
import UserRoute from "@routes/userRoutes";
import validateEnv from "@utils/validateEnv";

validateEnv();

const app = new App([
  new AuthRoute(),
  new UserRoute()
]);

app.listen();