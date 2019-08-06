import React from 'react'
import AmountHocComponent from './AmountHocComponent'

const EuroConverter = ({amount}) => <div>Euro: {amount * 79.38}</div>
const DollarConverter = ({amount}) => <div>Dollar: {amount * 70.99}</div>

const AmountHocWrapper = AmountHocComponent([EuroConverter, DollarConverter])

const AmountHocTest = () => <AmountHocWrapper></AmountHocWrapper>


export default AmountHocTest
