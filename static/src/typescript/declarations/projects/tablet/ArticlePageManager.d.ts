interface ArticlePageManager {
    setFontSize(fontSizeProfile: string): void;
}

declare module "articlePageManager" {
    export = ArticlePageManager;
}
