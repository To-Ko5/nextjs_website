import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from '../pages/index'

it('Should render hello text', () => {
  render(<Home />)
  // screen.debug() レンダリングされたものをdebugできる
  expect(screen.getByText('Hello Next.js')).toBeInTheDocument()
})
