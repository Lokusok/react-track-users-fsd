import React, { forwardRef, memo } from 'react';
import clsx from 'clsx';

type TInputProps = {
  textarea?: boolean;
} & React.ComponentProps<'input'>;

function Input({ textarea, ...props }: TInputProps, ref: React.ForwardedRef<HTMLInputElement>) {
  const className =
    'rounded-[4px] border border-solid border-accent-color-1 px-[10px] py-[5px] text-[18px]';

  if (textarea) {
    return (
      <textarea
        ref={ref as React.ForwardedRef<HTMLTextAreaElement>}
        className={clsx(className, 'h-[180px] resize-none')}
        {...(props as React.ComponentProps<'textarea'>)}
      ></textarea>
    );
  }

  return <input ref={ref} className={className} {...props} />;
}

export default memo(forwardRef(Input));
