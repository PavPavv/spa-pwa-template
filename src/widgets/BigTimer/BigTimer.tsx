import React, { useState, useCallback, useEffect, useRef } from 'react';

import { getClockTime } from '../../shared/utils';

import Box from '../../shared/ui/Box';
import Button from '../../shared/ui/Button';
import TimeBoard from '../../features/TimeBoard';

import styles from './BigTimer.styles.scss';

const BigTimer = (): JSX.Element => {
  const [isStart, setIsStart] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  const [isClear, setIsClear] = useState(false);
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  // const [nextDate, setNextDate] = useState<Date | undefined>(undefined);
  // const [stopDate, setStopDate] = useState<Date | undefined>(undefined);
  const [timer, setTimer] = useState('--:--:--');
  const intervalId = useRef<NodeJS.Timer | undefined>();

  const handleStart = useCallback(() => {
    const date = new Date();
    setIsStart(true);
    setStartDate(date);
  }, []);

  const handleStop = useCallback(() => {
    const date = new Date();
    setIsStart(false);
    setIsStopped(true);
    setIsClear(true);
    // setStopDate(date);
  }, []);

  const handleClear = useCallback(() => {
    const date = new Date();
    setIsStart(false);
    setIsClear(false);
    setIsStopped(false);
    setStartDate(undefined);
    // setStopDate(undefined);
    setTimer('--:--:--');
  }, []);

  useEffect(() => {
    if (isStart && startDate) {
      intervalId.current = setInterval(() => {
        setTimer(getClockTime(startDate));
      }, 1000);
    }

    return () => clearInterval(intervalId.current);
  }, [startDate, isStart]);

  return (
    <div className={styles.bigTimer}>
      <TimeBoard time={timer} />
      <div className={styles.controls}>
        <Button
          color='primary'
          disabled={isStart || isClear}
          onClick={handleStart}
        >
          Start
        </Button>
        <Box mr='10' />
        <Button
          color='secondary'
          disabled={!isStart || isStopped}
          onClick={handleStop}
        >
          Stop
        </Button>
        <Box mr='10' />
        <Button color='action' disabled={!isClear} onClick={handleClear}>
          Clear
        </Button>
      </div>
    </div>
  );
};

export default BigTimer;
