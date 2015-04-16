declare class EventEmitter {

    constructor();

    /**
     * Return a list of assigned event listeners.
     *
     * @param {String} event The events that should be listed.
     * @returns {Array}
     */
    getListeners(event: string): Function[];

    /**
     * Takes a list of listener objects and flattens it into a list of listener functions.
     *
     * @param listeners raw listener functions
     * @return the listener functions
     */
    flattenListeners(listeners: Object[]): Function[];

    /**
     * Fetches the requested listeners via getListeners but will always return the results inside an object. This
     * is mainly for internal use but others may find it useful.
     *
     * @param {string} event RegExp -- Name of the event to return the listeners from
     */
    getListenersAsObject(event: string): EventEmitter;

    /**
     * Emit an event to all registered event listeners.
     *
     * @param {String} event The name of the event.
     * @param args additional arguments to be passed to each listener
     * @returns {Boolean} Indication if we've emitted an event.
     */
    emit(event: string, ...args: any[]): boolean;

    /**
     * Register a new EventListener for the given event.
     *
     * @param {String} event Name of the event.
     * @param {Function} fn Callback function.
     * @param context The context of the function.
     */
    on(event: string, fn: Function, context?: any): EventEmitter;

    /**
     * Add an EventListener that's only called once.
     *
     * @param {String} event Name of the event.
     * @param {Function} fn Callback function.
     * @param context The context of the function.
     */
    once(event: string, fn: Function, context?: any): EventEmitter;

    /**
     * Remove event listeners.
     *
     * @param {String} event The event we want to remove.
     * @param {Function} fn The listener that we need to find.
     * @param {Boolean} once Only remove once listeners.
     */
    removeListener(event: string, fn: Function, once?: boolean): EventEmitter;

    /**
     * Remove all listeners or only the listeners for the specified event.
     *
     * @param {String} event The event want to remove all listeners for.
     */
    removeAllListeners(event: string): EventEmitter;

    /**
     *
     * @param event
     * @param fn
     * @param once
     */
    off(event: string, fn: Function, once?: boolean): EventEmitter;

    /**
     *
     * @param event
     * @param fn
     * @param context
     */
    addListener(event: string, fn: Function, context?: any): EventEmitter;

    /**
     * Semi-alias of addListener. It will add a listener that will be automatically removed after its first execution.
     *
     * @param event Name of the event to attach the listener to
     * @param listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
     */
    addOnceListener(event: string, listener: Function): EventEmitter;

    /**
     * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at
     * once. If you don't do this then how do you expect it to know what event to add to? Should it just add to
     * every possible match for a regex? No. That is scary and bad. You need to tell it what event names
     * should be matched by a regex.
     *
     * @param event Name of the event to create
     */
    defineEvent(event: string): EventEmitter;

    /**
     * Uses defineEvent to define multiple events.
     *
     * @param events An array of event names to define.
     */
    defineEvents(events: String[]): EventEmitter;
}

declare module "EventEmitter" {
    export = EventEmitter;
}
