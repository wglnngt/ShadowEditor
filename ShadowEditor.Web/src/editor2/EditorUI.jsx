import './css/EditorUI.css';

import { BorderLayout, Window, Content, Buttons, Button } from '../third_party';

import EditorMenuBar from './menu/EditorMenuBar.jsx';
import EditorStatusBar from './status/EditorStatusBar.jsx';
import EditorToolbar from './toolbar/EditorToolbar.jsx';
import Viewport from './viewport/Viewport.jsx';
import TimelinePanel from './timeline/TimelinePanel.jsx';
import EditorSideBar from './sidebar/EditorSideBar.jsx';
import AssetsPanel from './assets/AssetsPanel.jsx';

/**
 * 编辑器UI
 * @author tengge / https://github.com/tengge1
 */
class EditorUI extends React.Component {
    render() {
        return <BorderLayout className={'EditorUI'}>
            <EditorMenuBar region={'north'}></EditorMenuBar>
            <EditorStatusBar region={'south'}></EditorStatusBar>
            <EditorToolbar region={'west'}></EditorToolbar>
            <EditorSideBar region={'east'} split={true}></EditorSideBar>
            <BorderLayout region={'center'}>
                <AssetsPanel region={'west'} split={true}></AssetsPanel>
                <Viewport region={'center'}></Viewport>
                <TimelinePanel region={'south'} split={true}></TimelinePanel>
            </BorderLayout>
            <Window title={'Message'} mask={false}>
                <Content>
                    Welcome to use ShadowEditor!
                </Content>
                <Buttons>
                    <Button>OK</Button>
                    <Button>Cancel</Button>
                </Buttons>
            </Window>
        </BorderLayout>;
    }
}

export default EditorUI;