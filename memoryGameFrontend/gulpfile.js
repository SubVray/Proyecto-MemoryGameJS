const gulp = require("gulp");
const browserSync = require("browser-sync");
const server = browserSync.create();

function reloadServer() {
  server.reload();
}

function runServer() {
  server.init({
    server: {
      baseDir: ".",
    },
  });
}

function watchingFiles() {
  gulp.watch("*.html", reloadServer);
  gulp.watch("css/", { events: "all" }, reloadServer);
  gulp.watch("js/", { events: "all" }, reloadServer);
}

exports.play = () => {
  runServer();
  watchingFiles();
  // gulp.series(runServer, watchingFiles);
};
