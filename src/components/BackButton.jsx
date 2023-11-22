'use client';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { ChevronLeft } from 'lucide-react';

const BackButton = () => {
  const router = useRouter();

  const onBackClick = () => {
    router.back();
  };

  return (
    <Button variant="outline" onClick={onBackClick} className="self-start">
      <ChevronLeft />
    </Button>
  );
};

export default BackButton;
