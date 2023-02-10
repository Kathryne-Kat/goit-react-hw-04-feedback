import PropTypes from 'prop-types';

export const Statistics = ({
  title,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>
        Good: <span>{good}</span>
      </p>
      <p>
        Neutral:<span>{neutral}</span>
      </p>
      <p>
        Bad: <span>{bad}</span>
      </p>
      <p>
        total: <span>{total}</span>
      </p>
      <p>
        Positive feedback:
        <span>{positivePercentage}%</span>
      </p>
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
