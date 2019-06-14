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
            <React.Fragment>
                <Segment clearing raised>
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
                    <Header floated="right">
                        <Input
                            loading={searchLoading}
                            onChange={handleSearchChange}
                            icon="search"
                            name="searchTerm"
                            placeholder="Search"
                            fluid="true"
                            size="mini"
                            
                        />
                    </Header> 
                </Segment>   
            </React.Fragment>
        );
    }
};

export default MessagesHeader;