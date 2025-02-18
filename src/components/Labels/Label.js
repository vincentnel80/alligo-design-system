import React from 'react';
import PropTypes from 'prop-types';
import './storybook/labels-sb.scss';

/**
* Labels are smaller, utilitarian styles, used for things like the text inside components, text inside buttons, labeling form fields and user info.
* Label styles are a bolder version of Alt-Label and therefore higher empasis than the Alt version.
*/

export const Label = ({ 
  size = 'label-lg', 
  version = 'Desktop', 
  summary, 
  marginBottom = 'None', 
  modifier = 'None' 
}) => {

  const computedFontName = version === 'Mobile' ? `${size}-mob` : `${size}-dt`;
  const allowedModifier = 
    size === 'label-lg' && modifier === 'label-lg--underline'
      ? modifier
      : size === 'label-sm' && modifier === 'label-sm--badge'
      ? modifier
      : 'None';

  const classNames = allowedModifier !== 'None' 
    ? `${computedFontName} ${allowedModifier}-${version === 'Mobile' ? 'mob' : 'dt'}`
    : computedFontName;

  return (
    <>
      <div className={`${marginBottom}-sb`}>
        <div className={`${size} ${classNames} ${marginBottom}`}>{summary}</div>
      </div>
    </>
  );
};

Label.propTypes = {
  /**
   * Viewport, determines whether Desktop or Mobile styles are applied
   */
  version: PropTypes.oneOf(['Desktop', 'Mobile']),
  /**
   * Font size for the body text
   */
  size: PropTypes.oneOf(['label-sm', 'label-md', 'label-lg']),
  /**
   * Summary text to be displayed
   */
  summary: PropTypes.string.isRequired, // assuming summary is a required string
  /**
   * Modifier class for additional styling (e.g., bold, italic, etc.)
   */
  modifier: PropTypes.string,
  /**
   * Margin bottom spacing
   */
  marginBottom: PropTypes.string,
};
