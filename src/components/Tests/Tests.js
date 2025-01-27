//import PropTypes from 'prop-types';
import React, {
    useEffect,
    useRef,
    useState,
} from 'react';

import MainIntroComponent from '../../shared/Layout/TemplateComponents/MainIntroComponent';

import './tests.scss';

const UxClass = 'jsx-button-as-radio';


const Tests = ({
    classNames,
    isActive,
}) => {


    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [navbarTop, setNavbarTop] = useState(0);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;

        console.log(currentScrollPos, 'currentScrollPos');
        setPrevScrollPos(currentScrollPos);
        setNavbarTop(prevScrollPos > currentScrollPos ? 0 : -50);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={'sb-page-container'}>
            <main className={'sb-maincontent'}>

                <MainIntroComponent
                    fontClassName={'body-xl body-xl--preamble'}
                    introText={'Headers and Algolia search fields for Mobile, Desktop and Tablet.'}
                    title={'Headers Mobile and Tablet'}
                />

                <hr className={'hr-line-division'}/>

                <div id="body-test" /*ref={myElementRef}*/ className={'alligo-page-body-test '}>
                    <div className={'alligo-page-wrapper-test'}>

                        <header className={'alligo-page-header'}>
                            {/* tags :  in main system there are a few divs in header that are not shown  */}
                            <div className={'alligo-header alligo-content figma-top-nav-container'}>
                                <div className={'left-nav-wrapper'}>
                                    <div className={'base-hamburger'}>
                                        <div aria-label="Open Menu" className="hamburger-button">
                                            <i className="svg-header-icon svg-header-icon--minicart">
                                                <svg fill="none" height="24" viewBox="0 0 24 24"
                                                    width="24" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M3.25 17.625V16.125H20.75V17.625H3.25ZM3.25 12.75V11.25H20.75V12.75H3.25ZM3.25 7.875V6.375H20.75V7.875H3.25Z"
                                                        fill="#C7D300"/>
                                                </svg>
                                            </i>
                                        </div>
                                    </div>

                                    <div className={'base-search'}>
                                        <div aria-label="Open Menu" className="search-button">
                                            {/* SVG or icons */}
                                            <i className="svg-header-icon svg-header-icon--minicart">
                                                <svg fill="none" height="24" viewBox="0 0 24 24"
                                                    width="24" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M19.0751 19.9752L13.1003 14.0256C12.6003 14.4088 12.0543 14.7044 11.4623 14.9124C10.8703 15.1212 10.2579 15.2256 9.62511 15.2256C8.05791 15.2256 6.72871 14.6796 5.63751 13.5876C4.54551 12.4956 3.99951 11.1664 3.99951 9.60003C3.99951 8.04963 4.54551 6.72483 5.63751 5.62563C6.72871 4.52483 8.05791 3.97443 9.62511 3.97443C11.1747 3.97443 12.4955 4.52043 13.5875 5.61243C14.6795 6.70443 15.2255 8.03363 15.2255 9.60003C15.2255 10.2496 15.1211 10.8744 14.9123 11.4744C14.7043 12.0744 14.4167 12.6164 14.0495 13.1004L20.0003 19.05L19.0751 19.9752ZM9.62511 13.9248C10.8251 13.9248 11.8415 13.504 12.6743 12.6624C13.5079 11.8208 13.9247 10.8 13.9247 9.60003C13.9247 8.40003 13.5079 7.37923 12.6743 6.53763C11.8415 5.69603 10.8251 5.27523 9.62511 5.27523C8.40831 5.27523 7.38311 5.69603 6.54951 6.53763C5.71671 7.37923 5.30031 8.40003 5.30031 9.60003C5.30031 10.8 5.71671 11.8208 6.54951 12.6624C7.38311 13.504 8.40831 13.9248 9.62511 13.9248Z"
                                                        fill="white"/>
                                                </svg>
                                            </i>
                                        </div>
                                    </div>
                                    <div className={'base-compare'}>
                                        <div aria-label="Open Menu" className="compare-button">
                                            {/* SVG or icons */}
                                            <i className="svg-header-icon svg-header-icon--minicart">
                                                <svg fill="none" height="24" viewBox="0 0 24 24"
                                                    width="24" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8 19.65L6.95 18.575L9.775 15.75H2.25V14.25H9.775L6.95 11.425L8 10.35L12.65 15L8 19.65ZM16 13.65L11.35 8.99998L16 4.34998L17.05 5.42498L14.225 8.24998H21.75V9.74998H14.225L17.05 12.575L16 13.65Z"
                                                        fill="white"/>
                                                </svg>
                                            </i>
                                            <span className={'badge-component'}></span>
                                        </div>
                                    </div>
                                </div>
                                <div className={'logo'}>
                                    <svg fill="none" height="16" viewBox="0 0 77 16" width="77"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M54.0341 0.868083L53.332 4.57958C53.332 4.61597 53.332 4.68875 53.3655 4.72513C53.3989 4.76152 53.4323 4.79791 53.4992 4.79791H56.2949C56.3618 4.79791 56.4287 4.72513 56.4287 4.65236L57.1307 0.940858C57.1307 0.90447 57.1307 0.831696 57.0973 0.795309C57.0639 0.758921 57.0304 0.722534 56.9636 0.722534H54.1678C54.1009 0.722534 54.0341 0.795309 54.0341 0.868083Z"
                                            fill="white"/>
                                        <path
                                            d="M53.1735 5.5211L52.7192 7.80019C52.7192 7.83544 52.7192 7.90592 52.754 7.94117C52.7888 7.97641 52.8236 8.01165 52.8932 8.01165H55.7232C55.7928 8.01165 55.8624 7.94117 55.8624 7.87068L56.2741 5.59159C56.2741 5.55635 56.2741 5.48586 56.2393 5.45061C56.2045 5.41537 56.1697 5.38013 56.1001 5.38013H53.3127C53.2431 5.38013 53.1735 5.45061 53.1735 5.5211Z"
                                            fill="#C7D300"/>
                                        <path
                                            d="M11.5059 11.9555C11.5388 11.7158 11.5718 11.4418 11.5718 11.2021C11.5718 9.79797 10.8139 9.04454 9.36403 9.04454H5.27801C4.94849 9.04454 4.75078 9.07878 4.61897 8.97604C4.52012 8.90755 4.55307 8.73632 4.61897 8.49659C4.68488 8.25686 4.88259 7.98289 5.1462 7.98289C5.44277 7.98289 5.40982 7.98289 5.64048 7.98289H12.1979C12.2638 7.98289 12.3297 7.91439 12.3297 7.8459L12.7581 5.58561C12.7581 5.55136 12.7581 5.48287 12.7251 5.44862C12.6922 5.41437 12.6592 5.38013 12.5933 5.38013H5.57458C4.98144 5.38013 4.45421 5.41437 4.05879 5.48287C3.63042 5.55136 3.26795 5.6541 3.00434 5.85958C2.70777 6.06506 2.47711 6.37329 2.31235 6.75C2.14759 7.12672 1.98283 7.60617 1.85102 8.18837L1.65331 9.14728L1.62036 9.38701V9.62673C1.62036 10.2432 1.85102 10.7569 2.31235 11.1336C2.77367 11.5103 3.39976 11.6815 4.2565 11.6815H8.37548C8.44138 11.6815 8.60614 11.6815 8.60614 11.7843C8.63909 11.9213 8.50728 12.435 8.34253 12.5377C8.17777 12.6747 7.91415 12.6405 7.65054 12.6405H1.09313C1.02723 12.6405 0.961325 12.7089 0.961325 12.7774L0.5 15.072C0.5 15.1062 0.5 15.1747 0.532952 15.209C0.565904 15.2432 0.598855 15.2775 0.664759 15.2775H7.71644C8.34253 15.2775 8.86975 15.2432 9.26517 15.1747C9.69355 15.1062 10.056 14.9692 10.3196 14.7638C10.6162 14.5583 10.8469 14.2501 11.0116 13.8733C11.1764 13.5309 11.3411 13.0172 11.4729 12.4692L11.5059 11.9555Z"
                                            fill="white"/>
                                        <path
                                            d="M36.0482 5.51524C34.8905 5.51524 34.0052 5.7517 33.3923 6.15705C32.7794 6.59618 32.3708 7.30555 32.1665 8.31893L31.3153 12.4062C31.2472 12.6427 31.2131 12.8791 31.1791 13.0818C31.145 13.2845 31.145 13.4872 31.145 13.6561C31.145 13.9601 31.1791 14.2303 31.2812 14.433C31.3834 14.6357 31.5536 14.8046 31.792 14.9397C32.0303 15.0748 32.3027 15.1423 32.6773 15.2099C33.0518 15.2437 33.4945 15.2775 34.0052 15.2775H41.0536C41.1217 15.2775 41.1898 15.2099 41.2239 15.1423L41.7006 12.8791C41.7006 12.8454 41.7006 12.7778 41.6665 12.744C41.6325 12.7102 41.5984 12.6765 41.5303 12.6765H35.5375C34.9246 12.6765 34.6862 12.6089 34.5841 12.5751C34.516 12.5413 34.4138 12.4738 34.4138 12.2373C34.4138 12.0684 34.4479 11.832 34.516 11.5617L34.9927 9.29853C35.0608 9.02829 35.1289 8.79184 35.197 8.62294C35.2651 8.48782 35.3672 8.35271 35.4694 8.25137C35.5715 8.18381 35.7077 8.11625 35.878 8.08247C36.0823 8.04869 36.3206 8.04869 36.593 8.04869H39.0447C39.3171 8.04869 39.5214 8.08247 39.5895 8.15003C39.6235 8.18381 39.6235 8.21759 39.6235 8.28515C39.6235 8.35271 39.6235 8.42026 39.5895 8.48782C39.5895 8.48782 39.4873 8.92695 39.4533 9.06207C39.2149 9.06207 36.2866 9.06207 36.2866 9.06207C36.1163 9.06207 35.9801 9.16341 35.9461 9.29853L35.4694 11.4266V11.4604C35.4694 11.4942 35.4694 11.528 35.5034 11.5617C35.5375 11.5955 35.5715 11.6293 35.6396 11.6293H41.8368C41.9049 11.6293 41.973 11.5617 41.973 11.4942L42.6199 8.28515C42.7221 7.81224 42.7902 7.40688 42.7902 7.03531C42.7902 6.39351 42.5518 5.95438 42.1092 5.71792C41.7006 5.51524 40.9855 5.38013 39.93 5.38013L36.0482 5.51524Z"
                                            fill="white"/>
                                        <path clipRule="evenodd" d="M60.2748 5.51664C60.6938 5.44838 61.2526 5.41426 61.8812 5.41426L66.1768 5.38013C66.7356 5.38013 67.1896 5.38013 67.5737 5.44838C67.9579 5.51664 68.2722 5.61903 68.4817 5.72141C68.7262 5.85793 68.9008 6.02857 69.0056 6.26747C69.1104 6.50638 69.1453 6.74528 69.1453 7.05244C69.1453 7.39372 69.0754 7.80327 68.9707 8.28107L68.0976 12.4448C67.9579 13.0591 67.8182 13.5369 67.6436 13.8782C67.469 14.2536 67.2245 14.5608 66.9102 14.7655C66.5959 14.9703 66.2117 15.1068 65.7577 15.1751C65.3386 15.2433 64.7799 15.2775 64.1163 15.2775H59.8208C58.7381 15.2775 58.0048 15.1751 57.5857 14.9703C57.1317 14.7655 56.8872 14.3219 56.8872 13.6393C56.8872 13.298 56.9571 12.8884 57.0618 12.4106L57.9349 8.24694C58.0746 7.66675 58.2492 7.18895 58.4238 6.81353C58.5984 6.43812 58.8429 6.13096 59.1572 5.92619C59.4366 5.72141 59.8208 5.5849 60.2748 5.51664ZM60.2049 12.24C60.2049 12.4789 60.3097 12.5472 60.3795 12.5813C60.4843 12.6154 60.7637 12.6837 61.3574 12.6837H63.5576C63.9068 12.6837 64.1512 12.6837 64.3608 12.6495C64.5354 12.6154 64.6751 12.5472 64.7799 12.4789C64.8846 12.4106 64.9545 12.2741 65.0243 12.1376C65.0694 12.0274 65.1 11.8888 65.1348 11.7308C65.1538 11.6442 65.1742 11.5518 65.1989 11.455L65.6529 9.16842C65.6825 8.96647 65.7058 8.81939 65.7228 8.71173C65.7461 8.56466 65.7577 8.49112 65.7577 8.45171C65.7577 8.21281 65.6529 8.14455 65.5831 8.11043C65.4783 8.0763 65.2339 8.00804 64.6052 8.00804H62.4051C62.0908 8.00804 61.8463 8.00804 61.6368 8.04217C61.4622 8.0763 61.3225 8.11043 61.2177 8.17868C61.1129 8.24694 61.0431 8.38346 60.9732 8.51997C60.9034 8.69061 60.8335 8.92952 60.7637 9.23667L60.3097 11.5233C60.2802 11.7252 60.2569 11.8723 60.2398 11.98C60.2166 12.1271 60.2049 12.2006 60.2049 12.24Z"
                                            fill="white"
                                            fillRule="evenodd"/>
                                        <path
                                            d="M73.1685 0.722534C73.0901 0.722534 73.0117 0.791843 73.0117 0.861152L69.7583 15.0695C69.7583 15.1042 69.7583 15.1735 69.7975 15.2081C69.8367 15.2428 69.8759 15.2774 69.9543 15.2774H73.0901C73.1685 15.2774 73.2469 15.2081 73.2469 15.1388L76.5002 0.930461C76.5002 0.895807 76.5002 0.826498 76.461 0.791843C76.4218 0.757189 76.3826 0.722534 76.3043 0.722534H73.1685V0.722534Z"
                                            fill="white"/>
                                        <path
                                            d="M27.4383 5.38013C27.3664 5.38013 27.2944 5.44838 27.2944 5.51664L26.0352 11.455C25.9632 11.7281 25.9273 11.9328 25.8553 12.1035C25.7833 12.24 25.7114 12.3765 25.6035 12.4448C25.4955 12.513 25.3516 12.5813 25.1717 12.6154C24.9559 12.6495 24.812 12.6495 24.4882 12.6495H24.1284C23.4808 12.6495 23.2289 12.5813 23.121 12.5472C23.0491 12.513 22.9411 12.4448 22.9411 12.2059C22.9411 12.1376 24.3442 5.5849 24.3442 5.5849V5.55077C24.3442 5.51664 24.3442 5.48251 24.3083 5.44838C24.2723 5.41426 24.2363 5.38013 24.1644 5.38013H21.2862C21.2142 5.38013 21.1422 5.44838 21.1422 5.51664L19.883 11.455C19.8111 11.7281 19.7751 11.9328 19.7031 12.1035C19.6312 12.24 19.5592 12.3765 19.4513 12.4448C19.3434 12.513 19.1995 12.5813 19.0196 12.6154C18.8037 12.6495 18.6598 12.6495 18.336 12.6495H17.8683C17.2207 12.6495 17.1128 12.5813 17.0048 12.5472C16.9329 12.513 16.8249 12.4106 16.8249 12.1717C16.8249 12.0011 16.8969 11.7963 16.9329 11.5233L18.1921 5.5849C18.1921 5.55077 18.1921 5.48251 18.1561 5.44838C18.1201 5.41426 18.0842 5.38013 18.0122 5.38013H15.134C15.062 5.38013 14.9901 5.44838 14.9901 5.51664L13.551 12.3765C13.4071 12.9226 13.3711 13.298 13.3711 13.6052C13.3711 14.2877 13.6229 14.7314 14.0906 14.9362C14.5584 15.1409 15.3139 15.2433 16.4292 15.2433H18.3C18.8397 15.2433 19.7031 15.1068 20.0989 14.9362C20.4227 14.7997 20.6745 14.629 20.8904 14.356C20.9983 14.629 21.2862 14.902 21.61 15.0386C22.0057 15.2092 22.6533 15.2775 23.7686 15.2775H26.2511C27.5822 15.2775 28.5176 15.0044 28.8055 13.6734L30.5324 5.61903C30.5324 5.5849 30.5324 5.51664 30.4964 5.48251C30.4604 5.44838 30.4244 5.41426 30.3525 5.41426L27.4383 5.38013Z"
                                            fill="white"/>
                                        <path
                                            d="M49.032 5.41426C48.4006 5.41426 47.8394 5.44838 47.4185 5.51664C46.9625 5.5849 46.5766 5.72141 46.296 5.92619C45.9804 6.13096 45.7348 6.43812 45.5594 6.81353C45.3841 7.18895 45.2087 7.66675 45.0684 8.24694L44.1915 12.4106C44.0863 12.8884 44.0161 13.298 44.0161 13.6393C44.0161 13.9806 44.0863 14.2536 44.1915 14.4584C44.2967 14.6631 44.4721 14.8679 44.7527 14.9703C44.9982 15.0727 45.3139 15.1751 45.6647 15.2092C46.0154 15.2433 46.4363 15.2775 46.9976 15.2775H54.1881C54.2582 15.2775 54.3284 15.2092 54.3284 15.1409L55.6613 8.82713C55.6613 8.793 55.6613 8.72474 55.6262 8.69061C55.5911 8.65649 55.556 8.62236 55.4859 8.62236H52.6798C52.6097 8.62236 52.5395 8.69061 52.5395 8.75887C52.0134 11.2844 52.0835 11.0114 51.7328 12.6837C51.4873 12.6837 48.5058 12.6837 48.5058 12.6837C47.8744 12.6837 47.6289 12.6154 47.5237 12.5813C47.4535 12.5472 47.3483 12.4789 47.3483 12.24C47.3483 12.1717 47.3834 12.0011 47.4535 11.5233L47.9446 9.23667C48.0148 8.92952 48.0849 8.69061 48.1551 8.51997C48.2252 8.38346 48.2954 8.24694 48.4006 8.17868C48.5058 8.11043 48.6461 8.0763 48.8215 8.04217C49.032 8.00804 49.2775 8.00804 49.5932 8.00804H51.8731C51.9432 8.00804 52.0134 7.93978 52.0485 7.87153L52.5045 5.5849C52.5045 5.55077 52.5045 5.48251 52.4694 5.44838C52.4343 5.41426 52.3992 5.38013 52.3291 5.38013L49.032 5.41426Z"
                                            fill="white"/>
                                    </svg>
                                </div>
                                <div className={'account-purchase-wrapper'}>
                                    <div className={'base-account'}>
                                        <div aria-label="Open Menu" className="account-button">
                                            {/* SVG or icons */}
                                            <div className="img"></div>
                                        </div>
                                    </div>
                                    <div className={'base-favourites'}>
                                        <div aria-label="Open Menu" className="favourites-button">
                                            {/* SVG or icons */}
                                            <i className="svg-header-icon svg-header-icon--minicart">
                                                <svg fill="none" height="24" viewBox="0 0 24 24"
                                                    width="24" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M3.25 15.75V14.25H10.75V15.75H3.25ZM3.25 11.75V10.25H14.75V11.75H3.25ZM3.25 7.75V6.25H14.75V7.75H3.25Z"
                                                        fill="white"/>
                                                    <path
                                                        d="M13.894 22L15.0747 18.1919L12 15.6997H15.7888L17 12L18.2112 15.6997H22L18.9253 18.1919L20.106 22L17 19.6468L13.894 22Z"
                                                        fill="white"/>
                                                </svg>
                                            </i>
                                        </div>
                                    </div>
                                    <div className={'base-minicart'}>
                                        <div aria-label="Open Menu" className="minicart-button">
                                            {/* SVG or icons */}
                                            <i className="svg-header-icon svg-header-icon--minicart">
                                                <svg fill="none" height="24" viewBox="0 0 24 24"
                                                    width="24" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M7.15 21.55C6.66667 21.55 6.25433 21.3793 5.913 21.038C5.571 20.696 5.4 20.2833 5.4 19.8C5.4 19.3167 5.571 18.904 5.913 18.562C6.25433 18.2207 6.66667 18.05 7.15 18.05C7.63333 18.05 8.04567 18.2207 8.387 18.562C8.729 18.904 8.9 19.3167 8.9 19.8C8.9 20.2833 8.729 20.696 8.387 21.038C8.04567 21.3793 7.63333 21.55 7.15 21.55ZM16.85 21.55C16.3667 21.55 15.9543 21.3793 15.613 21.038C15.271 20.696 15.1 20.2833 15.1 19.8C15.1 19.3167 15.271 18.904 15.613 18.562C15.9543 18.2207 16.3667 18.05 16.85 18.05C17.3333 18.05 17.7457 18.2207 18.087 18.562C18.429 18.904 18.6 19.3167 18.6 19.8C18.6 20.2833 18.429 20.696 18.087 21.038C17.7457 21.3793 17.3333 21.55 16.85 21.55ZM6.025 5.75L8.55 11.05H15.375C15.425 11.05 15.475 11.0373 15.525 11.012C15.575 10.9873 15.6083 10.95 15.625 10.9L18.325 6.025C18.3583 5.95833 18.3583 5.896 18.325 5.838C18.2917 5.77933 18.2417 5.75 18.175 5.75H6.025ZM5.3 4.25H19.175C19.6417 4.25 19.971 4.42067 20.163 4.762C20.3543 5.104 20.35 5.46667 20.15 5.85L16.925 11.65C16.775 11.9333 16.5667 12.154 16.3 12.312C16.0333 12.4707 15.7333 12.55 15.4 12.55H8.1L6.95 14.675C6.9 14.7583 6.896 14.8417 6.938 14.925C6.97933 15.0083 7.05 15.05 7.15 15.05H18.6V16.55H7.15C6.48333 16.55 5.98333 16.2627 5.65 15.688C5.31667 15.1127 5.30833 14.5417 5.625 13.975L7.05 11.4L3.4 3.75H1.5V2.25H4.35L5.3 4.25Z"
                                                        fill="white"/>
                                                </svg>
                                            </i>
                                            <span className={'jsx-minicart-header-icon-count'}>500</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* scanner bar - part of header or not */}
                            <div className={'scanner-container'} id="navbar" style={{
                                top: `${navbarTop}px`,
                            }}>
                                <div className={'input-wrapper'}>
                                    <div className={'search-button'}>
                                        <svg fill="none" height="24" viewBox="0 0 24 24" width="24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.5499 20.575L13.2499 14.3C12.7499 14.7167 12.1749 15.0417 11.5249 15.275C10.8749 15.5083 10.2082 15.625 9.5249 15.625C7.80824 15.625 6.35824 15.0333 5.1749 13.85C3.99157 12.6667 3.3999 11.2167 3.3999 9.5C3.3999 7.8 3.99157 6.354 5.1749 5.162C6.35824 3.97067 7.80824 3.375 9.5249 3.375C11.2249 3.375 12.6666 3.96667 13.8499 5.15C15.0332 6.33333 15.6249 7.78333 15.6249 9.5C15.6249 10.2167 15.5082 10.9 15.2749 11.55C15.0416 12.2 14.7249 12.7667 14.3249 13.25L20.5999 19.525L19.5499 20.575ZM9.5249 14.125C10.8082 14.125 11.8959 13.675 12.7879 12.775C13.6792 11.875 14.1249 10.7833 14.1249 9.5C14.1249 8.21667 13.6792 7.125 12.7879 6.225C11.8959 5.325 10.8082 4.875 9.5249 4.875C8.2249 4.875 7.12924 5.325 6.2379 6.225C5.3459 7.125 4.8999 8.21667 4.8999 9.5C4.8999 10.7833 5.3459 11.875 6.2379 12.775C7.12924 13.675 8.2249 14.125 9.5249 14.125Z"
                                                fill="black"/>
                                        </svg>
                                    </div>
                                    {/* 'body-md --- needs to override, eg ... use that size and it wont adapt in mobile etc' */}
                                    <div className={'input body-md'}>
                                    Sök produkt, kategori, varumärke
                                    </div>
                                    <div className={'scanner-icon'}>
                                        <svg fill="none" height="20" viewBox="0 0 20 20" width="20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2.41699 6.02099V2.41699H6.02099V3.49999H3.49999V6.02099H2.41699ZM2.41699 17.583V13.979H3.49999V16.5H6.02099V17.583H2.41699ZM13.979 17.583V16.5H16.5V13.979H17.583V17.583H13.979ZM16.5 6.02099V3.49999H13.979V2.41699H17.583V6.02099H16.5ZM13.771 13.771H14.646V14.646H13.771V13.771ZM13.771 12H14.646V12.896H13.771V12ZM12.896 12.896H13.771V13.771H12.896V12.896ZM12 13.771H12.896V14.646H12V13.771ZM11.125 12.896H12V13.771H11.125V12.896ZM12.896 11.125H13.771V12H12.896V11.125ZM12 12H12.896V12.896H12V12ZM11.125 11.125H12V12H11.125V11.125ZM15.146 4.85399V8.87499H11.125V4.85399H15.146ZM8.87499 11.125V15.146H4.85399V11.125H8.87499ZM8.87499 4.85399V8.87499H4.85399V4.85399H8.87499ZM8.12499 14.396V11.875H5.60399V14.396H8.12499ZM8.12499 8.12499V5.60399H5.60399V8.12499H8.12499ZM14.396 8.12499V5.60399H11.875V8.12499H14.396Z"
                                                fill="black"/>
                                        </svg>
                                    </div>
                                </div>
                                {/* input-wrapper */}
                            </div>
                        </header>

                        <div className={'top-container'}></div>
                        <div className={'breadcrumbs'}>
                            <ul className={'items'}>
                                <li className={'item 0'}><a href="#" title="Gå till hemsidan">Hem</a>
                                </li>
                                <li className={'item 1'}><a href="#"
                                    title="Oljor och kem">Oljor och kem</a></li>
                                <li className={'item 2'}><a
                                    href="#"
                                    title="Fordonskem">Fordonskem</a></li>
                                <li className={'item 3'}><a
                                    href="#"
                                    title="Tillsatser">Tillsatser</a></li>
                            </ul>
                        </div>

                        <main className={'page-main'} id={'maincontent'}>
                            <div>Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum
                            Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum
                            Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum
                            Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum
                            Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum
                            Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum
                            Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum
                            Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum
                            Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum
                            Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum
                            Laurem Ipsum Laurem Ipsum
                            Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum
                            Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum
                            Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum
                            Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum
                            Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum
                            Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum
                            Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum
                            Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum
                            Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum
                            Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum
                            Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum
                            Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum
                            Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum
                            Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum
                            Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum
                            Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum
                            Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum
                            Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum
                            Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum
                            Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum Laurem Ipsum
                            Laurem Ipsum Laurem Ipsum
                            </div>
                        </main>

                    </div>
                    {/* alligo-page-wrapper */}
                </div>
                {/* alligo-page-body */}

            </main>
        </div>

    );
};

/*
Tests.propTypes = {
    classNames: PropTypes.string,
    isActive: PropTypes.bool.isRequired,
};
 */

export default Tests;
