import PropTypes from 'prop-types';
import React from 'react';

import './number.scss';

const BadgeNumberSubComponent = ({
    view, variants,
}) => <div className={'sb-page-container'}>

    { view === 'desktop' && variants === 'number' &&

        <div className={'sb-display-wrapper'}>
            <div className={'sb-display-row'}>
                <div className={'badge-number'}>
                    <span className={'numeric-content'}>1</span>
                </div>
            </div>
            <div className={'sb-display-row'}>
                <div className={'badge-number'}>
                    <span className={'numeric-content'}>1</span>
                </div>
            </div>
            <div className={'sb-display-row'}>
                <div className={'badge-number'}>
                    <span className={'numeric-content'}>1</span>
                </div>
            </div>
            <div className={'sb-display-row'}>
                <div className={'badge-number'}>
                    <span className={'numeric-content'}>1</span>
                </div>
            </div>
        </div>
    }

    { view === 'mobile' && variants === 'number' &&

        <div className={'sb-display-wrapper'}>
            <div className={'sb-display-row'}>
                <div className={'badge-number'}>
                    <span className={'numeric-content'}>1</span>
                </div>
            </div>
            <div className={'sb-display-row'}>
                <div className={'badge-number'}>
                    <span className={'numeric-content'}>1</span>
                </div>
            </div>
            <div className={'sb-display-row'}>
                <div className={'badge-number'}>
                    <span className={'numeric-content'}>1</span>
                </div>
            </div>
            <div className={'sb-display-row'}>
                <div className={'badge-number'}>
                    <span className={'numeric-content'}>1</span>
                </div>
            </div>
        </div>
    }

</div>;

/// if not present, then it causes a problem here, so seems like needed in chile but not parent???
BadgeNumberSubComponent.propTypes = {
    variants: PropTypes.string,
    view: PropTypes.string,

};
export default BadgeNumberSubComponent;
