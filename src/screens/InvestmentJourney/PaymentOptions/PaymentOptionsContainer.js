

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PaymentOptionsComponent from './PaymentOptionsComponent';

const PaymentOptionsContainer = (props) => {

  useEffect(() => {
    
  }, []);

  return (
    <PaymentOptionsComponent
     props={props} />
  );

};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(PaymentOptionsContainer);

