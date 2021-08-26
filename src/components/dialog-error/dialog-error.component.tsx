import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { DialogErrorProps } from "../../interfaces/dialog-error-props.interface";

const DialogError = ({ open, close, message }: DialogErrorProps) => {
  return (
    <Dialog aria-labelledby="alert-dialog-title" open={open} onClose={close}>
      <DialogTitle id="simple-dialog-title">{message}</DialogTitle>
    </Dialog>
  );
};

export default DialogError;
