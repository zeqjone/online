/*
author:zeq
time:2017.5.25
version:v1.0.0
descrip:system log.
*/


var log = require('log4js');
log.configure({
	"appenders": [{
		"type": "dateFile",
		"filename": "./log/info/",
		"pattern": "info_yyyyMMdd",
		"alwaysIncludePattern": true,
		"category":'info'
	},{
		"type": "dateFile",
		"filename": "./log/error/",
		"pattern": "error_yyyyMMdd",
		"alwaysIncludePattern": true,
		"category":'error'
	},{
		"type": "dateFile",
		"filename": "./log/debug/",
		"pattern": "debug_yyyyMMdd",
		"alwaysIncludePattern": true,
		"category":'debug'
	},{
		"type": "dateFile",
		"filename": "./log/fatal/",
		"pattern": "fatal_yyyyMMdd",
		"alwaysIncludePattern": true,
		"category":'fatal'
	}]
});
var lginfo = log.getLogger('info');
var lgerror = log.getLogger('error');
var lgdebug = log.getLogger('debug');
var lgfatal = log.getLogger('fatal');

exports.log = {
	info:function(p){
		lginfo.info(p);
	},
	error:function(p){
		lgerror.error(p);
	},
	debug:function(p){
		lgdebug.debug(p);
	},
	fatal:function(p){
		lgfatal.fatal(p);
	}
};