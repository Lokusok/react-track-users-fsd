import { memo } from 'react';

interface ILabelProps {
  title: string;
  children: React.ReactNode;
}

function Label({ title, children }: ILabelProps) {
  return (
    <label className="flex flex-col gap-y-[5px]">
      <span className="text-[18px]">{title}</span>
      {children}
    </label>
  );
}

export default memo(Label);
