import React from 'react';

import CalcButton from './CalcButton';
// 計算機 App
class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curNumDisplay: 0,
      preNum: -1,
      operator: '',
      change: 0,
      start: 1
    };

    this.resetState = this.resetState.bind(this);
    this.onClick = this.onClick.bind(this);
    this.mathOperation = this.mathOperation.bind(this);
  }

  resetState() {
    this.setState({
      curNumDisplay: 0, preNum: -1, operator: '',
      change: 0, start: 1 
    });
  }

  mathOperation(op, num1, num2) {
    if (op === '+') {
      return (num2 + num1);
    } else if (op === '-') {
      return (num2 - num1);
    } else if (op === 'x') {
      return (num2 * num1);
    } else if (op === '÷') {
      return (Math.round(num2 / num1));
    }
  }

  onClick(children) {
    if (children === '=' || children === '+' ||
        children === '-' || children === 'x' ||
        children === '÷') {
      let calcRes = 0;
      const op = this.state.operator;
      const num1 = this.state.curNumDisplay;
      const num2 = this.state.preNum;
      if (num2 != -1 && op !== '') {
        calcRes = this.mathOperation(op, num1, num2);
      }

      if (children === '=' && op !== '') {
        this.setState({ curNumDisplay: calcRes, preNum: num1, change: 1, start: 1});
      } else if (children !== '=') {
        let opCnt = 0;
        if (children === op) {
          opCnt = 1;
        }
        if (num2 != -1) {
          this.setState({ curNumDisplay: calcRes, preNum: num1, operator: children, change: 1});
        } else {
          this.setState({ operator: children, change: 1});
        }
      }
    } else {
      let newNum = children*1;
      let preNum = this.state.curNumDisplay;
      let op = this.state.operator;
      if (preNum != 0 && this.state.change == 0) {
        newNum = 10 * preNum + 1 * children;
      }
      if (op === '' || this.state.start === 1) {
        preNum = -1;
      }
      this.setState({
        curNumDisplay: newNum, preNum: preNum,
        change: 0, start: 0
      });
    }
  }

  showNotImplemented() {
    console.warn('This function is not implemented yet.');
  }

  render() {
    return (
      <div className="calc-app">
        <div className="calc-container">
          <div className="calc-output">
            <div className="calc-display">
              { this.state.curNumDisplay}
            </div>
          </div>
          <div className="calc-row">
            <CalcButton onClick={this.resetState.bind(this)}>AC</CalcButton>
            <CalcButton onClick={this.showNotImplemented.bind(this)}>+/-</CalcButton>
            <CalcButton onClick={this.showNotImplemented.bind(this)}>%</CalcButton>
            <CalcButton className="calc-operator" onClick={this.onClick}>÷</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={this.onClick}>7</CalcButton>
            <CalcButton className="calc-number" onClick={this.onClick}>8</CalcButton>
            <CalcButton className="calc-number" onClick={this.onClick}>9</CalcButton>
            <CalcButton className="calc-operator" onClick={this.onClick}>x</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={this.onClick}>4</CalcButton>
            <CalcButton className="calc-number" onClick={this.onClick}>5</CalcButton>
            <CalcButton className="calc-number" onClick={this.onClick}>6</CalcButton>
            <CalcButton className="calc-operator" onClick={this.onClick}>-</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={this.onClick}>1</CalcButton>
            <CalcButton className="calc-number" onClick={this.onClick}>2</CalcButton>
            <CalcButton className="calc-number" onClick={this.onClick}>3</CalcButton>
            <CalcButton className="calc-operator" onClick={this.onClick}>+</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number zero" onClick={this.onClick}>0</CalcButton>
            <CalcButton className="calc-operator">.</CalcButton>
            <CalcButton className="calc-operator" onClick={this.onClick}>=</CalcButton>
          </div>
        </div>
      </div>
    );
  }
}

export default CalcApp;
