import { StaticImageData } from 'next/image';
import { ReactElement } from 'react';

declare module '*.mp4' {
  const src: string;
  export default src;
}

interface Header {
  title?: string | ReactElement;
  subtitle?: string;
  highlight?: string;
  position?: 'center' | 'right' | 'left';
}

interface HeaderWidgetProps {
  header: Header;
  titleClassname?: string;
}

interface CallToAction {
  text: string;
  href: string;
  icon?: Function;
  targetBlank?: boolean;
  btnText?: 'uppercase' | 'capitalize';
  btnType?: 'primary' | 'secondary';
}

interface Button {
  title: string;
  type: 'button' | 'submit' | 'reset' | undefined;
}

interface Input {
  type: string;
  label?: string;
  value?: string;
  name?: string;
  autocomplete?: string;
  placeholder?: string;
}

interface Textarea {
  cols?: number;
  rows?: number;
  label?: string;
  name: string;
  placeholder?: string;
}

interface Checkbox {
  label: string;
  value: string;
}

interface Radio {
  label: string;
}

interface RadioBtn {
  label?: string;
  radios: Array<Radio>;
}

interface SmallForm {
  icon?: Function;
  input: Input;
  btn: Button;
}

interface FormProps {
  title?: string;
  description?: string;
  inputs: Array<Input>;
  radioBtns?: RadioBtn;
  textarea?: Textarea;
  checkboxes?: Array<Checkbox>;
  btn: Button;
  btnPosition?: 'center' | 'right' | 'left';
}

interface Image {
  link?: string;
  src: string | StaticImageData;
  alt: string;
}

interface Item {
  title: string | boolean | number;
  description?: string | Array<string>;
  description2?: string | Array<string>;
  href?: string;
  form?: SmallForm;
  icon?: Function;
  callToAction?: CallToAction;
  link?: Link;
}

interface Team {
  name: string;
  occupation: string;
  image: Image;
  items?: Array<Item>;
}

interface Testimonial {
  name: string;
  occupation: string;
  comment: string;
  image?: Image;
  icon?: Function;
  href?: string;
}

interface Link {
  label?: string;
  href?: string;
  ariaLabel?: string;
  icon?: Function;
}

interface Price {
  title: string;
  value: number;
  period?: string;
  texts?: Array<string>;
  callToAction?: CallToAction;
  hasRibbon?: boolean;
  ribbonTitle?: string;
}

interface Column {
  title: string;
  items: Array<Item>;
  callToAction?: CallToAction;
}

interface MenuLink extends Link {
  links?: Array<Link>;
}

interface Links {
  title?: string;
  links?: Array<Link>;
  texts?: Array<string>;
}

interface Tab {
  link?: Link;
  items: Array<Item>;
}

interface Dropdown {
  options: Tab[];
  activeTab: number;
  onActiveTabSelected: Function;
  iconUp?: ReactElement;
  iconDown?: ReactElement;
}

interface HeroProps {
  title?: string | ReactElement;
  subtitle?: string | ReactElement;
  subtitle2?: string | ReactElement;
  callToAction?: CallToAction;
  callToAction2?: CallToAction;
  image?: Image;
  jonImage?: Image;
  jesseImage?: Image;
  jonTitle?: string | ReactElement;
  jesseTitle?: string | ReactElement;
}

interface FAQsProps {
  header?: Header;
  items?: Array<Item>;
  tabs?: Array<Tab>;
  callToAction?: CallToAction;
}

interface CollapseProps {
  items: Array<Item>;
  classCollapseItem?: string;
  iconUp?: ReactElement;
  iconDown?: ReactElement;
}

interface CallToActionProps {
  title: string;
  subtitle: string;
  callToAction?: CallToAction;
  items?: Array<Item>;
}

interface FeaturesProps {
  header?: Header;
  items: Array<Item>;
  image?: Image;
  callToAction?: CallToAction;
}

interface ServiceProps {
  header?: Header;
  content?: string;
  items?: Array<Item>;
  image?: Image;
  video?: Video;
  isReversed?: boolean;
  isAfterContent?: boolean;
  callToAction?: CallToAction;
}

interface StepsProps {
  title?: string;
  items: Array<Item>;
  image?: Image;
}

interface TeamProps {
  header?: Header;
  teams: Array<Team>;
}

interface TestimonialProps {
  header?: Header;
  testimonials: Array<Testimonial>;
}

interface PricingProps {
  header?: Header;
  prices: Array<Price>;
}

interface ComparisonProps {
  header?: Header;
  columns: Array<Column>;
}

interface StatsProps {
  items: Array<Item>;
}

interface ContactProps {
  header?: Header;
  header2?: Header;
  content?: string;
  items: Array<Item>;
  form: FormProps;
  image?: Image;
}

interface FooterProps {
  title?: string;
  links?: Array<Link>;
  columns: Array<Links>;
  socials: Array<Link>;
  footNote?: string | ReactElement;
  theme?: string;
}

interface HeaderProps {
  links?: Array<MenuLink>;
  actions?: Array<CallToAction>;
  // actions?: Array<ActionLink>;
  isSticky?: boolean;
  showToggleTheme?: boolean;
  showRssFeed?: boolean;
  position?: 'center' | 'right' | 'left';
}

interface ToggleMenuProps {
  handleToggleMenuOnClick: MouseEventHandler<HTMLButtonElement>;
  isToggleMenuOpen: boolean;
}

interface WindowSize {
  width: number;
  height: number;
}
