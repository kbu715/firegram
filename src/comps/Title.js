import React from 'react';
import { motion } from 'framer-motion';

const Title = () => {
  return (
    <motion.div className="title" initial={{opacity: 0}} animate={{opacity: 1}}>
      <h1>Firegram</h1>
      <h2>Lovely Pictures</h2>
      <p>Il ne reste que des photos.</p>
    </motion.div>
  )
}

export default Title;