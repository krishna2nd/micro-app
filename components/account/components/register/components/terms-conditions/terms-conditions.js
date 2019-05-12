import React, { Component } from 'react';

import { P } from 'src/components/shared/typography';
import Button from 'src/components/shared/button';
import commonStyles from 'src/components/shared/common.styles.css';
import styles from './terms-conditions.styles.css';

class TermsConditionsModal extends Component {
  componentWillMount() {
    const { onGetTermsConditionsDetails } = this.props;
    onGetTermsConditionsDetails();
  }

  render() {
    const { termsConditionsDetails, onHideModal } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.body}>
          <P dangerouslySetInnerHTML={{ __html: termsConditionsDetails }} />
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

export default TermsConditionsModal;
