import App from "@/app";
import AuthRoute from "@routes/authRoutes";
import UserRoute from "@routes/userRoutes";
import validateEnv from "@utils/validateEnv";
import TodoRoute from "./routes/todoRoutes";
import WorkspaceRoute from "./routes/workspaceRoutes";

validateEnv();

const app = new App([
  new AuthRoute(),
  new UserRoute(),
  new TodoRoute(),
  new WorkspaceRoute(),
]);

app.listen();