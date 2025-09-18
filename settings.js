const path = require("path");

module.exports = {


  httpNodeRoot: "/",
  ui: { path: "/ui" },
  httpStatic: path.join(__dirname, "public"),


  adminAuth: {
    type: "credentials",
    users: [
      {
        username: "admin",
        password: "$2b$08$PUT_YOUR_BCRYPT_HASH_HERE",
        permissions: "*"   
      },

    ]
  },

  editorTheme: {
    projects: { enabled: false } 
  },

  credentialSecret: process.env.NODE_RED_CREDENTIAL_SECRET || "change-this-in-env",
};
