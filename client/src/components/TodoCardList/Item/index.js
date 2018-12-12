import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardBody, Input } from 'mdbreact'

const Item = props => (
  <div className="pt-1">
    <Card>
      <CardBody className="text-left">
        <Input
          checked={props.completedAt}
          onClick={props.onChange}
          type="checkbox"
          label={props.description}
        />
      </CardBody>
    </Card>
  </div>
)

Item.propTypes = {
  description: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Item
