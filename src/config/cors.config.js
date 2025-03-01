const whitelist = ["https://notes-app-frontend-ihon.onrender.com"];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, // Allow cookies and auth headers
  methods: "GET,POST,PUT,DELETE",
};

export { corsOptions };
