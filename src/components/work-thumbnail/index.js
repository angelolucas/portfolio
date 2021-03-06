import React from 'react';
import ReactGA from 'react-ga';
import { Link } from 'react-router';

function WorkThumbnail(props) {
  function handleClick(categoryValue, actionValue, labelValue) {
    ReactGA.event({
      category: categoryValue,
      action: actionValue,
      label: labelValue,
    });
  }
  return (
    <li className="work-thumbnail">
      <div className="work-thumbnail__window">
        <img className="work-thumbnail__image" src={props.image} alt="thumbnail" />
        { props.detail &&
        <img className="work-thumbnail__detail" src={props.detail} alt="" />
        }
      </div>
      <h3 className="work-thumbnail__title">{props.title}</h3>
      <p className="work-thumbnail__category">{props.category}</p>
      <Link
        className="work-thumbnail__link"
        to={props.link}
        onClick={() => { handleClick('Thumbnail', 'Click', props.title); }}
      >
        See
      </Link>
    </li>
  );
}

WorkThumbnail.propTypes = {
  title: React.PropTypes.string,
  category: React.PropTypes.string,
  link: React.PropTypes.string,
  image: React.PropTypes.string,
  detail: React.PropTypes.string,
};

export default WorkThumbnail;
