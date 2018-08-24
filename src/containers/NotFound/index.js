import React, { Fragment } from "react";
import PropTypes from "prop-types";
import messages from "../../configs/messages.json";

const NotFound = ({ location }) => (
  <Fragment>
    <div className="not-found-wrapper">
      <h3>
        {messages.notfound} {location.pathname}
      </h3>
    </div>
  </Fragment>
);

NotFound.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired })
    .isRequired
};
export default NotFound;
