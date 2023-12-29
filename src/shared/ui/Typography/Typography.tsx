import React from 'react';

import styles from './Typography.styles.scss';

type TTypographyProps = {
  children: React.ReactNode;
};

const Typography = ({ children }: TTypographyProps): JSX.Element => {
  return <span>{children}</span>;
};

export default Typography;
