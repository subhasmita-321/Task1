function renderPosts(req, res) {
  const api = "https://jsonplaceholder.typicode.com/posts";

  async function processPosts() {
    const Response = await fetch(api);
    const data = await Response.json();
    const { id, title, body } = data;
    console.log(data);
    var innerHtmlText = "";

    var cells = data.length;
    var columns = 4;
    var rows = cells / columns;
    if (rows * columns !== cells) {
      rows += 1;
    }

    innerHtmlText = innerHtmlText + "<table>";
    for (var r = 0; r < rows; r++) {
      innerHtmlText = innerHtmlText + "<tr>";
      for (var c = 0; c < columns; c++) {
        var cellData = data[r * columns + c];
        if (cellData !== undefined) {
          innerHtmlText = innerHtmlText + "<td>" + cellData.body + "</td>";
        }
      }
      innerHtmlText = innerHtmlText + "</tr>";
    }
    innerHtmlText = innerHtmlText + "</table>";
    console.log(innerHtmlText);

    document.getElementById("posts-view").innerHTML = innerHtmlText;
  }

  processPosts();
}
