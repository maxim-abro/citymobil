import React from 'react'
import './CheckedCar.css'


class CheckedCar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className='checked-car'>
            {this.props.checkedCar}
        </div>
        )
    }

}

export default CheckedCar;