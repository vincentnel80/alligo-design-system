import PropTypes from 'prop-types';
import React from 'react';

import CopyToClipboardIcon from '../CopyToClipboard/CopyToClipboardIcon';

import './code-snippet.scss';

const CodeSnippet = ({ iconName }) => (
    <div className={'code-snippet-container'} id={'code-snippet-field'}>
        <div className={'code-snippet-container-inner'}>
            {iconName === 'account_circle'
                && <>
                    <div className={'code-snippet-copy'}>
                        <CopyToClipboardIcon code={'import AccountCircle from \'../../common/components/Ui/DesignSystemIcons/AccountCircle\'; <AccountCircle></AccountCircle>'}/>
                    </div>
                    <pre>
                        <code>
                            import AccountCircle from '../../common/components/Ui/DesignSystemIcons/AccountCircle';
                        </code>
                    </pre>
                    <pre>
                        <code>
                            &lt;AccountCircle&gt;&lt;/AccountCircle&gt;
                        </code>
                    </pre>
                </>
            }
            {iconName === 'add'
                && <>
                    <pre>
                        <code>
                            import Add from '../../common/components/Ui/DesignSystemIcons/Add';
                        </code>
                    </pre>
                    <pre>
                        <code>
                            &lt;Add&gt;&lt;/Add&gt;
                        </code>
                    </pre>
                </>
            }
            {iconName === 'arrow_drop_down'
                && <>
                    <pre>
                        <code>
                            import ArrowDropDown from '../../common/components/Ui/DesignSystemIcons/ArrowDropDown';
                        </code>
                    </pre>
                    <pre>
                        <code>
                            &lt;ArrowDropDown&gt;&lt;/ArrowDropDown&gt;
                        </code>
                    </pre>
                </>
            }
            {iconName === 'call'
                && <>
                    <pre>
                        <code>
                            import Call from '../../common/components/Ui/DesignSystemIcons/Call';
                        </code>
                    </pre>
                    <pre>
                        <code>
                            &lt;Call&gt;&lt;/Call&gt;
                        </code>
                    </pre>
                </>
            }
            {iconName === 'check_circle'
                && <>
                    <pre>
                        <code>
                            import CheckCircle from '../../common/components/Ui/DesignSystemIcons/CheckCircle';
                        </code>
                    </pre>
                    <pre>
                        <code>
                            &lt;CheckCircle&gt;&lt;/CheckCircle&gt;
                        </code>
                    </pre>
                </>
            }
            {iconName === 'chevron_left'
                && <>
                    <pre>
                        <code>
                            import ChevronLeft from '../../common/components/Ui/DesignSystemIcons/ChevronLeft';
                        </code>
                    </pre>
                    <pre>
                        <code>
                            &lt;ChevronLeft&gt;&lt;/ChevronLeft&gt;
                        </code>
                    </pre>
                </>
            }
            {iconName === 'chevron_right'
                && <>
                    <pre>
                        <code>
                            import ChevronRight from '../../common/components/Ui/DesignSystemIcons/ChevronRight';
                        </code>
                    </pre>
                    <pre>
                        <code>
                            &lt;ChevronRight&gt;&lt;/ChevronRight&gt;
                        </code>
                    </pre>
                </>
            }
            {iconName === 'close'
                && <>
                    <pre>
                        <code>
                            import Close from '../../common/components/Ui/DesignSystemIcons/Close';
                        </code>
                    </pre>
                    <pre>
                        <code>
                            &lt;Close&gt;&lt;/Close&gt;
                        </code>
                    </pre>
                </>
            }
            {iconName === 'compare_arrows'
                && <>
                    <pre>
                        <code>
                            import CompareArrows from '../../common/components/Ui/DesignSystemIcons/CompareArrows';
                        </code>
                    </pre>
                    <pre>
                        <code>
                            &lt;Close&gt;&lt;/Close&gt;
                        </code>
                    </pre>
                </>
            }
            {iconName === 'construction'
                && <>
                    <pre>
                        <code>
                            import Construction from '../../common/components/Ui/DesignSystemIcons/Construction';
                        </code>
                    </pre>
                    <pre>
                        <code>
                            &lt;Construction&gt;&lt;/Construction&gt;
                        </code>
                    </pre>
                </>
            }
            {iconName === 'content_copy'
                && <>
                    <pre>
                        <code>
                            import ContentCopy from '../../common/components/Ui/DesignSystemIcons/ContentCopy';
                        </code>
                    </pre>
                    <pre>
                        <code>
                            &lt;ContentCopy&gt;&lt;/ContentCopy&gt;
                        </code>
                    </pre>
                </>
            }
            {iconName === 'custom_grid_view_custom'
                && <>
                    <pre>
                        <code>
                            import CustomGridViewCustom from '../../common/components/Ui/DesignSystemIcons/CustomGridViewCustom';
                        </code>
                    </pre>
                    <pre>
                        <code>
                            &lt;CustomGridViewCustom&gt;&lt;/CustomGridViewCustom&gt;
                        </code>
                    </pre>
                </>
            }
            {iconName === 'delete'
                && <>
                    <pre>
                        <code>
                            import Delete from '../../common/components/Ui/DesignSystemIcons/Delete';
                        </code>
                    </pre>
                    <pre>
                        <code>
                            &lt;Delete&gt;&lt;/Delete&gt;
                        </code>
                    </pre>
                </>
            }
            {iconName === 'description'
                && <>
                    <pre>
                        <code>
                            import Description from '../../common/components/Ui/DesignSystemIcons/Description';
                        </code>
                    </pre>
                    <pre>
                        <code>
                            &lt;Description&gt;&lt;/Description&gt;
                        </code>
                    </pre>
                </>
            }
            {iconName === 'design_services'
                && <>
                    <pre>
                        <code>
                            import DesignServices from '../../common/components/Ui/DesignSystemIcons/DesignServices';
                        </code>
                    </pre>
                    <pre>
                        <code>
                            &lt;DesignServices&gt;&lt;/DesignServices&gt;
                        </code>
                    </pre>
                </>
            }
            {iconName === 'download'
                && <>
                    <div className={'code-snippet-copy'}>
                        <CopyToClipboardIcon code={'import import Download from \'../../common/components/Ui/DesignSystemIcons/Download\'; <Download></Download>'}/>
                    </div>
                    <pre>
                        <code>
                            import Download from '../../common/components/Ui/DesignSystemIcons/Download';
                        </code>
                    </pre>
                    <pre>
                        <code>
                            &lt;Download&gt;&lt;/Download&gt;
                        </code>
                    </pre>
                </>
            }
            {iconName === 'edit'
                && <>
                    <pre>
                        <code>
                            import Edit from '../../common/components/Ui/DesignSystemIcons/Edit';
                        </code>
                    </pre>
                    <pre>
                        <code>
                            &lt;Edit&gt;&lt;/Edit&gt;
                        </code>
                    </pre>
                </>
            }
            {iconName === 'error'
                && <>
                    <pre>
                        <code>
                            import Error from '../../common/components/Ui/DesignSystemIcons/Error';
                        </code>
                    </pre>
                    <pre>
                        <code>
                            &lt;Error&gt;&lt;/Error&gt;
                        </code>
                    </pre>
                </>
            }
            {iconName === 'expand_less'
                && <>
                    <pre>
                        <code>
                            import ExpandLess from '../../common/components/Ui/DesignSystemIcons/ExpandLess';
                        </code>
                    </pre>
                    <pre>
                        <code>
                            &lt;ExpandLess&gt;&lt;/ExpandLess&gt;
                        </code>
                    </pre>
                </>
            }
            {iconName === 'expand_more'
                && <>
                    <pre>
                        <code>
                            import ExpandMore from '../../common/components/Ui/DesignSystemIcons/ExpandMore';
                        </code>
                    </pre>
                    <pre>
                        <code>
                            &lt;ExpandMore&gt;&lt;/ExpandMore&gt;
                        </code>
                    </pre>
                </>
            }
            {iconName === 'favourite_list_add_custom'
                && <>
                    <pre>
                        <code>
                            import FavouriteListAddCustom from '../../common/components/Ui/DesignSystemIcons/FavouriteListAddCustom';
                        </code>
                    </pre>
                    <pre>
                        <code>
                            &lt;FavouriteListAddCustom&gt;&lt;/FavouriteListAddCustom&gt;
                        </code>
                    </pre>
                </>
            }
            {iconName === 'favourite_list_added_custom'
                && <>
                    <pre>
                        <code>
                            import FavouriteListAddedCustom from '../../common/components/Ui/DesignSystemIcons/FavouriteListAddedCustom';
                        </code>
                    </pre>
                    <pre>
                        <code>
                                &lt;FavouriteListAddedCustom&gt;&lt;/FavouriteListAddedCustom&gt;
                        </code>
                    </pre>
                </>
            }
            {iconName === 'first_page'
                && <>
                    <pre>
                        <code>
                            import FirstPage from '../../common/components/Ui/DesignSystemIcons/FirstPage';
                        </code>
                    </pre>
                    <pre>
                        <code>
                            &lt;FirstPage&gt;&lt;/FirstPage&gt;
                        </code>
                    </pre>
                </>
            }
            {iconName === 'health_and_safety'
                && <>
                    <pre>
                        <code>
                            import HealthAndSafety from '../../common/components/Ui/DesignSystemIcons/HealthAndSafety';
                        </code>
                    </pre>
                    <pre>
                        <code>
                            &lt;HealthAndSafety&gt;&lt;/HealthAndSafety&gt;
                        </code>
                    </pre>
                </>
            }
            {iconName === 'info'
                && <>
                    <pre>
                        <code>
                            import Info from '../../common/components/Ui/DesignSystemIcons/Info';
                        </code>
                    </pre>
                    <pre>
                        <code>
                            &lt;Info&gt;&lt;/Info&gt;
                        </code>
                    </pre>
                </>
            }
            {iconName === 'last_page'
                && <>
                    <pre>
                        <code>
                            import Info from '../../common/components/Ui/DesignSystemIcons/LastPage';
                        </code>
                    </pre>
                    <pre>
                        <code>
                            &lt;LastPage&gt;&lt;/LastPage&gt;
                        </code>
                    </pre>
                </>
            }
            {iconName === 'list_view_custom'
                && <>
                    <pre>
                        <code>
                            import ListViewCustom from '../../common/components/Ui/DesignSystemIcons/ListViewCustom';
                        </code>
                    </pre>
                    <pre>
                        <code>
                            &lt;ListViewCustom&gt;&lt;/ListViewCustom&gt;
                        </code>
                    </pre>
                </>
            }
            {iconName === 'logo_bank_id_custom'
                && <>
                    <pre>
                        <code>
                            import LogoBankIdCustom from '../../common/components/Ui/DesignSystemIcons/LogoBankIdCustom';
                        </code>
                    </pre>
                    <pre>
                        <code>
                            &lt;LogoBankIdCustom&gt;&lt;/LogoBankIdCustom&gt;
                        </code>
                    </pre>
                </>
            }
            {iconName === 'logout'
                && <>
                    <pre>
                        <code>
                            import Logout from '../../common/components/Ui/DesignSystemIcons/Logout';
                        </code>
                    </pre>
                    <pre>
                        <code>
                            &lt;Logout&gt;&lt;/Logout&gt;
                        </code>
                    </pre>
                </>
            }
            {iconName === 'mail'
                && <>
                    <pre>
                        <code>
                            import Mail from '../../common/components/Ui/DesignSystemIcons/Mail';
                        </code>
                    </pre>
                    <pre>
                        <code>
                            &lt;Mail&gt;&lt;/Mail&gt;
                        </code>
                    </pre>
                </>
            }
            {iconName === 'menu'
                && <>
                    <pre>
                        <code>
                            import Menu from '../../common/components/Ui/DesignSystemIcons/Menu';
                        </code>
                    </pre>
                    <pre>
                        <code>
                            &lt;Menu&gt;&lt;/Menu&gt;
                        </code>
                    </pre>
                </>
            }
            {iconName === 'menu_book'
                && <>
                    <pre>
                        <code>
                            import MenuBook from '../../common/components/Ui/DesignSystemIcons/MenuBook';
                        </code>
                    </pre>
                    <pre>
                        <code>
                            &lt;MenuBook&gt;&lt;/MenuBook&gt;
                        </code>
                    </pre>
                </>
            }
            {iconName === 'nest_eco_leaf'
                && <>
                    <pre>
                        <code>
                            import NestEcoLeaf from '../../common/components/Ui/DesignSystemIcons/NestEcoLeaf';
                        </code>
                    </pre>
                    <pre>
                        <code>
                            &lt;NestEcoLeaf&gt;&lt;/NestEcoLeaf&gt;
                        </code>
                    </pre>
                </>
            }
            {iconName === 'payments'
                && <>
                    <pre>
                        <code>
                            import Payments from '../../common/components/Ui/DesignSystemIcons/Payments';
                        </code>
                    </pre>
                    <pre>
                        <code>
                            &lt;Payments&gt;&lt;/Payments&gt;
                        </code>
                    </pre>
                </>
            }
            {iconName === 'qr_code_scanner'
                && <>
                    <pre>
                        <code>
                            import QrCodeScanner from '../../common/components/Ui/DesignSystemIcons/QrCodeScanner';
                        </code>
                    </pre>
                    <pre>
                        <code>
                            &lt;QrCodeScanner&gt;&lt;/QrCodeScanner&gt;
                        </code>
                    </pre>
                </>
            }
            {iconName === 'remove'
                && <>
                    <pre>
                        <code>
                            import Remove from '../../common/components/Ui/DesignSystemIcons/Remove';
                        </code>
                    </pre>
                    <pre>
                        <code>
                            &lt;Remove&gt;&lt;/Remove&gt;
                        </code>
                    </pre>
                </>
            }
            {iconName === 'search'
                && <>
                    <pre>
                        <code>
                            import Search from '../../common/components/Ui/DesignSystemIcons/Search';
                        </code>
                    </pre>
                    <pre>
                        <code>
                            &lt;Search&gt;&lt;/Search&gt;
                        </code>
                    </pre>
                </>
            }
            {iconName === 'shopping_cart'
                && <>
                    <pre>
                        <code>
                            import ShoppingCart from '../../common/components/Ui/DesignSystemIcons/ShoppingCart';
                        </code>
                    </pre>
                    <pre>
                        <code>
                            &lt;ShoppingCart&gt;&lt;/ShoppingCart&gt;
                        </code>
                    </pre>
                </>
            }
            {iconName === 'star_rate_filled'
                && <>
                    <pre>
                        <code>
                            import StarRateFilled from '../../common/components/Ui/DesignSystemIcons/StarRateFilled';
                        </code>
                    </pre>
                    <pre>
                        <code>
                            &lt;StarRateFilled&gt;&lt;/StarRateFilled&gt;
                        </code>
                    </pre>
                </>
            }
            {iconName === 'straighten'
                && <>
                    <pre>
                        <code>
                            import Straighten from '../../common/components/Ui/DesignSystemIcons/Straighten';
                        </code>
                    </pre>
                    <pre>
                        <code>
                            &lt;Straighten&gt;&lt;/Straighten&gt;
                        </code>
                    </pre>
                </>
            }
            {iconName === 'support_agent'
                && <>
                    <pre>
                        <code>
                            import SupportAgent from '../../common/components/Ui/DesignSystemIcons/SupportAgent';
                        </code>
                    </pre>
                    <pre>
                        <code>
                            &lt;SupportAgent&gt;&lt;/SupportAgent&gt;
                        </code>
                    </pre>
                </>
            }
            {iconName === 'tune'
                && <>
                    <pre>
                        <code>
                            import Tune from '../../common/components/Ui/DesignSystemIcons/Tune';
                        </code>
                    </pre>
                    <pre>
                        <code>
                            &lt;Tune&gt;&lt;/Tune&gt;
                        </code>
                    </pre>
                </>
            }
        </div>
    </div>
);

CodeSnippet.propTypes = {
    code: PropTypes.string,
    iconName: PropTypes.string,
};

export default CodeSnippet;
