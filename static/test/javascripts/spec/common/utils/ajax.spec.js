define([
    'helpers/injector'
], function (Injector) {
    'use strict';

    var reqwestSpy = sinon.spy(function () {
        return {
            then: function () {
            }
        };
    });

    return new Injector()
        .mock({
            reqwest: reqwestSpy,
            'common/utils/config': {
                page: {
                    ajaxUrl: 'http://www.domain.com'
                }
            }
        })
        .require(['common/utils/ajax'], function (ajax) {

            describe('AJAX', function () {

                it('should be defined', function () {
                    expect(ajax).toBeDefined();
                });

                it('should proxy calls to reqwest', function () {
                    ajax({url: '/endpoint.json', param: 'value'});

                    expect(reqwestSpy).toHaveBeenCalledWith({
                        url: 'http://www.domain.com/endpoint.json',
                        param: 'value'
                    });
                });

                it('should not touch a url that is already absolute', function () {
                    ajax({url: 'http://www.domain.com/endpoint.json'});

                    expect(reqwestSpy).toHaveBeenCalledWith({url: 'http://www.domain.com/endpoint.json'});
                });

                it('should not touch a url that is already absolute (https)', function () {
                    ajax({url: 'https://www.domain.com/endpoint.json'});

                    expect(reqwestSpy).toHaveBeenCalledWith({url: 'https://www.domain.com/endpoint.json'});
                });

                it('should not touch a protocol-less url', function () {
                    ajax({url: '//www.domain.com/endpoint.json'});

                    expect(reqwestSpy).toHaveBeenCalledWith({url: '//www.domain.com/endpoint.json'});
                });

                it('should be able to update host', function () {
                    ajax.setHost('http://www.domain.com');
                    ajax({url: '/endpoint.json'});

                    expect(reqwestSpy).toHaveBeenCalledWith({
                        url: 'http://www.domain.com/endpoint.json'
                    });
                });

            });

        });

});
