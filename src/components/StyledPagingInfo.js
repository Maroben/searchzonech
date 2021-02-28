import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

export default function ({
    className,
    end,
    start,
    searchTerm,
    totalResults
}) {

    return (
        <>
            { searchTerm && (
                <Breadcrumbs aria-label="breadcrumb">
                    <Typography color="textPrimary">{"Results for " + searchTerm}</Typography>
                    <Typography color="textPrimary">{"Showing " + start + " - " + end + " out of " + totalResults}</Typography>
                </Breadcrumbs>
            )}
        </>
    );
}