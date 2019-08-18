import { classNames, PropTypes, MenuBar, MenuItem, MenuItemSeparator } from '../../third_party';
import OptionsWindow from '../window/OptionsWindow.jsx';

/**
 * 选项菜单
 * @author tengge / https://github.com/tengge1
 */
class OptionsMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };

        this.handleRendererOptions = this.handleRendererOptions.bind(this);
        this.handleHelperOptions = this.handleHelperOptions.bind(this);
        this.handleFilterOptions = this.handleFilterOptions.bind(this);

        this.handleChangeEnglish = this.handleChangeEnglish.bind(this);
        this.handleChangeChinese = this.handleChangeChinese.bind(this);
    }

    render() {
        const { className, style } = this.props;

        return <MenuItem title={_t('Options')}>
            <MenuItem title={_t('Renderer')} onClick={this.handleRendererOptions}></MenuItem>
            <MenuItem title={_t('Helpers')} onClick={this.handleHelperOptions}></MenuItem>
            <MenuItem title={_t('Filter')} onClick={this.handleFilterOptions}></MenuItem>
            <MenuItemSeparator></MenuItemSeparator>
            <MenuItem title={_t('Language')}>
                <MenuItem title={'English'} onClick={this.handleChangeEnglish}></MenuItem>
                <MenuItem title={'汉语'} onClick={this.handleChangeChinese}></MenuItem>
            </MenuItem>
        </MenuItem>;
    }

    // ---------------------------------- 渲染器选项 -------------------------------------

    handleRendererOptions() {
        let win = app.createElement(OptionsWindow, {
            activeTabIndex: 0,
        });
        app.addElement(win);
    }

    // ------------------------------- 帮助器选项 -----------------------------------------

    handleHelperOptions() {
        let win = app.createElement(OptionsWindow, {
            activeTabIndex: 1,
        });
        app.addElement(win);
    }

    // ------------------------------ 滤镜选项 ---------------------------------------------

    handleFilterOptions() {
        let win = app.createElement(OptionsWindow, {
            activeTabIndex: 2,
        });
        app.addElement(win);
    }

    // ---------------------------- 语言选项 -------------------------------------------------

    handleChangeEnglish() {
        window.localStorage.setItem('lang', 'en-US');
        window.location.reload();
    }

    handleChangeChinese() {
        window.localStorage.setItem('lang', 'zh-CN');
        window.location.reload();
    }
}

export default OptionsMenu;