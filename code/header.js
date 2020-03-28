import PropTypes from 'prop-types';
import React from 'react';


/**
 * The header partial component
 */
const Header = ({ _body }) => (
    <header role="banner">
        { _body }
    </header>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
