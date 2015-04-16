/*
 Module: storage.js
 Description: Wrapper around localStorage functionality
 */

class Storage {
    // named constructor
    static local: Storage = new Storage("localStorage");
    static session: Storage = new Storage("sessionStorage");

    type: string;
    w: Window = window;

    constructor(type: string) {
        this.type = type;
    }

    setWindow(window: Window): void {
        this.w = window;
    }

    isStorageAvailable(): boolean {
        return this.isAvailable();
    }

    isAvailable(data?: any): boolean {
        var testKey: string = "local-storage-module-test",
            d: any = data || "test";
        try {
            // to fully test, need to set item
            // http://stackoverflow.com/questions/9077101/iphone-localstorage-quota-exceeded-err-issue#answer-12976988
            this.w[this.type].setItem(testKey, d);
            this.w[this.type].removeItem(testKey);
            return true;
        } catch (e) {
            return false;
        }
    }

    set(key: string, data: any, options?: Object): boolean {
        if (this.isStorageAvailable()) {
            if (!this.w[this.type]) {
                return false;
            }
            var opts: any = options || {},
                value: string = JSON.stringify({
                    value: data,
                    expires: opts.expires
                });
            if (!this.isAvailable(value)) {
                return false;
            }
            return this.w[this.type].setItem(key, value);
        }
    }

    get(key: string): any {
        if (this.isStorageAvailable()) {
            var data: any,
                dataParsed: any;
            if (!this.w[this.type]) {
                return;
            }
            data = this.w[this.type].getItem(key);
            if (data === null) {
                return null;
            }

            // try and parse the data
            try {
                dataParsed = JSON.parse(data);
            } catch (e) {
                // remove the key
                this.remove(key);
                return null;
            }

            // has it expired?
            if (dataParsed.expires && new Date() > new Date(dataParsed.expires)) {
                this.remove(key);
                return null;
            }

            return dataParsed.value;
        }
    }

    getRaw(key: string): any {
        if (this.isStorageAvailable()) {
            return this.w[this.type].getItem(key);
        }
    }

    remove(key: string): any {
        if (this.isStorageAvailable()) {
            return this.w[this.type].removeItem(key);
        }
    }

    removeAll(): void {
        if (this.isStorageAvailable()) {
            return this.w[this.type].clear();
        }
    }

    length(): number {
        if (this.isStorageAvailable()) {
            return this.w[this.type].length;
        }
    }

    getKey(index: number): any {
        if (this.isStorageAvailable()) {
            return this.w[this.type].key(index);
        }
    }

    clearByPrefix(prefix: string): void {
        if (this.isStorageAvailable()) {
            // loop in reverse because storage indexes will change as you delete items.
            var i: number,
                name: string;
            for (i = this.length() - 1; i > -1; --i) {
                name = this.getKey(i);
                if (name.indexOf(prefix) === 0) {
                    this.remove(name);
                }
            }
        }
    }
}

export = Storage;
