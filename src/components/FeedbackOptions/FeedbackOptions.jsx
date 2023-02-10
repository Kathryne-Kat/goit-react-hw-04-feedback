import PropTypes from 'prop-types';
import css from './Feedback.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map((opt, ind) => {
        return (
          <button
            className={css.btn}
            key={ind}
            type="button"
            onClick={() => onLeaveFeedback(opt)}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
