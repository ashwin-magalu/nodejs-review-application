var queryString = require("querystring");

function home(response) {
  console.log("Executing Home Handler");
  var htmlfile =
    "<html>" +
    "<head>" +
    "</head>" +
    "<body>" +
    '<form action="/review" method="post">' +
    '<textarea name="text" rows="20" cols="60"></textarea>' +
    '<input type="submit" value="Submit Text" />' +
    "</form>" +
    "</body>" +
    "</html>";
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(htmlfile);
  response.end();
}
function review(response, reviewData) {
  console.log("Executing Review Handler");
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.write("Your review is: " + queryString.parse(reviewData).text);
  response.end();
}

exports.home = home;
exports.review = review;
