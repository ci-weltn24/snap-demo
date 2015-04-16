/* tslint:disable:max-line-length */

/**
 * Extends the 'window' object with tablet specific objects.
 * These are only usable when the tablet app (bootstraps/appTablet.ts) was loaded.
 */
interface Window {

    /**
     * Impl: tablet/api/NavigationManager
     * API docs: https://as-stash.axelspringer.de/projects/DWTA/repos/die-welt-app-docs/browse/Native-JavaScript%20API/NavigationManager.js?at=refs%2Fheads%2Fdevelop
     */
    navigationManager: NavigationManager;

    /**
     * Impl: tablet/api/ArticlePageManager
     * API docs: https://as-stash.axelspringer.de/projects/DWTA/repos/die-welt-app-docs/browse/Native-JavaScript%20API/ArticlePageManager.js?at=develop
     */
    articlePageManager: ArticlePageManager;
}
