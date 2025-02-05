import { FooterSectionProps } from './types';

export const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => (
  <section className="flex flex-col grow shrink min-w-[240px]">
    <h3 className="text-2xl font-bold leading-none text-neutral-900 dark:text-white">
      {title}
    </h3>
    <nav className="mt-2.5 text-2xl tracking-wide leading-[66px] text-zinc-600">
      {links.map((link, index) => (
        <a href={`#${link.toLowerCase()}`} key={index} className="block">
          {link}
        </a>
      ))}
    </nav>
  </section>
);