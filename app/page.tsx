import Best from '@/components/Best';
import PopularCategories from '@/components/PopularCategories';

export default async function Home() {
  return (
    <main>
      <Best />
      <PopularCategories />
    </main>
  );
}
