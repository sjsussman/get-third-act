import { footerData } from '~/shared/data';

//FOOTER SECTION - ALL PAGES
const Footer2 = () => {
  const { columns, socials } = footerData;

  return (
    <div className="mx-auto max-w-7xl px-1 sm:px-6">
      <div className="flex justify-between py-6">
        <div className="flex justify-between">
          {columns.map(({ title, texts }, index) => (
            <div key={`item-column-${index}`} className="px-4 md:px-6">
              <div className="mb-2 font-medium text-gray-800 dark:text-gray-300">{title}</div>
              {texts &&
                texts.map((text, index2) => (
                  <p key={`item-text-${index2}`} className="text-primary-600 dark:text-slate-400">
                    {text}
                  </p>
                ))}
            </div>
          ))}
        </div>
        <div className="col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-1">
          <div className="mb-2 font-medium text-gray-800 dark:text-gray-300">Social</div>
          <ul className="-ml-2 mb-4 flex md:order-1 md:mb-0">
            {socials.map(({ label, icon: Icon, href }, index) => (
              <li key={`item-social-${index}`}>
                <a
                  className="text-muted inline-flex items-center rounded-lg px-1 text-sm text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700 md:p-2.5"
                  aria-label={label}
                  href={href}
                >
                  {Icon && <Icon className="h-5 w-5" />}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
