import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { Router } from './Router.jsx'
import { Route } from './Route.jsx'
import { Link } from './Link.jsx'
import { getCurrentPath } from './utils.js'

vi.mock('./utils.js', () => ({
    getCurrentPath: vi.fn()
}))

describe('Router', () => {
    beforeEach(() => {
        cleanup()
        vi.clearAllMocks()
    })

    it('should render without problems', () => {
        render(<Router routes={[]} />)
        expect(true).toBeTruthy()
    })

    it('should render 404 if no routes match', () => {
        render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />)
        expect(screen.getByText('404')).toBeTruthy()
    })

    it('should render the component of the first route that matches', () => {
        getCurrentPath.mockReturnValueOnce('/about')

        const routes = [
            {
                path: '/',
                Component: () => <h1>Home</h1>
            },
            {
                path: '/about',
                Component: () => <h1>About</h1>
            }
        ]

        render(<Router routes={routes} />)
        expect(screen.getByText('About')).toBeTruthy()
    })

    it('should navigate using Links', async () => {
        // Initial path
        getCurrentPath.mockReturnValueOnce('/')

        render(
            <Router>
                <Route
                    path='/' Component={() => {
                        return (
                            <>
                                <h1>Home</h1>
                                <Link to='/about'>Go to About</Link>
                            </>
                        )
                    }}
                />
                <Route path='/about' Component={() => <h1>About</h1>} />
            </Router>
        )

        expect(screen.getByText('Home')).toBeTruthy();

        // Mock the path *after* the click
        getCurrentPath.mockReturnValueOnce('/about');

        // Click en el enlace
        const linkElement = screen.getByText(/Go to About/i);
        fireEvent.click(linkElement);

        // Wait for the new route to be rendered
        const aboutTitle = await screen.findByText('About');

        // Verify that the new route is rendered
        expect(aboutTitle).toBeTruthy();
    })
})