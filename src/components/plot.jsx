import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ScatterChart } from 'rd3';

import * as actions from '../actions/actions';

import Loading from './loading';
import ErrorMsg from './error';

class Plot extends Component {

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0, data: null };
    this._updateWindowDimensions = this._updateWindowDimensions.bind(this);
  }

  componentWillMount() {
    this.props.actions.getData();
  }

  componentDidMount() {
    this._updateWindowDimensions();
    window.addEventListener('resize', this._updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._updateWindowDimensions);
  }

  _updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <section className='plot-cont'>
        {this._render()}
      </section>
    );
  }

  _render() {
    const { isLoading, error } = this.props;

    if (isLoading) return <Loading />;
    else if (error) return <ErrorMsg />;
    else return this._renderPlot();
  }

  _renderPlot() {
    const { width, height } = this.state;
    const { data } = this.props;
    return (
      <ScatterChart
        data={[{ values: data }]}
        width={width}
        height={height}
        circleRadius={1.5}
        hoverAnimation={false}
        margins={{top: 50, right: 20, bottom: 50, left: 80}}
      />
    );
  }
}

Plot.propTypes = {
  actions: PropTypes.object,
  data: PropTypes.array,
  error: PropTypes.bool,
  isLoading: PropTypes.bool
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
    isLoading: state.isLoading,
    error: state.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Plot);
