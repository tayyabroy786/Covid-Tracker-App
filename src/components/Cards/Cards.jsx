import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';
import CardComponent from './Card/Card';
import CircularProgress from '@material-ui/core/CircularProgress';

import { GlobalContext } from '../../context/GlobalState';

import styles from './Cards.module.css';

const Cards = () => {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = useContext(GlobalContext);

    if (!confirmed) {
        return (
            <div className={styles.container}>
                <CircularProgress color="secondary" />
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <Grid container direction="row" justify="center" alignItems="center">
                <CardComponent
                    className={styles.recovered}
                    cardTitle="Recovered"
                    cardTitleColor={styles.recoveredColor}
                    value={recovered.value}
                    lastUpdate={lastUpdate}
                    cardSubtitle="Number of recoveries from COVID-19."
                    borderStyle={{ borderBottom: '2px solid rgba(0, 255, 0, 0.5)' }}
                />
                <CardComponent
                    className={styles.confirmed}
                    cardTitle="Infected"
                    cardTitleColor={styles.confirmedColor}
                    value={confirmed.value}
                    lastUpdate={lastUpdate}
                    cardSubtitle="Number of active cases from COVID-19."
                    borderStyle={{ borderBottom: '2px solid rgba(255, 145, 0, 0.5)' }}
                />
                <CardComponent
                    className={styles.deaths}
                    cardTitle="Deaths"
                    cardTitleColor={styles.deathsColor}
                    value={deaths.value}
                    lastUpdate={lastUpdate}
                    cardSubtitle="Number of deaths caused by COVID-19."
                    borderStyle={{ borderBottom: '2px solid rgba(255, 0, 0, 0.5)' }}
                />
            </Grid>
        </div>
    );
};

export default Cards;
