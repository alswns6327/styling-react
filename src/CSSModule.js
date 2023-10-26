import React from 'react';
import classNames from 'classnames/bind';
import styles from './CSSModule.module.scss';

const cx = classNames.bind(styles);

const CSSModule = () => {
    console.log(cx('wrapper', {a :false}, 'inverted'));
    console.log(classNames('wrapper', 'inverted'));
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
            <div className={cx('wrapper', 'inverted')}>
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