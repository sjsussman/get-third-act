import type { Metadata } from 'next';

import FAQs4 from '~/components/widgets/FAQs';

import { faqsData } from '~/shared/data';

export const metadata: Metadata = {
  title: 'FAQs',
};

const Page = () => {
  return (
    <>
      <FAQs4 {...faqsData} />
    </>
  );
};

export default Page;
