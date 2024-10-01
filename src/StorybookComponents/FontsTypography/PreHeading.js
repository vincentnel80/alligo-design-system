// PreHeading.component.js

import React from 'react';
import PropTypes from 'prop-types';

/**
 * PreHeading component for displaying headings
 * @param {Object} props - Props for the component
 * @param {string} props.text - The text to display
 * @param {1|2|3|4|5|6} props.level - The heading level
 * @param {string} props.paddingBottom - The bottom padding of the header
 * @returns {JSX.Element} The rendered header
 */
const PreHeading = ({ text, level, paddingBottom }) => {
    const Tag = `div`;
    return (
      <div>
      <Tag
        style={{ paddingBottom }}
        className="alt-label-lg"
      >
        {text}
      </Tag>
      <div style={{backgroundColor:'#F6F9FC', width: '100%', height: '20px'}}></div>
      </div>
    );
  };
  
  PreHeading.propTypes = {
    /** The text to display */
    text: PropTypes.string.isRequired,
    /** The heading level */
    //level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
    /** The bottom padding */
    paddingBottom: PropTypes.string,
  };
  
  PreHeading.defaultProps = {
   // level: 1,
    paddingBottom: '12px',
  };
  
  export default PreHeading;
