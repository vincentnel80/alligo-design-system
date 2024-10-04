import React from 'react';
import PropTypes from 'prop-types';
import './blockquote.scss';

export const BlockQuote = ({ 
  summary, 
  name = 'NAME SURNAME', 
  title = 'Title', 
  marginBottom = '', 
  theme = 'Swedol' 
}) => {
  // Apply conditional theme class for the background color
  const containerStyle = {
    borderLeft: `4px solid ${theme === 'Swedol' ? '#C7D300' : '#CD1125'}`,
  };

  return (
    <div className="blockq-container">
      <div className="blockq-container-inner" style={containerStyle}>
        <div className="headline-md headline-md--blockquote">
          "{summary}"
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
  summary: PropTypes.string.isRequired,
  name: PropTypes.string,
  title: PropTypes.string,
  marginBottom: PropTypes.string,
  theme: PropTypes.oneOf(['Swedol', 'Tools']),
};

BlockQuote.defaultProps = {
  name: 'NAME SURNAME',
  title: 'Title',
  theme: 'Swedol',
};
