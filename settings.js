const path = require("path");

module.exports = {

  disableEditor: false,

  httpAdminRoot: "/edit",


  ui: { path: "/ui" },

  httpStatic: path.join(__dirname, "public"),


  credentialSecret: process.env.NODE_RED_CREDENTIAL_SECRET || "change-me",


  adminAuth: {
    type: "credentials",
    users: [{
      username: process.env.ADMIN_USER || "admin",
      password: process.env.ADMIN_PASS_HASH || "", 
      permissions: "*"
    }]
  },

  editorTheme: { projects: { enabled: false } }
};
