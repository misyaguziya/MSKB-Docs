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

  // ponytail: 日本語のみ。英語などは i18n の locales を足して i18n/<locale>/ に訳を置く
  i18n: {defaultLocale: 'ja', locales: ['ja']},

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
          versions: {current: {label: '1.0.0', path: '', badge: true}},
        },
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {respectPrefersColorScheme: true},
    navbar: {
      title: 'MSKB',
      logo: {alt: 'MSKB', src: 'img/icon.png'},
      items: [
        {to: '/start', label: 'はじめに', position: 'left'},
        {to: '/input', label: '入力', position: 'left'},
        {to: '/send', label: '送る', position: 'left'},
        {to: '/settings', label: '設定', position: 'left'},
        {to: '/faq', label: 'FAQ', position: 'left'},
        {type: 'docsVersionDropdown', position: 'right'},
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
