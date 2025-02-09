import PropTypes from 'prop-types';
import React from 'react';

/// why does it work if i put it here (on all components ... but components loose their stuff afterwards
import '../badges-layouts.scss'; /// place in global
//import './primary.scss';

const handleClick = (event, id) => {
    const clickedElement = event.currentTarget;
    console.log(event, "eventeventeventevent");
    console.log(id, "ididididid");
    console.log(`Clicked element id: ${clickedElement.id}`);
};
const ButtonsPrimaryInvertedSubComponent = ({
    view, variants,
}) => <div className={'sb-page-container'}>

    { view === 'desktop' && variants === 'primary-inverted' &&
        <div className={'some-page-wrapper'}>
            <div className={'sb-display-row'}>
                <div className={'sb-display-column'}>
                    <div className={'button-base primary-inverted'}>
                        <div className={"text-wrapper"}>
                            <span className={"content label-lg"}>Button text</span>
                        </div>
                    </div>
                </div>
                <div className={'sb-display-column'}>
                    <div className={'button-base medium primary-inverted'}>
                        <div className={"text-wrapper"}>
                            <span className={"content label-lg"}>Button text</span>
                        </div>
                    </div>
                </div>
                <div className={'sb-display-column'}>
                    <div className={'button-base small primary-inverted'}>
                        <div className={"text-wrapper"}>
                            <span className={"content label-md"}>Button text</span>
                        </div>
                    </div>
                </div>
                <div className={'sb-display-column'}>
                    <div className={'button-base xs primary-inverted'}>
                        <div className={"text-wrapper"}>
                            <span className={"content label-sm"}>Button text</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }

    { view === 'desktop' && variants === 'primary-inverted-icon' &&
        <div className={'some-page-wrapper'}>
            <div className={'sb-display-row'}>
                <div className={'sb-display-column'}>
                    <div className={'button-base variant-material primary-inverted'}>
                        <i className={'material-symbols-outlined'}>chevron_left</i>
                        <div className={"text-wrapper"}>
                            <span className={"content label-lg"}>
                                Button text
                            </span>
                        </div>
                        <i className={'material-symbols-outlined'}>chevron_right</i>
                    </div>
                </div>
                <div className={'sb-display-column'}>
                    <div className={'button-base variant-material primary-inverted variant-number medium'}>
                        <i className={'material-symbols-outlined'}>chevron_left</i>
                        <div className={'badge-number'}><span className={'numeric-content'}>1</span></div>
                        <div className={"text-wrapper"}>
                            <span className={"content label-lg"}>
                                Button text
                            </span>
                        </div>
                        <i className={'material-symbols-outlined'}>chevron_right</i>
                    </div>
                </div>
                <div className={'sb-display-column'}>
                    <div className={'button-base variant-material primary-inverted variant-dot small'}>
                        <i className={'material-symbols-outlined'}>chevron_left
                            <span className={'badge-dot-wrapper'}><span className={"badge-dot dot-danger dot-medium"}></span></span>
                        </i>
                        <div className={'text-wrapper'}>
                            <span className={'content label-lg'}>
                                Button text
                            </span>
                        </div>
                        <i className={'material-symbols-outlined'}>chevron_right</i>
                    </div>
                </div>
                <div className={'sb-display-column'}>
                    <div className={'button-base variant-material primary-inverted variant-dot xs'}>
                        <i className={'material-symbols-outlined'}>chevron_left
                            <span className={'badge-dot-wrapper'}><span className={"badge-dot dot-danger dot-medium"}></span></span>
                        </i>
                        <div className={'text-wrapper'}>
                            <span className={'content label-lg'}>
                                Button text
                            </span>
                        </div>
                        <i className={'material-symbols-outlined'}>chevron_right</i>
                    </div>
                </div>
            </div>
        </div>
    }


    {/* Only SB related to Mobile IE Not used in usual */}
    {/* put those below only */}
    { view === 'mobile' && variants === 'primary-inverted' &&

        <div className={'some-page-wrapper'}>
            <div className={'sb-display-row'}>
                <div className={'sb-display-column'}>
                    <div className={'button-base primary-inverted large-mob-sb'}>
                        <div className={"text-wrapper"}>
                            <span className={"content label-lg"}>Button text</span>
                        </div>
                    </div>
                </div>
                <div className={'sb-display-column'}>
                    <div className={'button-base primary-inverted medium-mob-sb'}>
                        <div className={"text-wrapper"}>
                            <span className={"content label-lg"}>Button text</span>
                        </div>
                    </div>
                </div>
                <div className={'sb-display-column'}>
                    <div className={'button-base primary-inverted small-mob-sb'}>
                        <div className={"text-wrapper"}>
                            <span className={"content label-md"}>Button text</span>
                        </div>
                    </div>
                </div>
                <div className={'sb-display-column'}>
                    <div className={'button-base primary-inverted xs-mob-sb'}>
                        <div className={"text-wrapper"}>
                            <span className={"content label-sm"}>Button text</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    }


    { view === 'mobile' && variants === 'primary-inverted-icon' &&

        <div className={'some-page-wrapper'}>
            <div className={'sb-display-row'}>
                <div className={'sb-display-column'}>
                    <div className={'button-base primary-inverted variant-material large-mob-sb'}>
                        <i className={'material-symbols-outlined'}>chevron_left</i>
                        <div className={'badge-number'}><span className={'numeric-content'}>1</span></div>
                        <div className={"text-wrapper"}>
                            <span className={"content label-lg"}>
                                Button text
                            </span>
                        </div>
                        <i className={'material-symbols-outlined'}>chevron_right</i>
                    </div>
                </div>
                <div className={'sb-display-column'}>
                    <div className={'button-base primary-inverted variant-material variant-number medium-mob-sb'}>
                        <i className={'material-symbols-outlined'}>chevron_left</i>
                        <div className={"text-wrapper"}>
                            <span className={"content label-lg"}>
                                Button text
                            </span>
                        </div>
                        <i className={'material-symbols-outlined'}>chevron_right</i>
                    </div>
                </div>
                <div className={'sb-display-column'}>
                    <div className={'button-base primary-inverted variant-material variant-dot small-mob-sb'}>
                        <i className={'material-symbols-outlined'}>chevron_left
                            <span className={'badge-dot-wrapper'}><span className={"badge-dot dot-danger dot-small"}></span></span>
                        </i>
                        <div className={'text-wrapper'}>
                            <span className={'content label-lg'}>
                                Button text
                            </span>
                        </div>
                        <i className={'material-symbols-outlined'}>chevron_right</i>
                    </div>
                </div>
                <div className={'sb-display-column'}>
                    <div className={'button-base primary-inverted variant-material variant-dot xs-mob-sb'}>
                        <i className={'material-symbols-outlined'}>chevron_left
                            <span className={'badge-dot-wrapper'}><span className={"badge-dot dot-danger dot-small"}></span></span>
                        </i>
                        <div className={'text-wrapper'}>
                            <span className={'content label-lg'}>
                                Button text
                            </span>
                        </div>
                        <i className={'material-symbols-outlined'}>chevron_right</i>
                    </div>
                </div>
            </div>
        </div>

    }

</div>;

    /// if not present, then it causes a problem here, so seems like needed in chile but not parent???
ButtonsPrimaryInvertedSubComponent.propTypes = {
    view: PropTypes.string,
    variants: PropTypes.string,
    id: PropTypes.number,

};


export default ButtonsPrimaryInvertedSubComponent;
