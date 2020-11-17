import React from 'react';
import { motion } from 'framer-motion';

const Title = () => {
  return (
    <motion.div className="title" initial={{opacity: 0}} animate={{opacity: 1}}>
      <h1>파이어그램</h1>
      <h2>러블리 픽쳐스</h2>
      <p>러블리한 사진을 올려주세요</p>
    </motion.div>
  )
}

export default Title;