import React from "react";
import PropTypes from "prop-types";
import { firebase } from "../firebase";

export const Checkbox = (props: { id: string; taskDesc: string }) => {
  const archiveTask = () => {
    firebase
      .firestore()
      .collection("tasks")
      .doc(props.id)
      .update({
        archived: true
      });
  };

  return (
    <div
      data-testid="checkbox-action"
      onClick={() => archiveTask()}
      onKeyDown={() => archiveTask()}
      aria-label={`Mark ${props.taskDesc} as done?`}
      role="button"
      tabIndex={0}
    >
      <span />
    </div>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  taskDesc: PropTypes.string.isRequired
};
