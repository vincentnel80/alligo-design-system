import PropTypes from 'prop-types';
import React from 'react';

/// why does it work if i put it here (on all components ... but components loose their stuff afterwards
import '../badges-layouts.scss'; /// place in global
import './primary.scss';

const handleClick = (event, id) => {
    const clickedElement = event.currentTarget;
    console.log(event, "eventeventeventevent");
    console.log(id, "ididididid");
    console.log(`Clicked element id: ${clickedElement.id}`);
};
const ButtonsPrimarySubComponent = ({
    view, variants,
}) => <div className={'sb-page-container'}>

    { view === 'desktop' && variants === 'primary' &&
        <div className={'some-page-wrapper'}>
            <div className={'sb-display-row'}>
                <div className={'sb-display-column'}>
                    <div className={'button-base'}>
                        <div className={"text-wrapper"}>
                            <span className={"content label-lg"}>Button text</span>
                        </div>
                    </div>
                </div>
                <div className={'sb-display-column'}>
                    <div className={'button-base medium'}>
                        <div className={"text-wrapper"}>
                            <span className={"content label-lg"}>Button text</span>
                        </div>
                    </div>
                </div>
                <div className={'sb-display-column'}>
                    <div className={'button-base small'}>
                        <div className={"text-wrapper"}>
                            <span className={"content label-md"}>Button text</span>
                        </div>
                    </div>
                </div>
                <div className={'sb-display-column'}>
                    <div className={'button-base xs'}>
                        <div className={"text-wrapper"}>
                            <span className={"content label-sm"}>Button text</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }


    { view === 'desktop' && variants === 'primary-icon' &&
        <div className={'some-page-wrapper'}>
            <div className={'sb-display-row'}>
                <div className={'sb-display-column'}>
                    <div className={'button-base variant-material'}>
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
                    <div className={'button-base variant-material variant-number medium'}>
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
                    <div className={'button-base variant-material variant-dot small'}>
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
                    <div className={'button-base variant-material variant-dot xs'}>
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
    { view === 'mobile' && variants === 'primary' &&

        <div className={'some-page-wrapper'}>
            <div className={'sb-display-row'}>
                <div className={'sb-display-column'}>
                    <div className={'button-base large-mob-sb'}>
                        <div className={"text-wrapper"}>
                            <span className={"content label-lg"}>Button text</span>
                        </div>
                    </div>
                </div>
                <div className={'sb-display-column'}>
                    <div className={'button-base medium-mob-sb'}>
                        <div className={"text-wrapper"}>
                            <span className={"content label-lg"}>Button text</span>
                        </div>
                    </div>
                </div>
                <div className={'sb-display-column'}>
                    <div className={'button-base small-mob-sb'}>
                        <div className={"text-wrapper"}>
                            <span className={"content label-md"}>Button text</span>
                        </div>
                    </div>
                </div>
                <div className={'sb-display-column'}>
                    <div className={'button-base xs-mob-sb'}>
                        <div className={"text-wrapper"}>
                            <span className={"content label-sm"}>Button text</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }

    {/* Info text what is this???? come back to it*/}
    { view === 'mobile' && variants === 'primary-icon' &&

        <div className={'some-page-wrapper'}>
            <div className={'sb-display-row'}>
                <div className={'sb-display-column'}>
                    <div className={'button-base variant-material large-mob-sb'}>
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
                    <div className={'button-base variant-material variant-number medium-mob-sb'}>
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
                    <div className={'button-base variant-material variant-dot small-mob-sb'}>
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
                    <div className={'button-base variant-material variant-dot xs-mob-sb'}>
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
ButtonsPrimarySubComponent.propTypes = {
    view: PropTypes.string,
    variants: PropTypes.string,
    id: PropTypes.number,

};


export default ButtonsPrimarySubComponent;
