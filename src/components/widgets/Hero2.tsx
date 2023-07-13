import Image from 'next/image';
import { HeroProps } from '~/shared/types';

//ABOUT US PAGE - JON + JESSE PHOTOS AND DESCRIPTION
const Hero2 = (props: { data: HeroProps }) => {
  const { title, subtitle, jesseImage, jonImage, jesseTitle, subtitle2, jonTitle } = props.data;

  return (
    <section className="mt-[-72px] dark:bg-slate-800" id="heroTwo">
      <div className="mx-auto max-w-7xl px-4 pb-[72px] pt-[60px] sm:px-6">
        <div className="grid md:grid-cols-2">
          <div className="mx-auto block py-12 text-center md:py-12 md:text-left lg:py-10">
            <div className="flex-column mx-auto items-center justify-center">
              <div className="relative m-auto mb-[5%] h-[400px] max-w-4xl object-cover">
                {jesseImage && (
                  <Image
                    src={jesseImage.src}
                    alt={jesseImage.alt}
                    className="mx-auto h-full w-auto rounded-md  bg-gray-400 object-cover drop-shadow-2xl dark:bg-slate-700"
                    placeholder="blur"
                    loading="eager"
                    priority
                    width={9999}
                  />
                )}
              </div>
              <div className="max-w-3xl">
                {jesseTitle && (
                  <h1 className="leading-tighter font-heading mb-4 px-4 text-center font-bold tracking-tighter md:px-0 md:text-xl">
                    {jesseTitle}
                  </h1>
                )}
                <div className="mx-auto max-w-3xl px-10">
                  {subtitle && (
                    <p className="text-md mb-8 whitespace-pre-line font-normal text-gray-600 dark:text-slate-400">
                      {subtitle}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto block py-12 text-center md:py-12 md:text-left lg:py-10">
            <div className="flex-column mx-auto items-center justify-center">
              <div className="relative m-auto mb-[5%] h-[400px] max-w-4xl object-cover">
                {jonImage && (
                  <Image
                    src={jonImage.src}
                    alt={jonImage.alt}
                    className="mx-auto h-full w-auto rounded-md bg-gray-400 object-cover drop-shadow-2xl dark:bg-slate-700"
                    placeholder="blur"
                    loading="eager"
                    priority
                    width={9999}
                  />
                )}
              </div>
              <div className="max-w-3xl">
                {jonTitle && (
                  <h1 className="leading-tighter font-heading mb-4 px-4 text-center font-bold tracking-tighter md:px-0 md:text-xl">
                    {jonTitle}
                  </h1>
                )}
                <div className="mx-auto max-w-3xl px-10">
                  {subtitle2 && (
                    <p className=" text-md mb-8 whitespace-pre-line font-normal text-gray-600 dark:text-slate-400">
                      {subtitle2}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
