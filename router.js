// Router module requires two things: Request URL and Get/Post parameters

function route(handle, pathname, response, reviewData) {
  console.log("routing request for " + pathname);
  if (typeof handle[pathname] === "function") {
    handle[pathname](response, reviewData);
  } else {
    console.log("No handler for this particular pathname");
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.write("Error 404. Page not found.");
    response.end();
  }
}

exports.route = route;
