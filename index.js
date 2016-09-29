var path = require('path');
var git = require( path.resolve( __dirname, './initializeGit.js' ) );
exports.initializeGit = function(){
	git.initialize();
}
