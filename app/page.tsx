import Best from '@/components/Best';
import BestDish from '@/components/BestDish';
import PopularCategories from '@/components/PopularCategories';

export default async function Home() {
  return (
    <main>
      <Best />
      <PopularCategories />
      <BestDish />
    </main>
  );
}
