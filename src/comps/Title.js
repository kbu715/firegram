import React from 'react';
import { motion } from 'framer-motion';

const Title = () => {
  return (
    <motion.div className="title" initial={{opacity: 0}} animate={{opacity: 1}}>
      <h1>FireGram</h1>
      <h2>Lovely Pictures</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </motion.div>
  )
}

export default Title;