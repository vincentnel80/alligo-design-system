// PreambleModifier.component.js

import React from 'react';
import PropTypes from 'prop-types';

/**
 * PreambleModifier component for displaying headings
 * @param {Object} props - Props for the component
 * @param {string} props.text - The text to display
 * @param {1|2|3|4|5|6} props.level - The heading level
 * @param {string} props.paddingBottom - The bottom padding of the header
 * @returns {JSX.Element} The rendered header
 */
const PreambleModifier = ({ text, level, paddingBottom }) => {
    const Tag = `span`;
    return (
      <Tag
        style={{ paddingBottom }}
        className="body-xl body-xl--preamble"
      >
        {text}
      </Tag>
    );
  };
  
  PreambleModifier.propTypes = {
    /** The text to display */
    text: PropTypes.string.isRequired,
    /** The heading level */
   // level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
    /** The bottom padding */
    paddingBottom: PropTypes.string,
  };
  
  PreambleModifier.defaultProps = {
    level: 1,
    paddingBottom: '16px',
  };
  
  export default PreambleModifier;
