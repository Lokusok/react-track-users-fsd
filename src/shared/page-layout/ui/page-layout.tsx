import { memo } from 'react';

interface IPageLayoutProps {
  header: React.ReactNode;
  children: React.ReactNode;
}

function PageLayout({ header, children }: IPageLayoutProps) {
  return (
    <section className="pt-12">
      <div className="mb-6 flex flex-col gap-y-[15px] items-center">{header}</div>

      <div>{children}</div>
    </section>
  );
}

export default memo(PageLayout);
