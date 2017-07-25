import React from 'react';
import styles from './folderTreeCSS.css'

const FileComponent = ({ level, selectMe, selected }) => (
  <div className={styles.file} style={{marginLeft: getInden(level)}}>
    <span className={selected ? [styles.fileText, styles.selected].join(' ') : styles.fileText} onClick={selectMe}>
      <i className={styles.fileIcon} style={{marginLeft: '10px'}} />
    </span>

  </div>
);

FileComponent.propTypes = {
  path: React.PropTypes.array.isRequired,
  level: React.PropTypes.number.isRequired,
  checked: React.PropTypes.number.isRequired,
  filename: React.PropTypes.string.isRequired,
  selected: React.PropTypes.number.isRequired,

  selectMe: React.PropTypes.func.isRequired,
  setMyName: React.PropTypes.func.isRequired,
  handleCheck: React.PropTypes.func.isRequired,
};

function getInden(level) {
  return `${5 * level}px`;
}

export default FileComponent;
