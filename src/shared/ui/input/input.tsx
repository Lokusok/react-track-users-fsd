import { memo } from 'react';
import clsx from 'clsx';

type TInputProps = {
  textarea?: boolean;
} & React.ComponentProps<'input'>;

function Input({ textarea, ...props }: TInputProps) {
  const className =
    'rounded-[4px] border border-solid border-accent-color-1 px-[10px] py-[5px] text-[18px]';

  if (textarea) {
    return <textarea className={clsx(className, 'h-[180px] resize-none')}></textarea>;
  }

  return <input className={className} {...props} />;
}

export default memo(Input);
