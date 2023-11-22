import BackButton from '@/components/BackButton';
import { CardHeader } from '@/components/ui/card';

export const dynamic = 'force-dynamic';

const getAnimalData = async () => {
  const res = await fetch('https://catfact.ninja/fact', {
    cache: 'no-store',
  });

  const data = res.json();

  return data;
};

const CatPage = async () => {
  const catData = await getAnimalData();

  return (
    <CardHeader className="items-center justify-center">
      <BackButton />
      <h1 className="p-6 text-2xl font-medium italic">{catData.fact}</h1>
    </CardHeader>
  );
};

export default CatPage;
