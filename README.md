# MSKB-Docs

MSKB（VRChat 向け VR キーボード）の利用者向けドキュメントです。
https://misyaguziya.github.io/MSKB-Docs/

MSKB の不具合の報告・要望は、このリポジトリの [Issues](https://github.com/misyaguziya/MSKB-Docs/issues) で受け付けています。

## ビルド

```
npm install
npm run start   # 手元で確認
npm run build   # 公開前の確認 (リンク切れがあると失敗する)
```

master への push で GitHub Pages に公開されます。

package.json の `overrides` で webpack を 5.103.0 に固定しています（5.112 では Docusaurus 3.9.2 のビルドが
ProgressPlugin のオプション検査で失敗するため）。Docusaurus を上げたときに外せるか確認してください。
