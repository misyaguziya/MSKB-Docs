import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Docs | MSKB',
  tagline: 'VRChat で使える多言語対応 VR キーボード',
  favicon: 'img/favicon.ico',
  future: {v4: true},

  url: 'https://misyaguziya.github.io',
  baseUrl: '/MSKB-Docs/',
  organizationName: 'misyaguziya',
  projectName: 'MSKB-Docs',
  onBrokenLinks: 'throw',

  // 日本語が元。英語は i18n/en/ に訳と英語の画面の画像を置く (`npm run write-translations -- --locale en` で文言の雛形)
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
    localeConfigs: {ja: {label: '日本語', htmlLang: 'ja'}, en: {label: 'English', htmlLang: 'en'}},
  },

  presets: [
    [
      'classic',
      {
        // トップページもドキュメントにする (docs/index.md が "/")
        // docs/ は最新の MSKB に合わせる。版を残すときは `npm run docusaurus docs:version <x.y.z>` で
        // versioned_docs/ に固定し、label を新しい版に上げる
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          lastVersion: 'current',
          versions: {current: {label: '1.0.1', path: '', badge: true}},
        },
        // 版ごとの変更点 (MSKB の設定画面の「変更点」から開く)。新しい版は blog/ と i18n/en/docusaurus-plugin-content-blog/ に同じ名前で書き、
        // static/latest.json の version を上げる (BOOTH に上げてから。MSKB はこの版を見て更新を知らせる)
        blog: {
          showReadingTime: false,
          feedOptions: {type: ['rss', 'atom'], xslt: true},
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {customCss: './src/css/custom.css'},
      } satisfies Preset.Options,
    ],
  ],

  // 画像を押すと拡大 (スマホでキーの字を読めるように)
  plugins: ['docusaurus-plugin-image-zoom'],
  clientModules: ['./src/clientModules/openImageOnPhone.js'],
  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {hashed: true, language: ['ja', 'en'], docsRouteBasePath: '/', indexBlog: false, indexPages: false},
    ],
  ],

  themeConfig: {
    colorMode: {respectPrefersColorScheme: true},
    zoom: {
      selector: '.markdown img',
      background: {light: 'rgba(255, 255, 255, 0.96)', dark: 'rgba(24, 24, 27, 0.96)'},
    },
    // ページ間の移動はサイドバーに任せ、上はブログと検索とサイトの外へのリンクだけ。
    // 版の選択は 2 つ目の版を出すときに {type: 'docsVersionDropdown'} を足す
    navbar: {
      title: 'MSKB',
      logo: {alt: 'MSKB', src: 'img/icon.png'},
      items: [
        {to: '/blog', label: 'ブログ', position: 'left'},
        {type: 'search', position: 'right'},
        {type: 'localeDropdown', position: 'right'},
        {href: 'https://misyaguziya.booth.pm/items/9093442', label: 'ダウンロード', position: 'right'},
        {href: 'https://github.com/misyaguziya/MSKB-Docs/issues', label: '不具合・要望', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'ドキュメント',
          items: [
            {label: 'はじめに', to: '/start'},
            {label: '文字を入力する', to: '/input'},
            {label: '送る', to: '/send'},
            {label: '好みに合わせる', to: '/customize'},
            {label: '設定の一覧', to: '/settings'},
            {label: 'FAQ', to: '/faq'},
          ],
        },
        {
          title: 'サポート',
          items: [
            {label: 'ダウンロード (BOOTH)', href: 'https://misyaguziya.booth.pm/items/9093442'},
            {label: '不具合・要望 (GitHub Issues)', href: 'https://github.com/misyaguziya/MSKB-Docs/issues'},
            {label: 'ブログ (変更点)', to: '/blog'},
          ],
        },
        {
          title: 'Community',
          items: [{label: 'X', href: 'https://x.com/misya_ai'}],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} m's software. 本サイトの文章・画像の無断転載・転用を禁じます。`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
