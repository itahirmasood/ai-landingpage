import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatisAI.css';

const WhatisAI = () => (
  <div className="whatisAI section__margin" id="whatisAI">
    <div className="whatisAI-feature">
      <Feature title="What is A.I.?" text="Artificial intelligence is intelligence demonstrated by machines, as opposed to natural intelligence displayed by animals including humans." />
    </div>
    <div className="whatisAI-heading">
      <h1 className="gradient__text">An Era of Machines & Intelligence</h1>
    </div>
    <div className="whatisAI-container">
      <Feature title="Computer Vision" text="Computer vision is an interdisciplinary scientific field that deals with how computers can gain high-level understanding from digital images or videos." />
      <Feature title="Machine Learning" text="Machine learning is the study of computer algorithms that can improve automatically through experience and by the use of data. It is seen as a part of artificial intelligence." />
      <Feature title="Deep Learning" text="Deep learning is part of a broader family of machine learning methods based on artificial neural networks with representation learning. " />
    </div>
  </div>
);

export default WhatisAI;
