import Image from 'next/image';
import { HeroProps } from '~/shared/types';
import CTA from '../common/CTA';

const HeroAboutUs = (props: { data: HeroProps }) => {
  const { title, subtitle, subtitle2 } = props.data;

  return (
    <section className="mt-[-72px] bg-primary-50 dark:bg-slate-800" id="heroTwo">
      <div className="mx-auto max-w-7xl px-4 pt-[72px] sm:px-6 2xl:h-auto">
        <div className="mx-auto block py-12 text-center md:py-12 md:text-left lg:py-10">
          <div className="mx-auto flex items-center justify-center">
            <div className="max-w-3xl">
              {title && (
                <h1 className="leading-tighter font-heading mb-4 px-4 text-center text-5xl font-bold tracking-tighter md:px-0 md:pb-10 md:text-[3.48rem]">
                  {title}
                </h1>
              )}
              <div className="mx-auto max-w-3xl">
                {subtitle && <p className="text-md mb-8 font-normal text-gray-600 dark:text-slate-400">{subtitle}</p>}
              </div>
              <div className="mx-auto max-w-3xl">
                {subtitle2 && <p className="text-md mb-8 font-normal text-gray-600 dark:text-slate-400">{subtitle2}</p>}
              </div>
            </div>
          </div>
          <div className="block flex-1 items-center md:flex"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroAboutUs;
