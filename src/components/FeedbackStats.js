import React from 'react';
import PropTypes from 'prop-types';

function FeedbackStats({ feedback }) {
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;
  average = average.toFixed(1).replace(/[.,]0$/, '');
  return (
    <div className="feedback-stats">
      <h3>{feedback.length} Reviews</h3>
      <h3>Avarage Rating: {isNaN(average) ? 0 : average} </h3>
    </div>
  );
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackStats;
