var fs = Npm.require('fs'),
    path = Npm.require('path');

Plugin.registerSourceHandler("config.import", {archMatching: 'web'}, function (compileStep) {
  var source = compileStep.read().toString('utf8');
  source = source.replace('{name}', '"http://lpmatman.co"');

  // var options = {
  //   filename: compileStep.inputPath,
  //   syncImport: true,
  //   paths: [path.dirname(compileStep._fullInputPath)] // for @import
  // };

fs.writeFile(path.dirname(compileStep._fullInputPath) + '/assets.import.less', source, function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
});
  try {


  } catch (e) {
    // less.Parser.parse is supposed to report any errors via its
    // callback. But sometimes, it throws them instead. This is
    // probably a bug in less. Be prepared for either behavior.
    // compileStep.error({
    //   message: "Less compiler error: " + e.message,
    //   sourcePath: e.filename || compileStep.inputPath,
    //   line: e.line,
    //   column: e.column + 1
    // });
    // return;
  }


  // if (sourceMap) {
  //   sourceMap.sources = [compileStep.inputPath];
  //   sourceMap.sourcesContent = [source];
  //   sourceMap = JSON.stringify(sourceMap);
  // }

  // compileStep.addStylesheet({
  //   path: compileStep.inputPath + ".css",
  //   data: css,
  //   sourceMap: sourceMap
  // });
});