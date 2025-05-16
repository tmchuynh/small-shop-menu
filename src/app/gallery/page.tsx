import { MasonryGridGallery } from "@/components/images/MasonryGridGallery";
import {
  masonryGalleryImages1,
  masonryGalleryImages2,
} from "@/lib/constants/images/gallery";

export default function GalleryPage() {
  return (
    <div className="relative mx-auto w-11/12">
      <h2>Gallery</h2>
      <MasonryGridGallery data={masonryGalleryImages1} />
      <MasonryGridGallery data={masonryGalleryImages2} />
    </div>
  );
}
