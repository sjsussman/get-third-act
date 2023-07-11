import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Hero from '~/components/widgets/Hero';
import Service from '~/components/widgets/Service';
import Features from '~/components/widgets/Features';

import { serviceData, featuresData, heroData } from '~/shared/data';
import Contact from '~/components/widgets/Contact';

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Page() {
  return (
    <>
      <Hero data={heroData} />
      <Service {...serviceData} />
      <Features {...featuresData} />
      <Contact />
    </>
  );
}
