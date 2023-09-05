import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import React from 'react'
import { ComicDetails } from './pages/ComicDetails'
import { CheckoutItensProvider } from './providers/checkoutItens'
import { Checkout } from './pages/Checkout'

export function Router() {
  return (
    <CheckoutItensProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<ComicDetails />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </CheckoutItensProvider>
  )
}
