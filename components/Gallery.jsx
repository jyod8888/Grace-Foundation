import { galleryImages } from '@/lib/content';

export default function Gallery() {
  return (
    <div className="gallery-grid">
      {galleryImages.map((src, index) => (
        <img key={src} src={src} alt={`Grace Foundation community work ${index + 1}`} />
      ))}
    </div>
  );
}
