import { contact2Data } from '~/shared/data';
import Form from '../common/Form';
import HeaderWidget from '../common/HeaderWidget';
import Image from 'next/image';

const Contact2 = () => {
  const { header, form, image } = contact2Data;

  return (
    <section className="bg-primary-50 dark:bg-slate-800" id="contactTwo">
      {header && <HeaderWidget header={header} titleClassname="text-3xl sm:text-5xl lg:pt-20" />}

      <div className="mx-auto flex max-w-7xl items-center justify-evenly px-4 py-6 sm:px-6 md:py-16 lg:px-8">
        <div>
          {image && (
            <Image src={image.src} alt={image.alt} width={700} height={200} className=" hidden opacity-80 md:block" />
          )}
        </div>
        <div className=" text-primary-600">
          <div className="flex items-stretch justify-center">
            <Form {...form} btnPosition="right" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact2;
