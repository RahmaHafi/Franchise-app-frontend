
import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function FranchiseCard({franchise}) {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{franchise.basicFranchiseInfo.franchiseName}</Card.Title>
                <Card.Text>
                    {franchise.basicFranchiseInfo.Sector}
                </Card.Text>
                <Button variant="primary">See more details </Button>
            </Card.Body>
        </Card>
    )
}

export default FranchiseCard
