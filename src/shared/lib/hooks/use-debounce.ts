import { useState, useEffect } from 'react';

export default function useDebounce(data: string, ms: number) {
  const [value, setValue] = useState(data);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(data);
    }, ms);

    return () => clearTimeout(timer);
  }, [value, data, ms]);

  return value;
}
