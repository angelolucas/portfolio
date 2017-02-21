import React from 'react';

import WorkPage from '../work-page';

import WorkHead from '../../components/work-head';

// Assets
import caixaNasRuas from './media/caixa-nas-ruas.svg';
import workHeadImage from './media/work-head.jpg';
import mockup from './media/mockup.png';
import mockupMin from './media/mockup-min.png';
import siteMap from './media/site-map.png';
import siteMapMin from './media/site-map-min.png';
import dashboard from './media/dashboard.png';
import dashboardMin from './media/dashboard-min.png';
import team from './media/team.png';
import teamMin from './media/team-min.png';
import shield1 from './media/shield1.png';
import shield2 from './media/shield2.png';
import shield3 from './media/shield3.png';
import events from './media/events.png';
import eventsMin from './media/events-min.png';
import editorial from './media/editorial.png';
import editorialMin from './media/editorial-min.png';
import store from './media/store.png';
import storeMin from './media/store-min.png';
import mobile from './media/mobile.png';
import mobileMin from './media/mobile-min.png';
import colors from './media/colors.png';
import types from './media/types.png';
import result1 from './media/result1.svg';
import result2 from './media/result2.svg';
import result3 from './media/result3.svg';
import result4 from './media/result4.svg';
import result5 from './media/result5.svg';
import mockup2 from './media/mockup2.jpg';
import mockup2Min from './media/mockup2-min.jpg';

