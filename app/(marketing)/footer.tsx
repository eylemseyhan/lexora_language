import Image from "next/image";

import { Button } from "@/components/ui/button";

// Sayfanın alt kısmında dil seçeneklerini gösteren alan
export const Footer = () => {
  return (
    <div className="hidden h-20 w-full border-t-2 border-slate-200 p-2 lg:block">
      <div className="mx-auto flex h-full max-w-screen-lg items-center justify-evenly">
        <Button size="lg" variant="ghost" className="w-full cursor-default">
          <Image
            src="/hr.svg"
            alt="Hırvatça"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Hırvatça
        </Button>

        <Button size="lg" variant="ghost" className="w-full cursor-default">
          <Image
            src="/es.svg"
            alt="İspanyolca"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          İspanyolca
        </Button>

        <Button size="lg" variant="ghost" className="w-full cursor-default">
          <Image
            src="/fr.svg"
            alt="Fransızca"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Fransızca
        </Button>

        <Button size="lg" variant="ghost" className="w-full cursor-default">
          <Image
            src="/it.svg"
            alt="İtalyanca"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          İtalyanca
        </Button>

        <Button size="lg" variant="ghost" className="w-full cursor-default">
          <Image
            src="/jp.svg"
            alt="Japonca"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Japonca
        </Button>
      </div>
    </div>
  );
};
