export default function MediaFrame({
  label,
  captionHidden = false,
  ratio = 'landscape',
  treatment = 'full',
  tone = 'neutral',
  src,
  srcSet,
  sizes,
  sources = [],
  alt = '',
  placeholderTitle,
  placeholderEyebrow,
}) {
  return (
    <figure className={`media-frame media-frame--${ratio} media-frame--${treatment} media-frame--tone-${tone} ${captionHidden ? 'media-frame--caption-hidden' : ''}`.trim()}>
      <div className="media-frame__surface">
        {src ? (
          <picture>
            {sources.map(({ type, srcSet: sourceSet }) => <source key={type} type={type} srcSet={sourceSet} sizes={sizes} />)}
            <img src={src} srcSet={srcSet} sizes={sizes} alt={alt} loading="lazy" decoding="async" />
          </picture>
        ) : (
          <div className="media-frame__placeholder" aria-hidden="true">
            {placeholderEyebrow && <span className="media-frame__eyebrow">{placeholderEyebrow}</span>}
            {placeholderTitle && <span className="media-frame__title">{placeholderTitle}</span>}
            {placeholderTitle && <span className="media-frame__rule" />}
          </div>
        )}
      </div>
      {label && <figcaption>{label}</figcaption>}
    </figure>
  )
}
