import PropTypes from 'prop-types';
import React from 'react';

import './dot.scss';

const BadgeDotSubComponent = ({view, variants}) => <div className={'sb-page-container'}>

    <div className={'sb-display-wrapper'}>
        <div className={'sb-display-row'}>
            <div className={'sb-display-column'}>
                <div className='badge-dot dot-danger dot-large'></div>
                <div className='badge-dot dot-danger dot-medium'></div>
                <div className='badge-dot dot-danger dot-small'></div>
            </div>
            <div className={'sb-display-column'}>
                <div className='badge-dot dot-warning dot-large'></div>
                <div className='badge-dot dot-warning dot-medium'></div>
                <div className='badge-dot dot-warning dot-small'></div>
            </div>
            <div className={'sb-display-column'}>
                <div className='badge-dot dot-success dot-large'></div>
                <div className='badge-dot dot-success dot-medium'></div>
                <div className='badge-dot dot-success dot-small'></div>
            </div>
            <div className={'sb-display-column'}>
                <div className='badge-dot dot-info dot-large'></div>
                <div className='badge-dot dot-info dot-medium'></div>
                <div className='badge-dot dot-info dot-small'></div>
            </div>
            <div className={'sb-display-column'}>
                <div className='badge-dot dot-neutral dot-large'></div>
                <div className='badge-dot dot-neutral dot-medium'></div>
                <div className='badge-dot dot-neutral dot-small'></div>
            </div>
        </div>
    </div>

</div>;

/// if not present, then it causes a problem here, so seems like needed in chile but not parent???
BadgeDotSubComponent.propTypes = {
    variants: PropTypes.string,
    view: PropTypes.string,
};

export default BadgeDotSubComponent;
