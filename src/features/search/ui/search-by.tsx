import { memo, useEffect, useState } from 'react';

import { Search } from '@/shared/ui/page-layout';
import { useAppDispatch, useDebounce } from '@/shared/lib/hooks';

import { searchActions } from '../model/slice';

function SearchBy() {
  const dispatch = useAppDispatch();
  const [searchQueryNow, setSearchQueryNow] = useState('');
  const searchQueryDebounced = useDebounce(searchQueryNow, 5000);

  const callbacks = {
    onChange: (value: string) => {
      setSearchQueryNow(value.trim());
    },
    searchByNow: () => {
      dispatch(searchActions.setQuery(searchQueryNow));
    },
  };

  useEffect(() => {
    dispatch(searchActions.setQuery(searchQueryDebounced));
  }, [searchQueryDebounced, dispatch]);

  return (
    <Search
      value={searchQueryNow}
      onChange={callbacks.onChange}
      onEnterDown={callbacks.searchByNow}
    />
  );
}

export default memo(SearchBy);
