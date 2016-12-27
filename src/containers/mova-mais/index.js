import React, { Component } from 'react';
import { Link } from 'react-router';

import Navigation from '../../components/navigation';
import BackToTop from '../../components/back-to-top';

class MovaMais extends Component {
  componentDidMount() {
    document.body.classList.add('single-work-active');
  }
  componentWillUnmount() {
    document.body.classList.remove('single-work-active');
  }
  render() {
    const workid = 1;

    return (
      <main>
        <div className="content mova-mais">
          <div className="single-work__hero" />
          <h2 className="single-work__title">Mova Mais</h2>
          <p>lorem ipsum</p>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random</p>
          <p>text. It has roots in a piece of classical Latin literature fro</p>
          <p>BC, making it over 2000 years old. Richard McClintock, a Latin </p>
          <p>professor at Hampden-Sydney College in Virginia, looked up one </p>
          <p>the more obscure Latin words, consectetur, from a Lorem Ipsum </p>
          <p>passage, and going through the cites of the word in classical </p>
          <p>literature, discovered the undoubtable source. Lorem Ipsum come</p>
          <p>from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et </p>
          <p>The Extremes of Good and Evil) by Cicero, written in 45 BC. </p>
          <p>book is a reatise on the theory of ethics, very popular during </p>
          <p>Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor </p>
          <p>amet.., comes from a line in section 1.10.32.</p>
        </div>
        <Link className="single-work__back" to="/">
          Back
          <div />
        </Link>
        <Navigation workid={workid} />
        <BackToTop />
      </main>
    );
  }
}

export default MovaMais;
