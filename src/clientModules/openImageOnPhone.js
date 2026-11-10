// 幅の狭い画面では、拡大表示 (画面の幅まで) では字が読めないので、画像を押すと元の画像を別のタブで開く
// (ブラウザの拡大で細部まで見られる)。広い画面では docusaurus-plugin-image-zoom の拡大表示のまま
if (typeof window !== 'undefined') {
  document.addEventListener(
    'click',
    (event) => {
      const img = event.target instanceof Element && event.target.closest('.markdown img');
      if (!img || window.innerWidth >= 768) return;
      event.preventDefault();
      event.stopPropagation();
      window.open(img.currentSrc || img.src, '_blank', 'noopener');
    },
    true,
  );
}
