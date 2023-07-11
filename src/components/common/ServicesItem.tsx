'use client';

import { useState } from 'react';
import { CollapseProps } from '~/shared/types';

const ServicesItem = ({ items, classCollapseItem }: CollapseProps) => {
  const [activeIndex, setActiveIndex] = useState<undefined | number>(undefined);

  const handleSetIndex = (index: number) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
    } else {
      setActiveIndex(undefined);
    }
  };

  return (
    <>
      {items.map(({ title, description }, index) => (
        <div
          key={`accordion-${index}`}
          onClick={() => handleSetIndex(index)}
          className="mx-auto max-w-3xl select-none bg-transparent text-base text-gray-700"
        >
          <div className={classCollapseItem}>
            <div
              className="align-center flex justify-between"
              id={`accordion__heading-${index}`}
              aria-disabled="false"
              aria-expanded="false"
              aria-controls={`accordion__panel-${index}`}
            >
              <h2 className="w-full pr-2 text-lg font-medium leading-6 text-gray-900 dark:text-slate-300">{title}</h2>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ServicesItem;
