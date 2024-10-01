import React, { useState } from 'react';

//import FlexibleIconComponent from '../../common/components/Ui/DesignSystemIcons/FlexibleIconComponent'; vin todo
import CodeSnippet from '../../shared/Helpers/CodeSnippet/CodeSnippet';

import './icon-search.scss';
import './flexible-icon-component.scss';

const IconSearch = () => {
    const data = [
        {
            title: 'account_circle',
            formatted: 'Account Circle',
        },
        {
            title: 'add',
            formatted: 'Add',
        },
        {
            formatted: 'Arrow Drop Down',
            title: 'arrow_drop_down',
        },
        {
            title: 'arrow_drop_up',
            formatted: 'Arrow Drop Up',
        },
        {
            title: 'call',
            formatted: 'Call',
        },
        {
            title: 'check_circle',
            formatted: 'Check Circle',
        },
        {
            title: 'chevron_left',
            formatted: 'Chevron Left',
        },
        {
            title: 'chevron_right',
            formatted: 'Chevron Right',
        },
        {
            title: 'close',
            formatted: 'Close',
        },
        {
            title: 'compare_arrows',
            formatted: 'Compare Arrows',
        },
        {
            title: 'construction',
            formatted: 'Construction',
        },
        {
            title: 'content_copy',
            formatted: 'Content Copy',
        },
        {
            title: 'custom_grid_view_custom',
            formatted: 'Custom Grid View',
        },
        {
            title: 'delete',
            formatted: 'Delete',
        },
        {
            title: 'description',
            formatted: 'Description',
        },
        {
            title: 'design_services',
            formatted: 'Design Services',
        },
        {
            title: 'download',
            formatted: 'Download',
        },
        {
            title: 'edit',
            formatted: 'Edit',
        },
        {
            title: 'error',
            formatted: 'Error',
        },
        {
            title: 'expand_less',
            formatted: 'Expand Less',
        },
        {
            title: 'expand_more',
            formatted: 'Expand More',
        },
        {
            title: 'favourite_list_add_custom',
            formatted: 'Favourite List Add Custom',
        },
        {
            title: 'favourite_list_added_custom',
            formatted: 'Favourite List Added Custom',
        },
        {
            title: 'first_page',
            formatted: 'First Page',
        },
        {
            title: 'health_and_safety',
            formatted: 'Health & Safety',
        },
        {
            title: 'info',
            formatted: 'Info',
        },
        {
            title: 'last_page',
            formatted: 'LAst Page',
        },
        {
            title: 'list_view_custom',
            formatted: 'List View Custom',
        },
        {
            title: 'logo_bank_id_custom',
            formatted: 'Bank ID Custom',
        },
        {
            title: 'logout',
            formatted: 'Logout',
        },
        {
            title: 'mail',
            formatted: 'Mail',
        },
        {
            title: 'menu',
            formatted: 'Menu',
        },
        {
            title: 'menu_book',
            formatted: 'Menu Book',
        },
        {
            title: 'nest_eco_leaf',
            formatted: 'Nest Eco Leaf',
        },
        {
            title: 'payments',
            formatted: 'Payments',
        },
        {
            title: 'qr_code_scanner',
            formatted: 'QR Code Scanner',
        },
        {
            title: 'remove',
            formatted: 'Remove',
        },
        {
            title: 'search',
            formatted: 'Search',
        },
        {
            title: 'shopping_cart',
            formatted: 'Shopping Cart',
        },
        {
            title: 'star_rate_filled',
            formatted: 'Star Rate Filled',
        },
        {
            title: 'straighten',
            formatted: 'Straighten',
        },
        {
            title: 'support_agent',
            formatted: 'Support Agent',
        },
        {
            title: 'tune',
            formatted: 'Tune',
        },
    ].sort();

    const [searchValue, setSearchValue] = useState('');
    const [iconName, setIconName] = useState('');

    const scrollToCodeSnippet = () => {
        const codeDisplay = document.getElementById('code-snippet-field');
        if (codeDisplay) {
            codeDisplay.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };

    return (
        <>
            <div className={'icon-search-field'} >
                <i className={'icon-input-image'}></i>
                <input
                    className={'body-md icon-search-input'}
                    placeholder={'Search for an icon'}
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </div>
            <div className={'icon-library-content-grid'}>
                {data
                    .filter((item) => {
                        if (!searchValue) return true;
                        if (item.title.includes(searchValue)) {
                            return true;
                        }
                        return false;
                    })
                    .map((item) => (
                        <div key={item.title} className={'icon-library-column'} data-id={item.title} onClick={() => setIconName(item.title)}>
                            <div className={'vertical-center'} onClick={scrollToCodeSnippet}>
                                <FlexibleIconComponent iconName={item.title} />
                                <div className={'body-sm icon-name'} style={{
                                    opacity: '80%',
                                }}>{item.formatted}</div>
                            </div>
                        </div>
                    ))}
            </div>
            <CodeSnippet iconName={iconName}/>
        </>
    );
};

export default IconSearch;
