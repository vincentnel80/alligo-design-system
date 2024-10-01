import PropTypes from 'prop-types';
import React from 'react';

/// why does it work if i put it here (on all components ... but components loose their stuff afterwards
import '../badges-layouts.scss';
import './basic.scss';

const handleClick = (event, id) => {
    const clickedElement = event.currentTarget;
    console.log(event, "eventeventeventevent");
    console.log(id, "ididididid");
    console.log(`Clicked element id: ${clickedElement.id}`);
};
const BadgeBasicSubComponent = ({
    view, variants,
}) => <div className={'sb-page-container'}>

    { view === 'desktop' && variants === 'basic' &&
        <div className={'some-page-wrapper'}>
            <div className={'sb-display-row'}>
                <div className={'sb-display-column'}>
                    <div className={'badge-basic variant-neutral-default'} id={'element1'} onClick={handleClick}>
                        <span className={'badge-message'}>Neutral</span>
                    </div>
                    <div className={'badge-basic variant-neutral-medium'} id={'element2'} onClick={handleClick}>
                        <span className={'badge-message'}>Neutral</span>
                    </div>
                    <div className={'badge-basic variant-neutral-light'} id={'element3'} onClick={handleClick}>
                        <span className={'badge-message'}>Neutral</span>
                    </div>
                </div>
                <div className={'sb-display-column'}>
                    <div className={'badge-basic variant-info-default'}>
                        <span className={'badge-message'}>Info</span>
                    </div>
                    <div className={'badge-basic variant-info-medium'}>
                        <span className={'badge-message'}>Info</span>
                    </div>
                    <div className={'badge-basic variant-info-light'}>
                        <span className={'badge-message'}>Info</span>
                    </div>
                </div>
                <div className={'sb-display-column'}>
                    <div className={'badge-basic variant-success-default'}>
                        <span className={'badge-message'}>Success</span>
                    </div>
                    <div className={'badge-basic variant-success-medium'}>
                        <span className={'badge-message'}>Success</span>
                    </div>
                    <div className={'badge-basic variant-success-light'}>
                        <span className={'badge-message'}>Success</span>
                    </div>
                </div>
                <div className={'sb-display-column'}>
                    <div className={'badge-basic variant-warning-default'}>
                        <span className={'badge-message'}>Warning</span>
                    </div>
                    <div className={'badge-basic variant-warning-medium'}>
                        <span className={'badge-message'}>Warning</span>
                    </div>
                    <div className={'badge-basic variant-warning-light'}>
                        <span className={'badge-message'}>Warning</span>
                    </div>
                </div>
                <div className={'sb-display-column'}>
                    <div className={'badge-basic variant-danger-default'}>
                        <span className={'badge-message'}>Danger</span>
                    </div>
                    <div className={'badge-basic variant-danger-medium'}>
                        <span className={'badge-message'}>Danger</span>
                    </div>
                    <div className={'badge-basic variant-danger-light'}>
                        <span className={'badge-message'}>Danger</span>
                    </div>
                </div>
            </div>
        </div>
    }

    { view === 'desktop' && variants === 'basic-icon' &&
        <div className='sb-display-wrapper'>
            <div className='sb-display-row'>
                <div className='sb-display-column'>
                    <div className={'badge-basic variant-info-default badge-icon'}>
                        <i className={'material-symbols-outlined'}>info</i>
                        <span className={'badge-message'}>Info</span>
                    </div>
                    <div className={'badge-basic variant-info-medium badge-icon'}>
                        <i className={'material-symbols-outlined'}>info</i>
                        <span className={'badge-message'}>Info</span>
                    </div>
                    <div className={'badge-basic variant-info-light badge-icon'}>
                        <i className={'material-symbols-outlined'}>info</i>
                        <span className={'badge-message'}>Info</span>
                    </div>
                </div>
                <div className='sb-display-column'>
                        <div className={'badge-basic variant-success-default badge-icon'}>
                        <i className={'material-symbols-outlined'}>check_circle</i>
                        <span className={'badge-message'}>Success</span>
                    </div>
                    <div className={'badge-basic variant-success-medium badge-icon'}>
                        <i className={'material-symbols-outlined'}>check_circle</i>
                        <span className={'badge-message'}>Success</span>
                    </div>
                    <div className={'badge-basic variant-success-light badge-icon'}>
                        <i className={'material-symbols-outlined'}>check_circle</i>
                        <span className={'badge-message'}>Success</span>
                    </div>
                </div>
                <div className='sb-display-column'>
                    <div className={'badge-basic variant-warning-default badge-icon'}>
                        <i className={'material-symbols-outlined'}>warning</i>
                        <span className={'badge-message'}>Warning</span>
                    </div>
                    <div className={'badge-basic variant-warning-medium badge-icon'}>
                        <i className={'material-symbols-outlined'}>warning</i>
                        <span className={'badge-message'}>Warning</span>
                    </div>
                    <div className={'badge-basic variant-warning-light badge-icon'}>
                        <i className={'material-symbols-outlined'}>warning</i>
                        <span className={'badge-message'}>Warning</span>
                    </div>
                </div>
                <div className='sb-display-column'>
                    <div className={'badge-basic variant-danger-default badge-icon'}>
                        <i className={'material-symbols-outlined'}>error</i>
                        <span className={'badge-message'}>Danger</span>
                    </div>
                    <div className={'badge-basic variant-danger-medium badge-icon'}>
                        <i className={'material-symbols-outlined'}>error</i>
                        <span className={'badge-message'}>Danger</span>
                    </div>
                    <div className={'badge-basic variant-danger-light badge-icon'}>
                        <i className={'material-symbols-outlined'}>error</i>
                        <span className={'badge-message'}>Danger</span>
                    </div>
                </div>
            </div>
        </div>
    }


    {/* Only SB related to Mobile IE Not used in usual */}
    {/* put those below only */}
    { view === 'mobile' && variants === 'basic' &&

        <div className={'some-page-wrapper'}>
            <div className={'sb-display-row'}>
                <div className={'sb-display-column'}>
                        <div className={'badge-basic badge-basic-sb-mobile'}>
                            <span className={'badge-message'}>Neutral</span>
                        </div>
                        <div className={'badge-basic badge-basic-sb-mobile variant-neutral-medium'}>
                            <span className={'badge-message'}>Neutral</span>
                        </div>

                        <div className={'badge-basic badge-basic-sb-mobile variant-neutral-light'}>
                            <span className={'badge-message'}>Neutral</span>
                        </div>
                </div>
                <div className={'sb-display-column'}>
                        <div className={'badge-basic badge-basic-sb-mobile variant-info-default'}>
                            <span className={'badge-message'}>Info</span>
                        </div>

                        <div className={'badge-basic badge-basic-sb-mobile variant-info-medium'}>
                            <span className={'badge-message'}>Info</span>
                        </div>

                        <div className={'badge-basic badge-basic-sb-mobile variant-info-light'}>
                            <span className={'badge-message'}>Info</span>
                        </div>
                </div>
                <div className={'sb-display-column'}>
                        <div className={'badge-basic badge-basic-sb-mobile variant-success-default'}>
                            <span className={'badge-message'}>Success</span>
                        </div>

                        <div className={'badge-basic badge-basic-sb-mobile variant-success-medium'}>
                            <span className={'badge-message'}>Success</span>
                        </div>

                        <div className={'badge-basic badge-basic-sb-mobile variant-success-light'}>
                            <span className={'badge-message'}>Success</span>
                        </div>
                </div>
                <div className={'sb-display-column'}>
                        <div className={'badge-basic badge-basic-sb-mobile variant-warning-default'}>
                            <span className={'badge-message'}>Warning</span>
                        </div>

                        <div className={'badge-basic badge-basic-sb-mobile variant-warning-medium'}>
                            <span className={'badge-message'}>Warning</span>
                        </div>

                        <div className={'badge-basic badge-basic-sb-mobile variant-warning-light'}>
                            <span className={'badge-message'}>Warning</span>
                        </div>
                </div>
                <div className={'sb-display-column'}>
                        <div className={'badge-basic badge-basic-sb-mobile variant-danger-default'}>
                            <span className={'badge-message'}>Danger</span>
                        </div>

                        <div className={'badge-basic badge-basic-sb-mobile variant-danger-medium'}>
                            <span className={'badge-message'}>Danger</span>
                        </div>

                        <div className={'badge-basic badge-basic-sb-mobile variant-danger-light'}>
                            <span className={'badge-message'}>Danger</span>
                        </div>
                </div>
            </div>
        </div>
    }

    {/* Info text*/}
    { view === 'mobile' && variants === 'basic-icon' &&

        <div className={'some-page-wrapper'}>
            <div className={'sb-display-row'}>
                <div className={'sb-display-column'}>
                    <div className={'badge-basic badge-basic-sb-mobile variant-info-default badge-icon'}>
                        <i className={'material-symbols-outlined'}>info</i>
                        <span className={'badge-message'}>Info</span>
                    </div>
                    <div className={'badge-basic badge-basic-sb-mobile variant-info-medium badge-icon'}>
                        <i className={'material-symbols-outlined'}>info</i>
                        <span className={'badge-message'}>Info</span>
                    </div>
                    <div className={'badge-basic badge-basic-sb-mobile variant-info-light badge-icon'}>
                        <i className={'material-symbols-outlined'}>info</i>
                        <span className={'badge-message'}>Info</span>
                    </div>
                </div>
                <div className={'sb-display-column'}>
                    <div className={'badge-basic badge-basic-sb-mobile variant-success-default badge-icon'}>
                        <i className={'material-symbols-outlined'}>check_circle</i>
                        <span className={'badge-message'}>Success</span>
                    </div>
                    <div className={'badge-basic badge-basic-sb-mobile variant-success-medium badge-icon'}>
                        <i className={'material-symbols-outlined'}>check_circle</i>
                        <span className={'badge-message'}>Success</span>
                    </div>
                    <div className={'badge-basic badge-basic-sb-mobile variant-success-light badge-icon'}>
                        <i className={'material-symbols-outlined'}>check_circle</i>
                        <span className={'badge-message'}>Success</span>
                    </div>
                </div>
                <div className={'sb-display-column'}>
                    <div className={'badge-basic badge-basic-sb-mobile variant-warning-default badge-icon'}>
                        <i className={'material-symbols-outlined'}>warning</i>
                        <span className={'badge-message'}>Warning</span>
                    </div>
                    <div className={'badge-basic badge-basic-sb-mobile variant-warning-medium badge-icon'}>
                        <i className={'material-symbols-outlined'}>warning</i>
                        <span className={'badge-message'}>Warning</span>
                    </div>
                    <div className={'badge-basic badge-basic-sb-mobile variant-warning-light badge-icon'}>
                        <i className={'material-symbols-outlined'}>warning</i>
                        <span className={'badge-message'}>Warning</span>
                    </div>
                </div>
                <div className={'sb-display-column'}>
                    <div className={'badge-basic badge-basic-sb-mobile variant-danger-default badge-icon'}>
                        <i className={'material-symbols-outlined'}>error</i>
                        <span className={'badge-message'}>Danger</span>
                    </div>
                    <div className={'badge-basic badge-basic-sb-mobile variant-danger-medium badge-icon'}>
                        <i className={'material-symbols-outlined'}>error</i>
                        <span className={'badge-message'}>Danger</span>
                    </div>
                    <div className={'badge-basic badge-basic-sb-mobile variant-danger-light badge-icon'}>
                        <i className={'material-symbols-outlined'}>error</i>
                        <span className={'badge-message'}>Danger</span>
                    </div>
                </div>
            </div>
        </div>
    }

</div>;

    /// if not present, then it causes a problem here, so seems like needed in chile but not parent???
BadgeBasicSubComponent.propTypes = {
    view: PropTypes.string,
    variants: PropTypes.string,
    id: PropTypes.number,

};


export default BadgeBasicSubComponent;
