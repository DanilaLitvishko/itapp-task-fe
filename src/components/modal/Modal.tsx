import React from 'react';
import ModalComponent from '@material-ui/core/Modal';
import { Card, CardContent, CardHeader } from '@material-ui/core';

import styles from './Modal.module.scss';

interface IProps {
  isOpen: boolean;
  handleClose: () => any;
  title: string;
  children: React.ReactNode;
  modalWidth?: string;
  disableEnforceFocus?: boolean;
}

const Modal: React.FC<IProps> = ({
  isOpen,
  handleClose,
  title,
  children,
  modalWidth = '25rem',
  disableEnforceFocus,
}: IProps) => (
  <ModalComponent
    className={styles.modalWindow}
    open={isOpen}
    onClose={handleClose}
    disableEnforceFocus={disableEnforceFocus}
  >
    <Card className={styles.modalCard} style={{ width: `${modalWidth || ''}` }} variant="outlined">
      {title ? <CardHeader title={title} /> : null}
      <CardContent className={styles.modalCardContent}>{children}</CardContent>
    </Card>
  </ModalComponent>
);

export default Modal;
