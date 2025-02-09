import PropTypes from 'prop-types';
import React from 'react';

import './product.scss';

const BadgesProductSubComponent = ({
    view, variants,
}) => <div className={'sb-page-container'}>

    { view === 'desktop' && variants === 'product' &&

        <div className={'sb-display-wrapper'}>
            <div className={'sb-display-row'}>
                <div className={'badge-product variant-standard-assortment'}>
                    <div className={'material-icons-custom'}></div>
                    <span className={'badge-product-title label-sm'}>Standardsortiment</span>
                </div>
            </div>
            <div className={'sb-display-row'}>
                <div className={'badge-product variant-contract-assortment'}>
                    <div className={'material-icons-custom'}></div>
                    <span className={'badge-product-title label-sm'}>Avtalsortiment</span>
                </div>
            </div>
            <div className={'sb-display-row'}>
                <div className={'badge-product variant-great-price'}>
                    <div className={'material-icons-custom'}></div>
                    <span className={'badge-product-title label-sm'}>Bra pris</span>
                </div>
            </div>
        </div>
    }

    { view === 'mobile' && variants === 'product' &&

        <div className={'sb-display-wrapper'}>
            <div className={'sb-display-row'}>
                <div className={'badge-product variant-standard-assortment badge-product-sb-mobile'}>
                    <div className={'material-icons-custom variant-standard-assortment-mob'}></div>
                    <span className={'badge-product-title label-sm'}>Standardsortiment</span>
                </div>
            </div>
            <div className={'sb-display-row'}>
                <div className={'badge-product variant-contract-assortment badge-product-sb-mobile'}>
                    <div className={'material-icons-custom variant-contract-assortment-mob'}></div>
                    <span className={'badge-product-title label-sm'}>Avtalsortiment</span>
                </div>
            </div>
            <div className={'sb-display-row'}>
                <div className={'badge-product variant-great-price badge-product-sb-mobile'}>
                    <div className={'material-icons-custom variant-great-price-mob'}></div>
                    <span className={'badge-product-title label-sm'}>Bra pris</span>
                </div>
            </div>
        </div>
    }

</div>;

/// if not present, then it causes a problem here, so seems like needed in chile but not parent???
BadgesProductSubComponent.propTypes = {
    variants: PropTypes.string,
    view: PropTypes.string,
};

export default BadgesProductSubComponent;
