import React from 'react'
import Amount from './Amount'

const EuroConverter = ({amount}) => <div>Euro: {amount * 79.38}</div>
const DollarConverter = ({amount}) => <div>Dollar: {amount * 70.99}</div>

const CurrencyConverter = () => {
    return(
            <Amount currencyConverter={
                (amount) => (
                    <div>
                        <EuroConverter amount={amount}></EuroConverter>
                        <DollarConverter amount={amount}></DollarConverter> 
                   </div>
                )}></Amount>
    )
}

export default CurrencyConverter
