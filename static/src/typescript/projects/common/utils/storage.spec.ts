import storage = require("common/utils/storage");

"use strict";

describe("Storage", function () {

    var date: DateExtended;

    beforeEach(function () {
        date = new DateExtended();
    });

    afterEach(function () {
        // restore stubbed local storage methods
        for (var prop in window.localStorage) {
            // type cast necessary because of stubbing by sinon
            var sinonSpy = <SinonSpy>(<any>window.localStorage[prop]).restore;
            if (sinonSpy) {
                sinonSpy();
            }
        }
        setWindowLocalStorage({});
        storage.local.setWindow(window);
        storage.local.isStorageAvailable = function () {
            return true;
        };
    });

    function setWindowLocalStorage(winLocalStorage) {
        storage.local.setWindow(<Window>{localStorage: winLocalStorage})
    }

    function testSetAndGet(key, data, dataAsString) {
        setWindowLocalStorage({
            setItem: sinon.stub().withArgs(key, dataAsString).returns(true),
            getItem: sinon.stub().withArgs(key).returns(dataAsString),
            removeItem: sinon.stub().withArgs(dataAsString)
        });
        expect(storage.local.set(key, data)).toBeTruthy();
        expect(storage.local.get(key)).toEqual(data);
    }

    it('should not be available if can not set data', function () {
        setWindowLocalStorage({
            setItem: sinon.stub().throws()
        });
        expect(storage.local.isAvailable()).toBeFalsy();
        expect(storage.local.isStorageAvailable()).toBeFalsy();
    });

    it('should save and retrieve data', function () {
        testSetAndGet('foo', 'bar', '{"value": "bar"}');
    });

    it('should not save if local storage unavailable', function () {
        sinon.stub(storage.local, 'isAvailable').returns(false);
        expect(storage.local.set('foo', 'bar')).toBeFalsy();
        // necessary because of dynamic type change by sinon
        <SinonSpy>(<any>storage.local.isAvailable).restore();
    });

    it('should be able to remove item', function () {
        var key = 'foo';
        setWindowLocalStorage({
            removeItem: sinon.stub().withArgs(key).returns(true)
        });
        expect(storage.local.remove(key)).toBeTruthy();
    });

    it('should be able to clear data', function () {
        setWindowLocalStorage({
            clear: sinon.stub().returns(true)
        });
        expect(storage.local.removeAll()).toBeTruthy();
    });

    it('should return if key not set', function () {
        setWindowLocalStorage({
            getItem: sinon.stub().returns(null)
        });
        expect(storage.local.get('foo')).toBe(null);
    });

    it('should return number of items in storage', function () {
        storage.local.removeAll();
        storage.local.set('foo', 'bar');
        expect(storage.local.length()).toBe(1);
        storage.local.set('foo2', 'bar2');
        expect(storage.local.length()).toBe(2);
    });

    it('should return item by index', function () {
        storage.local.removeAll();
        storage.local.set('foo', 'bar');
        expect(storage.local.getKey(0)).toBe('foo');
    });

    it('should handle migrating non stringified data', function () {
        setWindowLocalStorage({
            getItem: sinon.stub().withArgs('foo').returns('bar|string'),
            removeItem: sinon.stub().withArgs('foo')
        });
        expect(storage.local.get('foo')).toBeNull();
    });

    describe('Expiration', function () {

        it('should delete if expired', function () {
            var expires = date.addHours(-1),
                key = 'foo',
                value = 'bar',
                storedData = '{"value":"' + value + '","expires":"' + expires.toISOString() + '"}',
                setItemSpy = sinon.spy(),
                removeItemSpy = sinon.spy();
            setWindowLocalStorage({
                setItem: setItemSpy,
                getItem: sinon.stub().returns(storedData),
                removeItem: removeItemSpy
            });

            storage.local.set(key, value, {expires: expires});

            // expectations
            expect(storage.local.get(key)).toBeNull();
            expect(setItemSpy).toHaveBeenCalledWith(key, storedData);
            expect(removeItemSpy).toHaveBeenCalledWith(key);
        });

        it('should not delete if not expired', function () {
            var expires = date.addHours(+1),
                key = 'foo',
                value = 'bar',
                removeItemSpy = sinon.spy();

            setWindowLocalStorage({
                getItem: sinon.stub().returns('{"value":"' + value + '","expires":"' + expires.toISOString() + '"}'),
                removeItem: removeItemSpy
            });

            storage.local.set(key, value, {expires: expires});

            // expectations
            expect(storage.local.get(key)).toBe(value);
            expect(removeItemSpy).not.toHaveBeenCalledWith(key);
        });
    });

    describe('Saving and retrieving different data types', function () {

        it('Object data', function () {
            testSetAndGet('foo', {bar: 'baz'}, '{"value": {"bar":"baz"}}');
        });

        it('Array data', function () {
            testSetAndGet('foo', ['bar', 'baz'], '{"value": ["bar","baz"]}');
        });

        it('Boolean data', function () {
            testSetAndGet('foo', false, '{"value": false}');
        });

        it('Number data', function () {
            testSetAndGet('foo', 1234, '{"value": 1234}');
        });

        it('String data', function () {
            testSetAndGet('foo', 'bar', '{"value": "bar"}');
        });
    });
});

class DateExtended {
    date: Date;

    constructor() {
        this.date = new Date();
    }

    addHours(hours: number): Date {
        this.date.setHours(this.date.getHours() + hours);
        return this.date;
    }
}
