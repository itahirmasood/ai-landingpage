import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Facial Recognition',
    text: 'Artificial Intelligence has made it possible to recognize individual faces using biometric mapping.',
  },
  {
    title: ' Automate Simple and Repetitive Tasks',
    text: 'AI has the ability to execute the same kind of work over and over again without breaking a sweat. To understand this feature better, let’s take the example of Siri, a voice-enabled assistant created by Apple Inc.',
  },
  {
    title: 'Quantum Computing',
    text: 'AI is helping solve complex quantum physics problems with the accuracy of supercomputers with the help of quantum neural networks.',
  },
  {
    title: 'Cloud Computing',
    text: 'AI capabilities are working within the business cloud computing environment to make organizations more efficient, strategic, and insight-driven.',
  },
];

const Features = () => (
  <div className="features section__padding" id="features">
    <div className="features-heading">
      <h1 className="gradient__text">“Our intelligence is what makes us human, and AI is an extension of that quality.”</h1>
    </div>
    <div className="features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
