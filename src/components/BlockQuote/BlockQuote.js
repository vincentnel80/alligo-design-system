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
      <div className={`alignment-container ${alignment}`}>
      <div className="blockq-container blockq-container--sb-mobile">
        <div className="blockq-container-inner needshere">
          <div className="headline-md headline-md--blockquote">
            {summary}
          </div>
          <div className="bottom-text-wrapper">
            <span className="label-sm">{name}</span>
            <span className="body-sm">{title}</span>
          </div>
        </div>
        {/* alignment container */}
        {marginBottom && <div className={`${marginBottom}-temp`}></div>}
      </div>
      </div>
    );
  }

  // Default Desktop version
  return (
    <div className={`alignment-container ${alignment}`}>
    <div className="blockq-container blockq-container--sb-desktop">
      <div className="blockq-container-inner">
        <div className="headline-md headline-md--blockquote">
          {summary}
        </div>
        <div className="bottom-text-wrapper">
          <span className="label-sm">{name}</span>
          <span className="body-sm">{title}</span>
        </div>
      </div>
      {/* should margin be here* ?? */}
      {marginBottom && <div className={`${marginBottom}-temp`}></div>}
    </div>
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
