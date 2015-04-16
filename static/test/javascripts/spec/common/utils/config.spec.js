define([
    'common/utils/config'
], function (config) {
    'use strict';

    describe('Config', function () {

        beforeEach(function () {
            config.page = {
                foo: 'bar'
            };
        });

        it('should have "foo" property', function () {
            expect(config.page).toBeDefined();
            expect(config.page.foo).toBeDefined();
            expect(config.page.foo).toEqual('bar');
        });

    });

});
