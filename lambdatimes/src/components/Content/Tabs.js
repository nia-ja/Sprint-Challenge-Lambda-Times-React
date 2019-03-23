import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
          { props.tabs.map((tab, index) => (<Tab tab={tab} selectedTab={props.selectedTab} selectTabHandler={props.selectTabHandler} key={index} />)) }        
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.array,
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func
}

export default Tabs;
