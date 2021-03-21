import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { getPage } from 'next-page-tester'
import { initTestHelpers } from 'next-page-tester'

initTestHelpers()

describe('Navigation by Link', () => {
  it('Should route to selected page in navbar', async () => {
    const { page } = await getPage({
      route: '/index'
    })
    render(page)

    userEvent.click(screen.getByTestId('blog-nav'))
    expect(
      await screen.findByText(
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
      )
    ).toBeInTheDocument()

    userEvent.click(screen.getByTestId('contact-nav'))
    expect(await screen.findByText('Contact')).toBeInTheDocument()

    userEvent.click(screen.getByTestId('home-nav'))
    expect(await screen.findByText('Hello Next.js')).toBeInTheDocument()
  })
})
