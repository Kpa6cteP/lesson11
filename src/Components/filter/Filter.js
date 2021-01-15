import React from 'react';
import { setFilter } from '../../redux/action/todoActions';
import { connect } from 'react-redux'


function Filter({ filter, setFilter }) {

  const onHandleChange = (e) => {
    setFilter(e.target.value)
  }

  return (
    <div>
      <input type="text" onChange={onHandleChange} value={filter} />
    </div>
  );
}

const mstp = (state) => {
  return { filter: state.filter }
}

export default connect(mstp, { setFilter })(Filter);