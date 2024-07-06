import { memo, useEffect, useState } from 'react';

import { Search } from '@/shared/ui/page-layout';
import { useAppDispatch, useAppSelector, useDebounce } from '@/shared/lib/hooks';

import { searchActions } from '../model/slice';
import { selectSearchQuery } from '../model/selectors';

function SearchBy() {
  const dispatch = useAppDispatch();
  const searchQueryStore = useAppSelector(selectSearchQuery);

  const [searchQueryNow, setSearchQueryNow] = useState(searchQueryStore);
  const searchQueryDebounced = useDebounce(searchQueryNow, 500);

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
