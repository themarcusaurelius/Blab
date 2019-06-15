import React from 'react';
import { Menu } from 'semantic-ui-react';

import UserPanel from './UserPanel';
import Starred from './Starred';
import Channels from './Channels';
import DirectMessages from './DirectMessages';

class SidePanel extends React.Component {
    render() {
        const { currentUser, primaryColor, handleChangeIndex } = this.props
    
        return (
            <Menu
                size="large"
                inverted
                fixed="left"
                vertical
                style={{ background: primaryColor, frontSize: "3rem"}}
            >
                <UserPanel currentUser={currentUser} />
                <Starred currentUser={currentUser} />
                <Channels currentUser={currentUser} onChangeIndex={handleChangeIndex} />
                <DirectMessages currentUser={currentUser} onChangeIndex={handleChangeIndex} />
            </Menu>
        );
    }
};

export default SidePanel;