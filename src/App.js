import React, { useState } from 'react';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';

function App() {

  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} setSelectedId={setSelectedId} />
      {selectedImg && <Modal setSelectedImg={setSelectedImg} selectedImg={selectedImg} selectedId={selectedId} />}
    </div>
  );
}

export default App;
