'use client';

import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { useState } from 'react';
import { CollapseProps } from '~/shared/types';

const NoCollapse = ({ items, classCollapseItem, iconUp, iconDown }: CollapseProps) => {
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
            <div className="align-center flex justify-between" id={`accordion__heading-${index}`}>
              <h2 className="w-full pr-2 text-lg font-medium leading-6 text-gray-900 dark:text-slate-300">{title}</h2>
              {iconDown && iconUp ? (
                activeIndex === index ? (
                  iconUp
                ) : (
                  iconDown
                )
              ) : activeIndex === index ? (
                <IconChevronUp className="h-6 w-6 text-primary-600 dark:text-slate-200" />
              ) : (
                <IconChevronDown className="h-6 w-6 text-primary-600 dark:text-slate-200" />
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default NoCollapse;
