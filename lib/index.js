var util = require('util')

/**
 * Assitant constructor
 *
 */

function Assistant(){
	this.options = {};
};

/**
 * Configure Assistant
 *
 * ####Example:
 * 		var Assistant = require('assist');
 * 		assistant.configure({ handler: FileSystemHandler });
 *
 * @param {Object} opts // object containing configuration options
 * @api public
 */
Assistant.prototype.configure = function(opts){
	this.options = opts
	this.handler = this.options.handler;
};

/**
 * set Assistant options
 *
 * ####Example:
 *
 * 		assistant.set('test', value) // set 'test' option to value
 *
 * @param {String} key
 * @param {Mixed} value
 * @api public
 */
Assistant.prototype.set = function(key, value){
	if(arguments.length == 1)
		return this.options[key];
	this.options[key] = value;
	return this;
}

/**
 * get Assistant options
 *
 * ####Example
 *
 * 		assistant.get('test'); // returns the 'test' value
 *
 * 	@param {String} key
 * 	@api public
 */
Assistant.prototype.get = Assistant.prototype.set;

/**
 * find a file using the provided handler.  This is a wrapper around
 * this.handler.getFile method
 *
 * ####Example
 *
 * 		assistant.find(path, callback);
 *
 * @param {String} path
 * @param {Function} callback accpeting two arguments, err and the file found
 */
Assistant.prototype.find = function(path, callback){
	var self = this;
	if(!self.handler)
		return callback(new Error('no handler defined'), false);
	self.handler.getFile(path, function(err, file){
		return callback(err, file);
	});
};


module.exports = exports = new Assistant;
