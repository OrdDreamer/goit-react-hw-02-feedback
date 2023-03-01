import styles from './feedback-options.module.css';
import PropTypes from 'prop-types';
import Section from '../Section/Section';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {

  return (
    <Section title='Please leave feedback'>
      <div className={styles.buttonsContainer}>
        {
          options.map((option, i) => {
            return (<button key={i} className={styles.rateButton} onClick={() => {
              onLeaveFeedback(option);
            }}>{option}</button>)
          })
        }
      </div>
    </Section>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
