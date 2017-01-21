import React from 'react';

import WorkPage from '../work-page';

import WorkHead from '../../components/work-head';

// Assets
import video from './media/video.mp4';
import logo from './media/logo.png';
import mockup from './media/mockup.png';
import siteMap from './media/site-map.png';
import homePage from './media/home-page.png';
import editorial from './media/editorial.png';
import biography from './media/biography.png';
import agenda from './media/agenda.png';
import discography from './media/discography.png';
import photosGallery from './media/photos-gallery.png';
import contact from './media/contact.png';
import navigation from './media/navigation.png';

function Section() {
  return (
    <section className="mcd">

      {/* Hero Image */}
      <WorkHead
        title="Emicida"
        category="web mobile"
        color="black"
        src={video}
        type="video"
      />

      {/* Intro */}
      <div className="work-intro">
        <div className="container">
          <img src={logo} width="180" alt="David Yurman" />
          <h2>Concept</h2>
          <h3 className="work-intro__subtitle">E.M.I.C.I.D.A<br /> &quot;Enquanto Minha Imaginação Compuser Insanidades Domino a Arte&quot;</h3>
          <p className="work-intro__description">Site institucional do rapper e produtor musical brasileiro Emicida. Considero uma das maiores revelações do hip hop do Brasil. Famoso por suas constantes vitórias nas batalhas do improvi</p>
        </div>
      </div>

      {/* Mockup */}
      <div className="container container--full">
        <img src={mockup} alt="" />
      </div>

      <div className="mcd-patter mcd-patter--1" />

      {/* Objective */}
      <div className="work-objective">
        <div className="container">
          <h2>Objective</h2>
          <p>Fazer com que a experiência do site móvel seja completa e amigável, permitindo que o usuário conheça o artista, sua obra, tragetória e tenha acesso a sua agenda de maneira acessível e intuitiva.</p>
        </div>
      </div>

      {/* Site map */}
      <div className="work-sitemap">
        <div className="container">
          <h2>Site Map</h2>
          <img src={siteMap} alt="Site Map" />
        </div>
      </div>

      <div className="mcd-patter mcd-patter--2" />

      {/* Pages */}
      <div className="work-pages">
        <div className="container">
          <ul className="chess-list chess-list--align-top">
            <li>
              <div>
                <img src={homePage} alt="Home Page" />
              </div>
              <div className="chess-list__info">
                <h4 className="chess-list__title">Home Page</h4>
                <p>Slideshow de início com os principais destaques do site. Em sequida boxes representando cada área do site. Abaixo as redes sociais do MC.</p>
              </div>
            </li>
            <li>
              <div>
                <img src={editorial} alt="Editorial" />
              </div>
              <div className="chess-list__info">
                <h4 className="chess-list__title">Editorial</h4>
                <p>Área de conteúdo, onde permite que o artista apresente suas objeções, filosofias  e ideais de vida de forma mais produnda.</p>
              </div>
            </li>
            <li>
              <div>
                <img src={biography} alt="Biography" />
              </div>
              <div className="chess-list__info">
                <h4 className="chess-list__title">Biography</h4>
                <p>Nessa página é possível conhecer melhor sua tragetória de vida, início de carreira e suas influências. Aqui também é exibido os sua equipe de trabalho.</p>
              </div>
            </li>
            <li>
              <div>
                <img src={agenda} alt="Agenda" />
              </div>
              <div className="chess-list__info">
                <h4 className="chess-list__title">Agenda</h4>
                <p>Exposição de todos os compromissos e shows do rapper. É possível filtrar por mês.</p>
              </div>
            </li>
            <li>
              <div>
                <img src={discography} alt="Discography" />
              </div>
              <div className="chess-list__info">
                <h4 className="chess-list__title">Discography</h4>
                <p>Nessa página é possível conhecer toda sua obra, ter acesso as músicas dos álbuns e acessar as plataformas de compra e streaming.</p>
              </div>
            </li>
            <li>
              <div>
                <img src={photosGallery} alt="Gallery" />
              </div>
              <div className="chess-list__info">
                <h4 className="chess-list__title">Photos Gallery</h4>
                <p>Galeria de fotos e vídeos de shows, clipes, e até aquivos pessoais.</p>
              </div>
            </li>
            <li>
              <div>
                <img src={contact} alt="Contact" />
              </div>
              <div className="chess-list__info">
                <h4 className="chess-list__title">Contact</h4>
                <p>Emails para contato, assessoria de impresa e link da gravadora.</p>
              </div>
            </li>
            <li>
              <div>
                <img src={navigation} alt="Navigation" />
              </div>
              <div className="chess-list__info">
                <h4 className="chess-list__title">Navigation</h4>
                <p>Menu simples e elegante que dá acesso a todas as páginas do site.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="mcd-patter mcd-patter--3" />

    </section>
  );
}

function Emicida() {
  return <WorkPage section={Section()} position={6} />;
}

export default Emicida;
