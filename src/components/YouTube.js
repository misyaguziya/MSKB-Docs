// YouTube の動画 (プライバシー強化モード)。start: 再生を始める秒
export default function YouTube({id, title, start}) {
  const src = `https://www.youtube-nocookie.com/embed/${id}${start ? `?start=${start}` : ''}`;
  return (
    <div className="video">
      <iframe
        src={src}
        title={title}
        loading="lazy"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}
