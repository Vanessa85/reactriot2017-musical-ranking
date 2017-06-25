import React, { Component } from 'react';
import $ from 'jquery';

const YEAR = (new Date()).getFullYear();
const MONTH = (new Date()).getMonth() + 1;

class Setting extends Component {
  constructor(props) {
    super(props);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.state = {
      limitMonth: Number(props.year) === YEAR? MONTH : null
    };
  }

  componentWillMount() {
    this.months = [
      { value: 1, name: 'January' },
      { value: 2, name: 'February' },
      { value: 3, name: 'March' },
      { value: 4, name: 'April' },
      { value: 5, name: 'May' },
      { value: 6, name: 'June' },
      { value: 7, name: 'July' },
      { value: 8, name: 'August' },
      { value: 9, name: 'September' },
      { value: 10, name: 'October' },
      { value: 11, name: 'November' },
      { value: 12, name: 'December' },
    ];

    this.years = [];
    for (var i = 2009; i <= YEAR; i++) {
      this.years.push(i);
    }
  }

  componentDidMount() {
    $('#btn-setting').on('click', (e) => {
      $('#form-setting').toggle();
    });

    const { year, month } = this.props;
    this.selectYear.value = year;
    this.selectMonth.value = month;
  }

  render() {
    console.log('limitMonth', this.state.limitMonth)

    var months = this.state.limitMonth? this.months.filter( item => item.value <= MONTH ) : this.months;

    return (
      <div className="setting-component">
        Ranking by <a href="https://api.vagalume.com.br/docs/rank/" target="blank">Vagalume</a>
        <button id="btn-setting" className="button secondary tiny" style={{float: 'right', margin: 0}}>
          <i className="zmdi zmdi-settings zmdi-hc-fw"></i>
        </button>

        <form id="form-setting" onSubmit={ (e) => {
            e.preventDefault();
            this.props.onSubmit(this.selectYear.value, this.selectMonth.value);
          } }
          className="dropdown menu"
          style={{display: 'none'}}>
          <label>
            Year
            <select ref={ node => this.selectYear = node } onChange={this.onChangeYear}>
              { this.years.map(item => <option key={item} value={item}>{item}</option>) }
            </select>
          </label>
          <label>
            Month
            <select ref={ node => this.selectMonth = node }>
              { months.map(item => <option key={item.value} value={item.value}>{item.name}</option>) }
            </select>
          </label>
          <button type="submit" className="button tiny expanded" style={{marginTop: 10}}>Show</button>
        </form>
      </div>
    );
  }

  onChangeYear() {
    var year = this.selectYear.value;
    this.setState({ limitMonth: Number(year) === YEAR? MONTH : null });
  }
}

export default Setting;
