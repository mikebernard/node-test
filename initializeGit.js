var shell = require('shelljs/global');
var prompt = require('prompt');

exports.initialize = function(){
	var properties = [
		{
			name: 'repo',
			description: 'What repo do you want to clone'
		},
		{
			name: 'rootBranch',
			description: 'What branch do you want to start from'
		},
		{
			name: 'newBranch',
			description: 'Name the branch you want to create'
		}
	];
	prompt.start();
	prompt.get(properties, function(error, result){
		runGit(result.repo, result.rootBranch, result.newBranch);
	});
};
function runGit(repo, rootBranch, newBranch) {
	exec('git init');
	exec('git remote add origin git@github.com:loanlifecycle/' + repo + '.git');
	exec('git checkout -b ' + rootBranch);
	exec('git pull origin ' + rootBranch);
	exec('git checkout -b ' + newBranch);
}

