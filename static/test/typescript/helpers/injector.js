define([
    'Promise',
    'squire'
], function(
    Promise,
    Squire
) {
    'use strict';

    var r = Squire.prototype.require;

    Squire.prototype.require = function (deps, cb, eb) {

        return new Promise(function (resolve) {
            r.call(this, deps, function () {
                cb.apply(this, arguments);
                resolve();
            }, function () {
                eb.apply(this, arguments);
                resolve();
            });
        }.bind(this));

    };

    return Squire;

});
