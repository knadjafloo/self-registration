import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { FormControl, ControlLabel } from 'react-bootstrap';

export default class FormElement extends Component {

    render() {
        const {
            type,
            name,
            handleChange,
            label,
            error
        } = this.props;

        return(
            <div className="form-group">
                <ControlLabel htmlFor={name}>{label}</ControlLabel>
                
                <FormControl bsSize="sm" type={type} name={name} onChange={handleChange}/>
            </div>
        )
    }
}

FormElement.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func
};

FormElement.defaultProps = {
    type: 'text'
}