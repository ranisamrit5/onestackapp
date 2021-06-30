

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import InvestInComponent from './InvestInComponent';

const InvestInContainer = (props) => {

  useEffect(() => {
    
  }, []);

  return (
    <InvestInComponent
     props={props} />
  );

};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(InvestInContainer);

