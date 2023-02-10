import { Component } from 'react';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';
import css from './App.module.css';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = options => {
    this.setState(prevState => ({ [options]: prevState[options] + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return parseInt((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              title="Statistics"
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
