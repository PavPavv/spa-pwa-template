import React, { memo, ReactElement } from 'react';
import cx from 'classnames';

import Typography from '../Typography';

import styles from './Button.styles.scss';

type TButtonProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement> &
    React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  color?: 'primary' | 'secondary' | 'action';
};

const Button = ({
  children,
  onClick,
  disabled,
  color = 'primary',
}: TButtonProps): ReactElement => {
  return (
    <button
      className={cx(styles.btn, {
        [styles.primary]: color === 'primary',
        [styles.secondary]: color === 'secondary',
        [styles.action]: color === 'action',
      })}
      onClick={onClick}
      disabled={disabled}
    >
      <Typography>{children}</Typography>
    </button>
  );
};

export default memo(Button);
