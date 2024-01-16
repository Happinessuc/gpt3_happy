import React from 'react';
import { Feature } from '../../components';
import './whatGPT3.css';

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT-3" text="Not minding how hard things get, its understandable to know that great things doesn't come easy. This is to highlight the fact that hardwork is all it takes to acquire everything we have ever desired. Als, allow your mind to think out great things." />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
        <Feature title="Knowledgebase" text="At juncture friends me message as delight. Whole front do of plate heard oh impossible own apartments." />
        <Feature title="Education" text="At juncture friends me message as delight. Whole front do of plate heard oh impossible own apartments." />
      </div>
    </div>
  )
}

export default WhatGPT3;
