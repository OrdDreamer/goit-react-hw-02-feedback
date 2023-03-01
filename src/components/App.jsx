import { Component } from 'react';
import styles from './app.module.css';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  onLeaveFeedback = (value) => {
    console.log(value)
    this.setState((prevState) => {
      return {
        [value]: prevState[value] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.floor((this.state.good / (this.countTotalFeedback() || 1)) * 100);
  };

  static propTypes = {};

  render() {
    return (
      <div className={styles.feedback}>
        <FeedbackOptions options={Object.keys(this.state)}
                         onLeaveFeedback={this.onLeaveFeedback}
        />

        <Statistics good={this.state.good}
                    bad={this.state.bad}
                    neutral={this.state.neutral}
                    positivePercentage={this.countPositiveFeedbackPercentage()}
                    total={this.countTotalFeedback()}
        />
      </div>
    );
  }
}
