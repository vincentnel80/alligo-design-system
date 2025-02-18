import React from 'react';
import PropTypes from 'prop-types';
import './storybook/bodies-sb.scss';
import '../Spacing/storybook/spacing-sb.scss';


/**
 * Body is used for longer passages of text in the UI. 
 * Usually in order to populate paragraphs. The body style is also adjusted to be readable at smaller sizes.
 * 
 * 
 * Body X-Large is used for short intro passages of longer texts and non-recurrent text passages.
 */

export const Body = ({ 
  size = 'body-lg', 
  version = 'Desktop', 
  summary, 
  marginBottom = 'None', 
  modifier = 'None' 
}) => {
  const computedFontName = version === 'Mobile' ? `${size}-mob` : `${size}-dt`;
  const classNames = modifier !== 'None' ? `${computedFontName} ${modifier}` : computedFontName;

  return (
    <>
      <div className={`${marginBottom}-sb`}>
        <p className={classNames}>{summary}</p>
      </div>
    </>
  );
};

// TODO: Add descriptions for Storybook Doc
Body.propTypes = {
  summary: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['body-sm', 'body-md', 'body-lg', 'body-xl']),
  version: PropTypes.oneOf(['Desktop', 'Mobile']),
  modifier: PropTypes.string,
  marginBottom: PropTypes.string,
};
