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
const ButtonsBlankSubComponent = ({
    view, variants,
}) => <div className={'sb-page-container'}>

    { view === 'desktop' && variants === 'blank' &&
        <div className={'some-page-wrapper'}>
            <div className={'sb-display-row'}>
                <div className={'sb-display-column'}>
                    <div className={'button-base blank'}>
                        <div className={"text-wrapper"}>
                            <span className={"content label"}>
                                Button text
                            </span>
                        </div>
                    </div>
                </div>
                <div className={'sb-display-column'}>
                    <div className={'button-base medium blank'}>
                        <div className={"text-wrapper"}>
                            <span className={"content label-lg"}>
                                Button text
                            </span>
                        </div>
                    </div>
                </div>
                <div className={'sb-display-column'}>
                    <div className={'button-base small blank'}>
                        <div className={"text-wrapper"}>
                            <span className={"content label-md"}>
                                Button text
                            </span>
                        </div>
                    </div>
                </div>
                <div className={'sb-display-column'}>
                    <div className={'button-base xs blank'}>
                        <div className={"text-wrapper"}>
                            <span className={"content label-sm"}>
                                Button text
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }

    { view === 'desktop' && variants === 'blank-icon' &&
        <div className={'some-page-wrapper'}>
            <div className={'sb-display-row'}>
                <div className={'sb-display-column'}>
                    <div className={'button-base variant-material blank'}>
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
                    <div className={'button-base variant-material blank variant-number medium'}>
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
                    <div className={'button-base variant-material blank variant-dot small'}>
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
                    <div className={'button-base variant-material blank variant-dot xs'}>
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
    { view === 'mobile' && variants === 'blank' &&

        <div className={'some-page-wrapper'}>
            <div className={'sb-display-row'}>
                <div className={'sb-display-column'}>
                    <div className={'button-base blank large-mob-sb'}>
                        <div className={"text-wrapper"}>
                            <span className={"content label-lg"}>Button text</span>
                        </div>
                    </div>
                </div>
                <div className={'sb-display-column'}>
                    <div className={'button-base blank medium-mob-sb'}>
                        <div className={"text-wrapper"}>
                            <span className={"content label-lg"}>Button text</span>
                        </div>
                    </div>
                </div>
                <div className={'sb-display-column'}>
                    <div className={'button-base blank small-mob-sb'}>
                        <div className={"text-wrapper"}>
                            <span className={"content label-md"}>Button text</span>
                        </div>
                    </div>
                </div>
                <div className={'sb-display-column'}>
                    <div className={'button-base blank xs-mob-sb'}>
                        <div className={"text-wrapper"}>
                            <span className={"content label-sm"}>Button text</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    }

    {/* Info text*/}
    { view === 'mobile' && variants === 'blank-icon' &&

        <div className={'some-page-wrapper'}>
            <div className={'sb-display-row'}>
                <div className={'sb-display-column'}>
                    <div className={'button-base variant-material blank large-mob-sb'}>
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
                    <div className={'button-base variant-material blank variant-number medium-mob-sb'}>
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
                    <div className={'button-base variant-material blank variant-dot small-mob-sb'}>
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
                    <div className={'button-base variant-material blank variant-dot xs-mob-sb'}>
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
ButtonsBlankSubComponent.propTypes = {
    view: PropTypes.string,
    variants: PropTypes.string,
    id: PropTypes.number,

};


export default ButtonsBlankSubComponent;