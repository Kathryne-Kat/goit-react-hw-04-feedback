import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  feedbackGood = () => {
    this.setState({ good: this.state.good + 1 });
  };
  feedbackNeutral = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  };
  feedbackBad = () => {
    this.setState({ bad: this.state.bad + 1 });
  };
  countTotalFeedback = () => {
    // return this.state.good + this.state.neutral + this.state.bad;

    this.setState({
      total: this.state.good + this.state.neutral + this.state.bad,
    });
  };
  countPositiveFeedbackPercentage = () => {
    //return (this.state.good / this.state.total) * 100;

    this.setState({
      positivePercentage: (this.state.good / this.countTotalFeedback()) * 100,
    });
    console.log(this.state.positivePercentage);
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <h2>Please leave feedback</h2>
        <div>
          <button onClick={this.feedbackGood}>Good</button>
          <button onClick={this.feedbackNeutral}>Nautral</button>
          <button onClick={this.feedbackBad}>Bad</button>
        </div>
        <h3>Statistics</h3>
        <p>
          Good: <span good={this.state.good}>{this.state.good}</span>
        </p>
        <p>
          Neutral:<span neutral={this.state.neutral}>{this.state.neutral}</span>
        </p>
        <p>
          Bad: <span bad={this.state.bad}>{this.state.bad}</span>
        </p>
        <p>
          Total:
          <span total={this.state.total}>{this.state.total}</span>
        </p>
        <p>
          Positive feedback:
          <span posFeedback={this.state.positivePercentage}>
            {this.state.positivePercentage}%
          </span>
        </p>
      </div>
    );
  }
}
