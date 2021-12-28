import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface IShowResult {
  message: string;
  status: string;
}

const useURLLoader = (url: string, deps: any[] = []) => {
  const [data, setData] = useState<IShowResult | null>(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true);
    axios.get(url).then(result => {
      setData(result.data)
      setLoading(false)
    })
  }, deps);
  return [data, loading];
}

export default useURLLoader;