import React, { Component } from 'react';
import Navigation from '../../components/navigation';

class davidyurman extends Component {
  componentDidMount() {
    document.body.classList.add('single-work-active');  
  }
  componentWillUnmount() {
    document.body.classList.remove('single-work-active');
  }
  render() {
    const workid = 4;

    return (
      <div className="davidyurman">
        <div className="content">
          <h2 className="single-work__title">David Yurman</h2>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
        </div>
        <Navigation workid={workid}></Navigation>
      </div>
    );
  }
}

export default davidyurman;
