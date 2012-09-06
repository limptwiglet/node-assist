var expect = require('chai').expect
	, assist = require('../');


describe('FileSystemHandler', function(){
	var a1;
	var handler;
	before(function(done){
		handler = assist.handlers.FileSystem;
		a1 = assist.Assistant;
		done();
	});
	describe('find', function(){
		it('should set parameters', function(){
			var fsh = new handler('/some/path', {test: 'value'});
			expect(fsh).to.have.property('basePath');
		});
		it('should fail to find file', function(){
			a1.configure({
				handler: new handler('/some/path', {test: 'value'})
			});
			a1.find('', function(err, file){
				console.log('here');
				console.log(err, file);
			});
		});
	});
});
