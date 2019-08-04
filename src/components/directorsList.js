import { Link } from 'gatsby-plugin-i18next';
import React from 'react';
import DirectorsListItem from './directorListItem';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const DirectorsList = ({ items, error }) => {
    const renderItems = (data) => {
        return data.map((item, i) =>
            <Link key={i} to={`/${item.node.path}`}>
                <DirectorsListItem
                    title={item.node.title}
                    avatar={item.node.avatar}
                    birthDate={item.node.birthDate}
                    deathDate={item.node.deathDate}
                    description={item.node.description}
                />
            </Link>
        )
    }
    return <List>{items.length ? renderItems(items) : <ListItem alignItems="flex-start"><ListItemText>{error}</ListItemText></ListItem>}</List>
}

export default DirectorsList;