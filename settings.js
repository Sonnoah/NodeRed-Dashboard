module.exports = {

  disableEditor: true,

  httpNodeRoot: "/",

  ui: { path: "/ui" },

  credentialSecret: process.env.NODE_RED_CREDENTIAL_SECRET || "change-this-in-env",

  editorTheme: {
    projects: { enabled: false }
  }
};
