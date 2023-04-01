import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const SubmissionItem = ({ submission }) => {
  const { id, title, description, createdAt } = submission;

  return (
    <Card className="my-3">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Link to={`/submissions/${id}`}>
          <Button variant="primary">View Details</Button>
        </Link>
        <small className="text-muted">{createdAt}</small>
      </Card.Body>
    </Card>
  );
};

export default SubmissionItem;