function Section() {
  return (
    <section className="cnr">

      {/*
        Work Head
        Disabled for small devices
      */}
      { window.innerWidth >= 480 &&
        <WorkHead
          name="cnr"
          title="Caixa Nas Ruas"
          category="web desktop & mobile"
          color="#a0a8ab"
          src={workHeadImage}
          type="image"
        />
      }

      {/* Intro */}
      <div className="work-intro">
        <div className="container">
          <img className="work-intro__logo" src={caixaNasRuas} width="281" alt="Caixa Nas Ruas" />
          <h2>Concept</h2>
          <h3 className="work-intro__subtitle">Your well-being begins In the Streets.</h3>
          <p className="work-intro__description">The Caixa Nas Ruas program encourages users’ engagement by motivating a regular practice of physical activities through content, sense of belonging, social stimulation, and relationship program.</p>
        </div>
      </div>

      {/* Mockup */}
      <div className="container container--full">
        <picture>
          <source srcSet={mockupMin} media="(max-width: 480px)" />
          <img src={mockup} alt="" />
        </picture>
      </div>

      {/* Objective */}
      <div className="work-objective work-objective--cnr">
        <div className="container">
          <h2>Objective</h2>
          <p>Draw a simple, user-friendly platform that encourages health and quality of life, promoting the practice of sports in a healthy way with prizes.</p>
        </div>
      </div>

      {/* Step 01 */}
      <div className="work-step work-step--cnr01">
        <div className="container">
          <h3 className="work-step__title">Site Map</h3>
          <picture>
            <source srcSet={siteMapMin} media="(max-width: 480px)" />
            <img src={siteMap} alt="Site Map" />
          </picture>
        </div>
      </div>

      {/* Step 02 */}
      <div className="work-step work-step--cnr02">
        <div className="container">
          <h3 className="work-step__title">Pages</h3>
          <h4>Dashboard</h4>
          <p className="work-step__description">Center for performance measurement of each participant with detailed data about train perseverance, individual goals, and displaying of quantitative and qualitative data.</p>
        </div>
        <div className="container container--full">
          <picture>
            <source srcSet={dashboardMin} media="(max-width: 480px)" />
            <img src={dashboard} alt="Dashboard Page" />
          </picture>
        </div>
        <div className="container">
          <h4>Teams</h4>
          <p className="work-step__description">Teams have the mission of mutual cooperation, and their setting up is established by the users themselves. Each team has a motto and a coat for identification.</p>
        </div>
        <div className="container container--full">
          <picture>
            <source srcSet={teamMin} media="(max-width: 480px)" />
            <img src={team} alt="Team Page" />
          </picture>
        </div>
        <div className="container">
          <div className="cnr__shields">
            <img src={shield1} alt="Shield1" />
            <img src={shield2} alt="Shield2" />
            <img src={shield3} alt="Shield3" />
          </div>
          <h4>Events</h4>
          <p className="work-step__description">Displaying the race calendar with encouraging browsing, promoting people’s participation in these events through the platform.</p>
        </div>
        <div className="container container--full">
          <picture>
            <source srcSet={eventsMin} media="(max-width: 480px)" />
            <img src={events} alt="events" />
          </picture>
        </div>
        <div className="container">
          <h4>Editorial</h4>
          <p className="work-step__description">The program content has a motivating nature, aiming to encourage people to stay away from a sedentary lifestyle through good examples, inspiration, and each person’s willingness. Helping practitioners to remove motivational and technical obstacles that hinder the beginning or evolution in the practice of a sport.</p>
        </div>
        <div className="container container--full">
          <picture>
            <source srcSet={editorialMin} media="(max-width: 480px)" />
            <img src={editorial} alt="events" />
          </picture>
        </div>
        <div className="container">
          <h4>Store</h4>
          <p className="work-step__description">Showcasing products available to trade using points collected on the platform according to your performance.</p>
        </div>
        <div className="container container--full">
          <picture>
            <source srcSet={storeMin} media="(max-width: 480px)" />
            <img src={store} alt="store" />
          </picture>
        </div>
      </div>

      {/* Step 03 */}
      <div className="work-step work-step--cnr03">
        <div className="container">
          <h3 className="work-step__title">Mobile</h3>
        </div>
        <div className="container container--full">
          <picture>
            <source srcSet={mobileMin} media="(max-width: 480px)" />
            <img src={mobile} alt="mobile" />
          </picture>
        </div>
      </div>

      {/*
        Guideline
        Disabled for small devices
      */}
      { window.innerWidth >= 480 &&
        <div className="work-step work-step--cnr04 work-guideline hide-viewport--min">
          <div className="container">
            <h3 className="work-step__title">Guideline</h3>
            <img src={colors} alt="colors" />
            <img src={types} alt="types" />
          </div>
        </div>
      }

      {/* Step 05 */}
      <div className="work-step work-step--cnr05 work-results">
        <div className="container">
          <h3 className="work-step__title">Results</h3>
          <ul>
            <li>
              <img width="42" src={result1} alt="" />
              <h5 className="work-results__title">3.5 millions</h5>
              <p>miles traveled</p>
            </li>
            <li>
              <img width="42" src={result2} alt="" />
              <h5 className="work-results__title">144</h5>
              <p>corresponding turns around the Earth</p>
            </li>
            <li>
              <img width="37" src={result3} alt="" />
              <h5 className="work-results__title">1 million</h5>
              <p>exercising hours</p>
            </li>
            <li>
              <img width="34" src={result4} alt="" />
              <h5 className="work-results__title">415 millions</h5>
              <p>calories burned off</p>
            </li>
            <li>
              <img width="31" src={result5} alt="" />
              <h5 className="work-results__title">11 billions</h5>
              <p>number of steps</p>
            </li>
          </ul>
        </div>
      </div>

      {/*
        Mockup
        Static for small and medium devices
        Fixed for greater than med devices
      */}
      { window.innerWidth < 960 ? (
        <img className="image-full" src={mockup2Min} alt="" />
      ) : (
        <div className="fixed-image">
          <div className="fixed-image__image" style={{ backgroundImage: `url(${mockup2})` }} />
        </div>
      )}
    </section>
  );
}

function CaixaNasRuas() {
  return (
    <WorkPage
      section={Section()}
      name="cnr"
      position={2}
      theme="light"
    />
  );
}

export default CaixaNasRuas;
