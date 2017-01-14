// Dependencies
import React from 'react';
import MatchWithFade from '../../components/match-with-fade';

// Works
import MovaMais from '../mova-mais';
import CaixaNasRuas from '../caixa-nas-ruas';
import BBPrivete from '../bb-privete';
import DavidYurman from '../david-yurman';
import Encinter from '../encinter';
import Emicida from '../emicida';

// Pre load media
import posterMovaMais from '../mova-mais/media/video-poster.jpg';
import posterCaixaNasRuas from '../caixa-nas-ruas/media/work-head.jpg';
import posterBBPrivete from '../bb-privete/media/work-head.jpg';
import posterEncinter from '../encinter/media/work-head.jpg';
import videoMovaMais from '../mova-mais/media/video.mp4';
import videoEmicida from '../emicida/media/video.mp4';
import videoDavidYurman from '../david-yurman/media/video.mp4';

function WorkPreLoader() {
  return (
    <div className="work-page">
      <MatchWithFade pattern="/mova-mais" component={MovaMais} />
      <MatchWithFade pattern="/caixa-nas-ruas" component={CaixaNasRuas} />
      <MatchWithFade pattern="/bb-privete" component={BBPrivete} />
      <MatchWithFade pattern="/david-yurman" component={DavidYurman} />
      <MatchWithFade pattern="/encinter" component={Encinter} />
      <MatchWithFade pattern="/emicida" component={Emicida} />

      <div style={{ display: 'none' }}>
        <img src={posterMovaMais} alt="" />
        <img src={posterCaixaNasRuas} alt="" />
        <img src={posterBBPrivete} alt="" />
        <img src={posterEncinter} alt="" />
        <video src={videoMovaMais} />
        <video src={videoEmicida} />
        <video src={videoDavidYurman} />
      </div>
    </div>
  );
}

export default WorkPreLoader;
