import React from 'react';

import styles from './TimeBoard.styles.scss';

type TTimeBoardProps = {
  time: string;
};

const TimeBoard = ({ time }: TTimeBoardProps): JSX.Element => {
  return (
    <div className={styles.timer}>
      <div className={styles.timer__panel}>
        <div className={styles.timer_block}>
          <div className={styles.time}>{time}</div>
        </div>
      </div>
    </div>
  );
};

export default TimeBoard;
