import React from 'react';
import PropTypes from 'prop-types';
import './buttons-updated.scss';

/**
 * A button is used to trigger an action or to navigate to a different page. Buttons allow users to make choices, with a single tap.
 */

export const ButtonsUpdated = ({ 
  version, 
  title = 'Button Text', 
  theme = 'Swedol' ,
  background = 'Secondary'
}) => {
  // Apply conditional theme class for the background color
  const containerStyle = {
    borderLeft: `4px solid ${theme === 'Swedol' ? '#C7D300' : '#CD1125'}`,
  };

  // Conditionally render the mobile version of the blockquote when the version is 'Mobile'
  // add in demo text or not??
  if (version === 'Mobile') {
    return (
      <div className={` blockq-container blockq-container--sb-mobile bg-${background}`}>
        <div className="blockq-container-inner" style={containerStyle}>
          <div className="headline-md headline-md--blockquote">
          </div>
          <div className="bottom-text-wrapper">
            <span className="label-sm">{name}</span>
            <span className="body-sm">{title}</span>
          </div>
        </div>
      </div>
    );
  }

  // Default Desktop version
  return (
    <div className={`buttons-container bg-${background}`}>
    <div className={"equalHMVWrap eqWrap"}>
        <div className={"equalHMV eq"}>
            <button className={'button-base primary'} value={'one'}>
                <span className={'button-text label-lg'}>
                {title}
                </span>
            </button>
            <span className={'body-sm'} style={{display:'block', marginTop:'8px', opacity: '.7'}}>Primary, Default</span>
        </div>
        <div className={"equalHMV eq"}>
            <button className={'button-base primary-inverted'} value={'two'}>
                <span className={'button-text DesktopLabel-Large label-lg'}>
                {title}
                </span>
            </button>
            <span className={'body-sm'} style={{display:'block', marginTop:'8px', opacity: '.7'}}>Primary, Inverted</span>
        </div>
        <div className={"equalHMV eq"}>
            {/* Desktop Secondary Default */}
            <button className={'button-base secondary'}>
                <span className={'button-text DesktopLabel-Large label-lg'}>
                {title}
                </span>
            </button>
            <span className={'body-sm'} style={{display:'block', marginTop:'8px', opacity: '.7'}}>Secondary, Default</span>
        </div>
        <div className={"equalHMV eq"}>
            <button className={'button-base secondary-inverted'}>
                <span className={'button-text DesktopLabel-Large label-lg'}>
                {title}
                </span>
            </button>
            <span className={'body-sm'} style={{display:'block', marginTop:'8px', opacity: '.7'}}>Secondary inverted</span>
        </div>
        <div className={"equalHMV eq"}>
            <button className={'button-base blank'}>
                <span className={'button-text DesktopLabel-Large label-lg'}>
                {title}
                </span>
            </button>
            <span className={'body-sm'} style={{display:'block', marginTop:'8px', opacity: '.7'}}>Blank Default</span>
        </div>
        <div className={"equalHMV eq"}>
            <button className={'button-base blank-inverted'}>
                <span className={'button-text DesktopLabel-Large label-lg'}>
                {title}
                </span>
            </button>
            <span className={'body-sm'} style={{display:'block', marginTop:'8px', opacity: '.7'}}>Blank Inverted</span>
        </div>
    </div>

</div>
  );
};

ButtonsUpdated.propTypes = {
  version: PropTypes.string,
  title: PropTypes.string,
  buttonType: PropTypes.oneOf([
    'DefaultInitialNone',
    'primary',
    'primary-with-icon',
    'primary-inverted',
    'primary-inverted-with-icon',
    'secondary',
    'secondary-with-icon',
    'secondary-inverted',
    'secondary-inverted-with-icon',
    'blank',
    'blank-with-icon',
    'blank-inverted',
    'blank-inverted-with-icon'
  ]),
  background: PropTypes.oneOf(['Primary', 'Secondary', 'Dark']),
};


ButtonsUpdated.defaultProps = {
  title: 'Button Text',
};
