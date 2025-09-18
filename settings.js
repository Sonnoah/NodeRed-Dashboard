const path = require("path");

module.exports = {
  disableEditor: true,
  httpNodeRoot: "/",
  ui: { path: "/ui" },
  credentialSecret: process.env.NODE_RED_CREDENTIAL_SECRET || "change-this-in-env",
  httpStatic: path.join(__dirname, "public"),

  editorTheme: {
    projects: { enabled: false }
  },
};


