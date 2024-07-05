import { memo } from 'react';

function Skeleton() {
  return (
    <div className="bg-[#e0e0e0] w-[100%]  h-[100%] rounded-[10px] overflow-hidden relative">
      <div
        className={`w-[100%]
        h-[100%] 
        block
        absolute 
        left-0 
        top-0 
        animate-skeleton-slide
        before:content-[""]
        before:block
        before:absolute
        before:left-0
        before:top-0
        before:w-[100%]
        before:h-[13%]
        before:-rotate-[45deg]
        before:-translate-x-[60%]
        before:-translate-y-[-120px]
        before:bg-gradient-to-r from-[#e0e0e0] via-[#e8e8e8] to-[#e0e0e0]
        `}
      ></div>
    </div>
  );
}

export default memo(Skeleton);
