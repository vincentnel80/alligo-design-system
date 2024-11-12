import React from 'react';
import PropTypes from 'prop-types';
import './display.scss';

/**
 * Display styles are intended for short, prominent text or numerals, helping to emphasize important content and establish clear hierarchy. These styles are particularly effective when used in banners, campaign headlines, or any content that needs to capture attention. They can also be embedded within specific UI regions or components to delineate sections of content, such as banners or featured areas. However, it's important to use these styles sparingly to avoid overwhelming the design.
 * Display Large is typically used to present H1 content, especially at the top of a page or article. It is crucial to maintain consistency by never using Display Large in combination with Headline X-Large, as each serves a distinct role in the visual hierarchy.
*/


// if i dont add these, then it always comes back as undefined - why

  export const Display = ({ 
    version = 'Desktop', 
    size = 'display-lg', 
    summary, 
    marginBottom = 'None', 
    modifier = 'None' 
  }) => {
    // Conditionally apply the -mob or -dt suffix for mobile or desktop version
    const computedSize = version === 'Mobile' ? `${size}-mob` : `${size}-dt`;
    
    // Combine font name with the modifier (if any)
    const classNames = `${computedSize} ${modifier} ${marginBottom}`;
  
    return (
      <>
        <p className={classNames}>{summary}</p>
        <div className={`${marginBottom}-temp`}></div>
      </>
    );
  };

  Display.propTypes = {
    /**
     * Summary text to be displayed
     */
    summary: PropTypes.string.isRequired, // assuming summary is a required string

  
    /**
     * Additional property A, type can vary based on usage
     */
  
    /**
     * Padding value for the component
     */
   //padding: PropTypes.string, // assuming padding is an optional string like '10px'
  };

// add shir here, or in title???
/*Title.defaultProps = {
  backgroundColor: 'transparent',
 // textColor: '#000',
  //fontSize: '14px / 16px',
 // separator: '/',
}; */
