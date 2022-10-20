import { useState } from 'react';

const useNavBarVisible = () => {
  const [isVisible, setIsVisible] = useState(false);

  return { isVisible, setIsVisible };
};

export default useNavBarVisible;
