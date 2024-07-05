import { memo } from 'react';
import { Search as SearchIcon } from 'lucide-react';

function Search() {
  return (
    <div className="relative">
      <SearchIcon className="absolute left-[4px] top-[3px]" color="#ddd" size={24} />

      <input
        placeholder="Поиск"
        className="border-solid border-[#ddd] rounded-[6px] border-2 py-[5px] pr-[15px] pl-[30px]"
      />
    </div>
  );
}

export default memo(Search);
