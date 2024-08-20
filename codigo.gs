function doGet(e) {
  var output = HtmlService.createHtmlOutputFromFile('index')
    output.addMetaTag('viewport', 'width=device-width, initial-scale=1');
  return output
}