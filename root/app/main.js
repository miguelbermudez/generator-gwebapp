/*global define:true requirejs:true*/
/* jshint strict: false */
requirejs.config({
    paths: {
        'jquery': 'components/jquery/jquery',
        '{%= name%}': 'components/{%= name%}'
    }
});

define(['{%= name%}', 'jquery'], function ({%= title%}, $) {
    console.log('Loading');
	var {%= name%} = new {%= title%}();
	{%= name%}.init();
});