import Best from '@/components/Best';
import BestDish from '@/components/BestDish';
import PopularCategories from '@/components/PopularCategories';
import Testimonials from '@/components/Testimonials';
import OurService from '../components/OurService';

export default async function Home() {
  return (
    <main>
      <Best />
      <PopularCategories />
      <BestDish />
      <Testimonials />
      <OurService/>
    </main>
  );
}
