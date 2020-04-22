import React from 'react';
import styles from './StartContest.module.sass';

const StartContest = () => {
    return(

        <div className={styles.cardContainer}>
            <span className={styles.content}>
                <span className={styles.text}>Ready to get started? Launch a contest and start receiving submissions instantly.</span>
                <span className={styles.button}>
                    <a className={styles.btn} href={'/StartContestPage'}>
                        <i className={"far fa-lightbulb mr-1"}>
                        </i>
                        Start A Contest
                    </a>
                </span>
            </span>
        </div>

    );
};


export default StartContest;