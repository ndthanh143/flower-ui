import { HeadingCustom, Modal } from '@/components';

import { categoryService, googleMapService } from '@/services';
import { Collections, ReviewsSlider, SlideBanner } from './_components';

export default async function Home() {
  const categories = await categoryService.getAll();
  const reviews = await googleMapService.getReviewsFromGoogleMap('ChIJI5iShzXZdDER78yC24pf8N0');

  return (
    <>
      <div>
        <SlideBanner />
      </div>
      <div className='flex flex-col gap-[80px] py-[50px]'>
        {categories.data.map((category, index) => (
          <>
            <div className='container'>
              <div className='flex flex-col gap-[50px]' key={category.id}>
                <HeadingCustom isSecond title={category.attributes.displayTitle} />
                <Collections categorySlug={category.attributes.slug} />
              </div>
            </div>
          </>
        ))}
      </div>
      {reviews && <ReviewsSlider reviews={reviews.reviews} />}
    </>
  );
}
