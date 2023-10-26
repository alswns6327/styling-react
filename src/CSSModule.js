import React from 'react';
import styles from './CSSModule.module.css';

const CSSModule = () => {
    console.log([styles.inverted, styles.wrapper].join(' '));
    return (
        <>
            <div className={`${styles.inverted} ${styles.wrapper}`}>
                hi i'm <span className='something'>CSS Module</span>
            </div>
            <div className={[styles.inverted, styles.wrapper].join(' ')}>
                hi i'm <span className='something'>CSS Module</span>
            </div>
            <div className={styles.wrapper}>
                hi i'm <span className='something'>CSS Module</span>
            </div>
        </>
    );
};

export default CSSModule;