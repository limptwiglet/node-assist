var util = require('util')
	, fs = require('fs');

function BaseHandler(basePath, options){
	this.basePath = basePath;
	this.options = options || {};
};

function FileSystemHandler(basePath, options){
	BaseHandler.apply(this, [basePath, options]);
};

util.inherits(FileSystemHandler, BaseHandler);

FileSystemHandler.prototype.getFile = function(url, callback){
	var filePath = path.join(this.basePath, url)
	var self = this;
	fs.exists(filePath, function(exists){
		if(!exists) { callback(null, false) }
		else{
			fs.readFile(filePath, function(err, img){
				if(err){
					callback(err, img);
				} else {
					callback(null, img);
				}
			});
		}
	});
};

exports.FileSystem = FileSystemHandler;
