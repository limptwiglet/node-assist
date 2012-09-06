var expect = require('chai').expect
	, assist = require('../');


describe('Assistant', function(){
	var a1;
	before(function(done){
		a1 = assist.Assistant;
		done();
	});
	describe('configure', function(){
		it('should apply configuration options', function(){
			a1.configure({
				basePath: 'test',
				handler: 'FileSystemHandler'
			});
			expect(a1).to.have.property('options');
			expect(a1.options.basePath).to.equal('test');
			expect(a1.handler).to.equal('FileSystemHandler');
		});
	});
	describe('setters and getters', function(){
		it('should set and return the correct value for an option', function(){
			a1.set('test', 'value');
			expect(a1.set('test')).to.equal('value'); //ensure we return the value when called with one param even with set
			expect(a1.options).to.have.property('test');
			expect(a1.get('test')).to.equal('value');
			expect(a1.get('foo')).to.be.undefined;
		});
	});
	describe('find', function(){
		it('should return an error when no handler is provided', function(){
			a1.configure({basePath: 'test'});
			a1.find('/a/path', function(err, file){
				expect(err).to.be.an.instanceof(Error);
				expect(err.message).to.equal('no handler defined');
			});
		});
	});
});
