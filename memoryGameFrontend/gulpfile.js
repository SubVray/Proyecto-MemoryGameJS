const browserSync = require("browser-sync");
const server = browserSync.create();

exports.play = () => {
  browserSync.init({
    server: {
      baseDir: ".",
    },
  });
};
