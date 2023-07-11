import { FeaturesProps } from '~/shared/types';
import HeaderWidget from '../common/HeaderWidget';
// import dynamic from 'next/dynamic';
import Image from 'next/image';

// const FeaturesCarouselWithNoSSR = dynamic(() => import('../widgets/FeaturesCarousel'), { ssr: false }) as any;

const Features3 = ({ header, items, image }: FeaturesProps) => (
  <section className="mx-auto scroll-mt-16" id="features3">
    <div className="mx-auto w-[100%] md:w-[40%]">
      {image && <Image src={image?.src} alt={image?.alt} unoptimized={true} />}
    </div>
    <div className="max-w-auto mx-auto px-4 py-8 md:max-w-6xl lg:px-8 lg:py-10">
      {header && <HeaderWidget header={header} titleClassname="text-4xl md:text-5xl" />}
      <div className="mb-0 items-start gap-6 dark:text-white sm:grid-cols-2 md:my-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {items.map(({ description }, index) => (
          <div
            key={`item-feature3-${index}`}
            className="col-span-1 px-4 pb-6 sm:col-span-1 md:col-span-1 md:px-10 lg:col-span-1 xl:col-span-1"
          >
            <div className="flex-flow flex">
              <div className="flex flex-col justify-between">
                <>
                  <p className="text-gray-600 dark:text-slate-400">{description}</p>
                </>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features3;
