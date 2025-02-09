// Header.component.js

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Header component for displaying headings
 * @param {Object} props - Props for the component
 * @param {string} props.text - The text to display
 * @param {1|2|3|4|5|6} props.level - The heading level
 * @param {string} props.paddingBottom - The bottom padding of the header
 * @returns {JSX.Element} The rendered header
 */
const Header = ({ text, level, paddingBottom }) => {
    const Tag = `h${level}`;
    return (
      <Tag
        style={{ paddingBottom }}
        className="display-lg"
      >
        {text}
      </Tag>
    );
  };
  
  Header.propTypes = {
    /** The text to display */
    text: PropTypes.string.isRequired,
    /** The heading level */
   // level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
    /** The bottom padding */
    paddingBottom: PropTypes.string,
  };
  
  Header.defaultProps = {
   // level: 1,
    paddingBottom: '16px',
  };
  
  export default Header;
