import BackButton from '@/components/BackButton';
import { CardHeader } from '@/components/ui/card';

import Image from 'next/image';

export const dynamic = 'force-dynamic';

const getAnimalData = async () => {
  const res = await fetch('https://dog.ceo/api/breeds/image/random', {
    cache: 'no-store',
  });

  const data = res.json();

  return data;
};

const DogPage = async () => {
  const dogData = await getAnimalData();

  return (
    <CardHeader className="items-center justify-center">
      <BackButton />
      <Image
        src={dogData.message}
        alt="My Pet Dog"
        width={800}
        height={800}
        className="rounded-lg border-2 border-black dark:border-white w-[500px]  object-contain"
      />
    </CardHeader>
  );
};

export default DogPage;
