import Selector from '@/components/Selector';
import { CardHeader } from '@/components/ui/card';

export default function Home() {
  return (
    <CardHeader className="items-center justify-center">
      <Selector />
    </CardHeader>
  );
}
