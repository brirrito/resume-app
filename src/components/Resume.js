import React, { Component } from 'react';
import LeftBar from './LeftBar';
import Intro from './Intro';
import Education from './Education';
import Experience from './Experience';


class Resume extends Component {
  render() {
    return (
      <div id="Resume">
        <LeftBar />
        <main>
          <Intro />
          <Education />
          <Experience />
        </main>
      </div>
    )
  }
}

export default Resume;