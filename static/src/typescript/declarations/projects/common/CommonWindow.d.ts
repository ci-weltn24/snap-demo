/// <reference path="../../../definitions.d.ts" />

/**
 * Extends the 'window' object with internal objects only on the 'common' namespace.
 *
 * Here you can see all available objects/variables for all projects.
 */
interface Window {

    /**
     * See 'common/api/GlobalPageManager'
     */
    globalPageManager: GlobalPageManager;
}
