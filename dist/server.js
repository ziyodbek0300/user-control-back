"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _app = _interop_require_default(require("./app"));
const _authRoutes = _interop_require_default(require("./routes/authRoutes"));
const _userRoutes = _interop_require_default(require("./routes/userRoutes"));
const _validateEnv = _interop_require_default(require("./utils/validateEnv"));
const _todoRoutes = _interop_require_default(require("./routes/todoRoutes"));
const _workspaceRoutes = _interop_require_default(require("./routes/workspaceRoutes"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
(0, _validateEnv.default)();
const app = new _app.default([
    new _authRoutes.default(),
    new _userRoutes.default(),
    new _todoRoutes.default(),
    new _workspaceRoutes.default()
]);
app.listen();

//# sourceMappingURL=server.js.map