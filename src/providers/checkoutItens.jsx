import React, { useState } from 'react'

export const CheckoutItensContext = React.createContext({})

export const CheckoutItensProvider = (props) => {
  const [itensChecked, setItensChecked] = useState([])

  return (
    <CheckoutItensContext.Provider value={{ itensChecked, setItensChecked }}>
      {props.children}
    </CheckoutItensContext.Provider>
  )
}

export const useCheckoutItens = () => React.useContext(CheckoutItensContext)
