import { Component, useState } from 'react';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';
import css from './App.module.css';

// export default class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = options => {
//     this.setState(prevState => ({ [options]: prevState[options] + 1 }));
//   };

//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };
//   countPositiveFeedbackPercentage = () => {
//     return parseInt((this.state.good / this.countTotalFeedback()) * 100) || 0;
//   };

//   render() {
//     const total = this.countTotalFeedback();

//     return (
//       <div className={css.container}>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//           {total ? (
//             <Statistics
//               title="Statistics"
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={total}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [options, setOption] = useState({ good: 0, neutral: 0, bad: 0 });

  if ((options = 'good')) setGood(options);
  if ((options = 'neutral')) setNeutral(options);
  if ((options = 'bed')) setBad(options);

  const onLeaveFeedback = options => {
    //this.setState(prevState => ({ [options]: prevState[options] + 1 }));
    setOption(prevOptions => ({
      good: prevOptions.good + 1,
      neutral: prevOptions.neutral + 1,
      bad: prevOptions.bad + 1,
    }));
    // setGood(prevState => prevState[options] + 1);
    // setNeutral(prevState => prevState[options] + 1);
    // setBad(prevState => prevState[options] + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return parseInt((good / countTotalFeedback()) * 100) || 0;
  };

  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={onLeaveFeedback}
        />
        {countTotalFeedback() ? (
          <Statistics
            title="Statistics"
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
