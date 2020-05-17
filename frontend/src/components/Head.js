import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import SiteInfo from 'constants/SiteInfo.json';

const Head = ({ title }) => (
  <Helmet>
    <title>{title}</title>
  </Helmet>
);

Head.propTypes = {
  title: PropTypes.string.isRequired,
};

Head.defaultProps = {
  title: SiteInfo.name,
};

export default Head;
