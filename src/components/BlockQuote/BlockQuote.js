import React from 'react';
import PropTypes from 'prop-types';
import './blockquote.scss';

/**
 * A blockquote refers to a cited quotation that is visually distinguished from the primary text on a page.
 */

export const BlockQuote = ({ 
  version, 
  summary, 
  name = 'Name Surname', 
  title = 'Title', 
  marginBottom = '', 
  theme = 'Swedol' ,
  alignment = 'left',
}) => {
  // Apply conditional theme class for the background color
  const containerStyle = {
    borderLeft: `4px solid ${theme === 'Swedol' ? '#C7D300' : '#CD1125'}`,
  };

  // Conditionally render the mobile version of the blockquote when the version is 'Mobile'
  // add in demo text or not??
  if (version === 'Mobile') {
    return (
      <div className="blockq-container blockq-container--sb-mobile"  style={{alignment}}>
        <div className="blockq-container-inner" style={containerStyle}>
          <div className="headline-md headline-md--blockquote">
            {summary}
          </div>
          <div className="bottom-text-wrapper">
            <span className="label-sm">{name}</span>
            <span className="body-sm">{title}</span>
          </div>
        </div>
        {marginBottom && <div className={`${marginBottom}-temp`}></div>}
      </div>
    );
  }

  // Default Desktop version
  return (
    <div className="blockq-container blockq-container--sb-desktop" style={{alignment}}>
      <div className="blockq-container-inner" style={containerStyle}>
        <div className="headline-md headline-md--blockquote">
          {summary}
        </div>
        <div className="bottom-text-wrapper">
          <span className="label-sm">{name}</span>
          <span className="body-sm">{title}</span>
        </div>
      </div>
      {marginBottom && <div className={`${marginBottom}-temp`}></div>}
    </div>
  );
};

BlockQuote.propTypes = {
  version: PropTypes.string,
  summary: PropTypes.string.isRequired,
  name: PropTypes.string,
  title: PropTypes.string,
  marginBottom: PropTypes.string,
  alignment: PropTypes.oneOf(['left','center', 'right']),
  theme: PropTypes.oneOf(['Swedol', 'Tools']),
};

BlockQuote.defaultProps = {
  name: 'Name Surname',
  title: 'Title',
  theme: 'Swedol',
  alignment: 'left',
};
