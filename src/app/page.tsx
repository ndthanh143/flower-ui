import { categoryService, googleMapService } from '@/services';
import { Collections, ReviewsSlider, SlideBanner } from './_components';

export default async function Home() {
  const categories = await categoryService.getAll();
  const reviews = await googleMapService.getReviewsFromGoogleMap('ChIJI5iShzXZdDER78yC24pf8N0');

  console.log('reviews', JSON.stringify(reviews));

  return (
    <>
      <div>
        <SlideBanner />
      </div>
      <div className='flex flex-col gap-[80px] py-[50px]'>
        {categories.data.map((category) => (
          <Collections category={category.attributes} key={category.id} />
        ))}
      </div>
      {reviews && <ReviewsSlider reviews={reviews.reviews} />}
    </>
  );
}
