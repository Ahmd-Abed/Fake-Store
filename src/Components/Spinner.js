import React, { Fragment } from 'react'
import spinner from '../assets/spinner.gif'

const Spinner = () => (
    <Fragment>
        <img src={spinner} className='mt-5' style={{width: '100px', margin: 'auto', display: 'block'}} alt="Loading..."></img>
    </Fragment>
)

export default Spinner