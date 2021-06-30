

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import FundInfoComponent from './FundInfoComponent';

const FundInfoContainer = (props) => {

  useEffect(() => {
    
  }, []);

  return (
    <FundInfoComponent
     props={props} />
  );

};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(FundInfoContainer);

