'use client';
import { useRouter } from 'next/navigation';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function Selector() {
  const router = useRouter();

  const onSelect = (val) => {
    router.push(`/${val}`);
  };

  return (
    <Select onValueChange={onSelect}>
      <SelectTrigger className="w-[50%]">
        <SelectValue placeholder="Select your pet Cat/Dog" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Pets</SelectLabel>
          <SelectItem value="dog">Dog</SelectItem>
          <SelectItem value="cat">Cat</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
