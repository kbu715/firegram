import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import { motion } from 'framer-motion';
const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);
  console.log(progress, url);

  useEffect(() => {
    if (url) { //undefined or null (upload 과정중에는)
      setFile(null); //100% upload 이후 file.name과 progress bar 없애주기 위한 설정.
    }
  }, [url, setFile]);

  return (
    <motion.div 
        className="progress-bar" 
        initial={{ width: 0 }}
        animate={{ width: progress + '%' }}
    >
    </motion.div>
  );
} 

export default ProgressBar; 