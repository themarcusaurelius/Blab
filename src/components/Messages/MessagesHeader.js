import React from 'react'
import { Header, Input, Icon, Segment } from 'semantic-ui-react';

class MessagesHeader extends React.Component {
    render() {
        const { 
            channelName, 
            numUniqueUsers, 
            handleSearchChange, 
            searchLoading,
            isPrivateChannel,
            handleStar,
            isChannelStarred
        } = this.props;

        return (
            <div >
                <Segment clearing raised className="header" style={{ maxWidth: 600 }}>
                     {/* Channel Title */}
                    <Header fluid="true" as="h4" floated="left" style={{ marginBottom: 0}}>
                        <span>
                            {channelName}
                            {!isPrivateChannel && (
                                <Icon 
                                    onClick={handleStar} 
                                    name={isChannelStarred ? 'star' : 'star outline'} 
                                    color={isChannelStarred ? 'yellow' : 'black'}
                                />
                            )}
                        </span>        
                        <Header.Subheader>
                            <Icon name={"user"} color="violet" />{numUniqueUsers}  
                        </Header.Subheader>
                    </Header>

                    {/* Channel Search Input */}
                    <Header floated="right" className="search">
                        <Input
                            loading={searchLoading}
                            onChange={handleSearchChange}
                            icon="search"
                            name="searchTerm"
                            placeholder="Search"
                            size="mini"
                            fluid
                        />
                    </Header> 
                </Segment>   
            </div>
        );
    }
};

export default MessagesHeader;