import React, { Component } from 'react';

import { P } from 'src/components/shared/typography';
import Button from 'src/components/shared/button';
import commonStyles from 'src/components/shared/common.styles.css';
import styles from './privacy-policy.styles.css';

class PrivacyPolicyModal extends Component {
  componentWillMount() {
    const { onGetPrivacyPolicyDetails } = this.props;
    onGetPrivacyPolicyDetails();
  }
  render() {
    const { privacyPolicyDetails, onHideModal } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.body}>
          <P dangerouslySetInnerHTML={{ __html: privacyPolicyDetails }} />
        </div>
        <div className={commonStyles.twoColContainer}>
          <Button small secondary block onClick={onHideModal}>
            Aceptar
          </Button>
        </div>
      </div>
    );
  }
}

export default PrivacyPolicyModal;
