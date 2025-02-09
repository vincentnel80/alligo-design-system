import PropTypes from 'prop-types';
import React from 'react';

import './purchase-info.scss';

const BadgesPurchaseInfoSubComponent = ({
    view, variants,
}) => <div className={'sb-page-container'}>

    { view === 'desktop' && variants === 'purchase-info' &&

        <div className={'sb-display-wrapper'}>
            <div className={'sb-display-row'}>
                <div className={'badge-purchase-info'}>
                    <div className={'purchase-info-wrapper'}>
                        <div className={'title-container'}>
                            <span className={'label-sm title'}>Bra Köp</span>
                        </div>
                        <div className={'title-beak'}></div>
                    </div>
                    <span className={'body-sm description-text'}>Köp 100 för 3,80 kr st, spara 1 210 kr!</span>
                </div>
            </div>
            <div className={'sb-display-row'}>
                <div className={'badge-purchase-info'}>
                    <div className={'purchase-info-wrapper'}>
                        <div className={'title-container bg-col-mod-grey-50'}>
                            <span className={'label-sm title'}>Tänk på</span>
                        </div>
                        <div className={'title-beak beak-col-mod-grey-50'} ></div>
                    </div>
                    <span className={'body-sm description-text'}>Köp även till <span className={'modifier-underline'}>KNÄSKYDD GUMMI</span> eller <span className={'modifier-underline'}>KNÄSKYDD POLYETEN</span>, de ingår inte som standard.</span>
                </div>
            </div>
        </div>
    }

    { view === 'mobile' && variants === 'purchase-info' &&

        <div className={'sb-display-wrapper'}>
            <div className={'sb-display-row'}>
                <div className={'badge-purchase-info badge-purchase-info-sb-mob'}>
                    <div className={'purchase-info-wrapper'}>
                        <div className={'title-container'}>
                            <span className={'label-sm title'}>Bra Köp</span>
                        </div>
                        <div className={'title-beak'}></div>
                    </div>
                    <span className={'body-sm description-text'}>Köp 100 för 3,80 kr st, spara 1 210 kr!</span>
                </div>
            </div>
            <div className={'sb-display-row'}>
                <div className={'badge-purchase-info badge-purchase-info-sb-mob'}>
                    <div className={'purchase-info-wrapper'}>
                        <div className={'title-container bg-col-mod-grey-50'}>
                            <span className={'label-sm title'}>Tänk på</span>
                        </div>
                        <div className={'title-beak beak-col-mod-grey-50'} ></div>
                    </div>
                    <span className={'body-sm description-text'}>Köp även till <span className={'modifier-underline'}>KNÄSKYDD GUMMI</span> eller <span className={'modifier-underline'}>KNÄSKYDD POLYETEN</span>, de ingår inte som standard.</span>
                </div>
            </div>
        </div>
    }

</div>;

/// if not present, then it causes a problem here, so seems like needed in chile but not parent???
BadgesPurchaseInfoSubComponent.propTypes = {
    variants: PropTypes.string,
    view: PropTypes.string,

};
export default BadgesPurchaseInfoSubComponent;
