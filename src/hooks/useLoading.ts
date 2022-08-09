import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type useLoadingType = [boolean, () => void];

export default function useLoading() {
  const { pathname } = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, [pathname]);

  const handleSetLoading = () => setIsLoading(true);

  return [isLoading, handleSetLoading] as useLoadingType;
}
