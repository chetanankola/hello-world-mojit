/*
 * Copyright (c) 2011 Yahoo! Inc. All rights reserved.
 */

YUI.add('myMojitModel-tests', function(Y) {
    
    var suite = new YUITest.TestSuite('myMojitModel-tests'),
        model = null,
        A = YUITest.Assert;
    
    suite.add(new YUITest.TestCase({
        
        name: 'myMojit model user tests',
        
        setUp: function() {
            model = Y.mojito.models.myMojitModelFoo;
        },
        tearDown: function() {
            model = null;
        },
        
        'test mojit model': function() {
            A.isNotNull(model);
            A.isFunction(model.getData);
        }
        
    }));
    
    YUITest.TestRunner.add(suite);
    
}, '0.0.1', {requires: ['mojito-test', 'myMojitModelFoo']});
