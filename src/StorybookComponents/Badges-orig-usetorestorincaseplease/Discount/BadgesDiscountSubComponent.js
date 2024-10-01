import PropTypes from 'prop-types';
import React from 'react';

import './discount.scss';

const BadgesDiscountSubComponent = ({
    view, variants,
}) => <div className={'sb-page-container'}>

    { view === 'desktop' && variants === 'discount' &&

        <div className={'sb-display-wrapper'}>
            <div className={'sb-display-row sb-badge-discount'}>
                <div className={'badge-discount'}>
                    <span className={'label-sm discount-title'}>30% Rabatt</span>
                </div>
            </div>
            <div className={'sb-display-row sb-badge-discount'}>
                <div className={'badge-discount-variant-double'}>
                    <div className={'badge-discount'}>
                        <span className={'label-sm discount-title'}>30% Rabatt</span>
                    </div>
                    <div className={'badge-discount badge-discount-black'}>
                        <span className={'label-sm discount-title '}>Utförsäljning</span>
                    </div>
                </div>
            </div>
            <div className={'sb-display-row sb-badge-discount'}>
                <div className={'badge-discount-variant-stacked'}>
                    <div className={'badge-discount'}>
                        <span className={'label-sm discount-title'}>30% Rabatt</span>
                    </div>
                    <div className={'badge-discount badge-discount-black'}>
                        <span className={'label-sm discount-title '}>Utförsäljning</span>
                    </div>
                </div>
            </div>
        </div>
    }

    { view === 'mobile' && variants === 'discount' &&

        <div className={'sb-display-wrapper'}>
            <div className={'sb-display-row sb-badge-discount'}>
                <div className={'badge-discount badge-discount-sb-mobile'}>
                    <span className={'label-sm discount-title'}>30% Rabatt</span>
                </div>
            </div>
            <div className={'sb-display-row sb-badge-discount'}>
                <div className={'badge-discount-variant-double'}>
                    <div className={'badge-discount badge-discount-sb-mobile '}>
                        <span className={'label-sm discount-title'}>30% Rabatt</span>
                    </div>
                    <div className={'badge-discount badge-discount-sb-mobile badge-discount-black'}>
                        <span className={'label-sm discount-title '}>Utförsäljning</span>
                    </div>
                </div>
            </div>
            <div className={'sb-display-row sb-badge-discount'}>
                <div className={'badge-discount-variant-stacked'}>
                    <div className={'badge-discount badge-discount-sb-mobile'}>
                        <span className={'label-sm discount-title'}>30% Rabatt</span>
                    </div>
                    <div className={'badge-discount badge-discount-sb-mobile badge-discount-black'}>
                        <span className={'label-sm discount-title '}>Utförsäljning</span>
                    </div>
                </div>
            </div>
        </div>
    }

</div>;

BadgesDiscountSubComponent.propTypes = {
    variants: PropTypes.string,
    view: PropTypes.string,

};
export default BadgesDiscountSubComponent;
