import React from 'react';
import SubmissionItem from './SubmissionItem';
import { Grid } from '@material-ui/core';

const SubmissionList = ({ submissions, onFavoriteClick, onDeleteClick }) => {
  return (
    <Grid container spacing={3}>
      {submissions.map(submission => (
        <Grid item xs={12} sm={6} md={4} key={submission.id}>
          <SubmissionItem
            submission={submission}
            onFavoriteClick={onFavoriteClick}
            onDeleteClick={onDeleteClick}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default SubmissionList;