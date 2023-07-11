import type { Metadata } from 'next';

import Hero2 from '~/components/widgets/Hero2';
import HeroAboutUs from '~/components/widgets/HeroAboutUs';

import { hero2Data, aboutUsHero } from '~/shared/data';

export const metadata: Metadata = {
  title: `About us`,
};

const Page = () => {
  return (
    <>
      <HeroAboutUs data={aboutUsHero} />
      <Hero2 data={hero2Data} />
    </>
  );
};

export default Page;
