import React from 'react';
import PropTypes from 'prop-types';
import './storybook/headline-sb.scss';

/**
 * Headline XL, L, M or S are best-suited for short high-emphasis text. 
 * These styles can be good for marking primary passages of text or important regions of content, like headlines.
 * Headline X-Large is well suited for H1 content. 
 * 
 * Headline X-Large is never to be used in conjunction with Display Large or vice versa. Display Large always trumps Headline X-Large in a plain text context.
 */

  export const Headline = ({ 
    size = 'headline-lg', 
    version = 'Desktop', 
    summary, 
    marginBottom = 'None', 
    modifier = 'None' 
  }) => {

    const computedFontName = version === 'Mobile' ? `${size}-mob` : `${size}-dt`;
    const blockquoteClass = modifier === 'headline-md--blockquote'
      ? `${modifier}-${version === 'Mobile' ? 'mob' : 'dt'}`
      : '';
  
    const classNames = blockquoteClass
      ? `${computedFontName} ${blockquoteClass}`
      : `${computedFontName} ${modifier !== 'None' ? modifier : ''}`.trim();
  
    return (
      <>
        <div className={`${marginBottom}-sb`}>
          <div className={classNames}>{summary}</div>
        </div>
      </>
    );
  };
  

Headline.propTypes = {
  /**
   * Determines whether Desktop or Mobile styles are applied
   */
  version: PropTypes.oneOf(['Desktop', 'Mobile']),

  /**
   * Current breakpoint viewed, based on version
   */
  breakpoint: PropTypes.string,

  /**
   * Font size for the text
   */
  size: PropTypes.oneOf(['headline-sm', 'headline-md', 'headline-lg', 'headline-xl']),

  /**
   * Summary text to be displayed
   */
  summary: PropTypes.string.isRequired, // assuming summary is a required string

  /**
   * Margin bottom spacing
   */
  marginBottom: PropTypes.string,

  /**
   * Modifier that can be applied to font
   */
  modifier: PropTypes.oneOf(['None', 'headline-md--blockquote']),
};

