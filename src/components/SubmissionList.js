import React from 'react';
import SubmissionItem from './SubmissionItem';
import { Grid } from '@material-ui/core';

const SubmissionList = ({ submissions  }) => {
  return (
    <div className = "item">
    <Grid container spacing={3}>
      {submissions.map(submission => (
        <Grid item xs={12} sm={6} md={4} key={submission.id}>
          <SubmissionItem
            submission={submission}
          />
        </Grid>
      ))}
    </Grid>
    </div>
  );
};

export default SubmissionList;