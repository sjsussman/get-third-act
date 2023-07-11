import Image from 'next/image';
import { HeroProps } from '~/shared/types';
import CTA from '../common/CTA';

//LANDING SECTION - HOMEPAGE
const Hero = (props: { data: HeroProps }) => {
  const { title, subtitle, callToAction, image } = props.data;

  return (
    <section id="heroOne">
      <div className="mx-automax-w-7xl px-4 sm:px-6">
        <div className="py-12 md:pb-0 md:pt-6">
          <div className="mx-auto max-w-4xl text-center md:pb-6">
            {title && (
              <h1 className="leading-tighter font-heading mb-6 text-3xl tracking-tighter text-primary-600 md:text-4xl md:font-bold lg:text-5xl">
                {title}
              </h1>
            )}
          </div>
          {image && (
            <div className="hidden justify-center px-20 md:flex">
              <div className="flex-column mx-6 mb-6 grid content-around text-xl font-bold text-gray-600 dark:text-slate-400">
                <p>Maximize your company’s financial potential with clear, expert perspective.</p>
                <p>We quickly clarify your goals, and give you the tools to achieve them.</p>
                <div className="flex-col flex-nowrap gap-4 px-20 sm:flex-row sm:justify-center md:px-4">
                  {callToAction && <CTA data={callToAction} />}
                </div>
              </div>
              <div className="relative m-auto mr-6 hidden max-w-[50%] md:block">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="mx-auto h-auto w-full rounded-md bg-gray-400 dark:bg-slate-700"
                  placeholder="blur"
                  loading="eager"
                  priority
                  sizes="(max-width: 64rem) 100vw, 1024px"
                />
              </div>
            </div>
          )}
          <div className="mx-auto max-w-3xl md:mt-20">
            {subtitle && (
              <p className="mb-10 hidden text-center text-xl font-normal text-gray-600 dark:text-slate-400">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
