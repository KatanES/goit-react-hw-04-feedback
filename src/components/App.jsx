import { Component } from 'react';
import { Section } from './Section';
import { FeedbackOptions } from './Feedback/Feedback';
import { Statistics } from './StatisticsList';
import { Notification } from './Feedback/Notification';
import { FeedbackSection } from './Feedback/Feedback.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    const positiveFeedbackPercentage = totalFeedback
      ? Math.round((good / totalFeedback) * 100)
      : 0;

    return (
      <FeedbackSection>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        <Section title="Statistics">
          {totalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </FeedbackSection>
    );
  }
}
