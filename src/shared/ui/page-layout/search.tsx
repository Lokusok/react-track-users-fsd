import { memo, useEffect, useRef } from 'react';
import { Search as SearchIcon } from 'lucide-react';

interface ISearchProps {
  value: string;
  onChange: (value: string) => void;
  onEnterDown?: (value: string) => void;
}

function Search({ value, onChange, onEnterDown }: ISearchProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const callbacks = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
  };

  useEffect(() => {
    if (!inputRef.current || !onEnterDown) return;

    const inputNode = inputRef.current;

    const keydownListener = (e: KeyboardEvent) => {
      console.log(e);
      if (e.code === 'Enter') {
        console.log('here');
        onEnterDown(inputNode.value);
      }
    };

    inputNode.addEventListener('keydown', keydownListener);

    return () => {
      inputNode.removeEventListener('keydown', keydownListener);
    };
  }, [onEnterDown]);

  return (
    <div className="relative">
      <SearchIcon className="absolute left-[4px] top-[3px]" color="#ddd" size={24} />

      <input
        placeholder="Поиск"
        className="border-solid border-[#ddd] rounded-[6px] border-2 py-[5px] pr-[15px] pl-[30px]"
        ref={inputRef}
        value={value}
        onChange={callbacks.onChange}
      />
    </div>
  );
}

export default memo(Search);
