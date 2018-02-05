import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

import './style.scss'

const InnerNavi = props => {
    const {cat, location} = props;
    const items = props.items.map(item => {
        const href = '/'+cat +item.to;
        return(
           <li className={location.pathname == href ? 'active':''}>
               <Link to={href}>
                   {item.title}
               </Link>
            </li>);
        });
    return (
        <div className='inner-nav'>
            <ul>
                {items}
            </ul>
        </div>
    );
};

InnerNavi.propTypes = {
    
};

export default InnerNavi;
