import { Link } from 'gatsby-plugin-i18next';
import React from 'react';
import ListItem from './directorListItem';

const List = ({ items, error }) => {
    const renderItems = (data) => {
        return data.map((item, i) =>
            <Link key={i} to={`/${item.node.path}`}>
                <ListItem
                    title={item.node.title}
                    avatar={item.node.avatar}
                    birthDate={item.node.birthDate}
                    deathDate={item.node.deathDate}
                    description={item.node.description}
                />
            </Link>
        )
    };
    return <ul>{items.length ? renderItems(items) : <li>{error}</li>}</ul>
};

export default List;