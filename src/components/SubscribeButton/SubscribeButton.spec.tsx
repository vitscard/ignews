import { render, screen, fireEvent } from '@testing-library/react'
import { signIn, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { SubscribeButton } from '.'


jest.mock('next-auth/client')
jest.mock('next/router')


describe('SubscribeButton Component', () => {
  const useSessionMocked = jest.mocked(useSession);
  useSessionMocked.mockReturnValueOnce([null, false])
  it('renders correctly', () => {
    render(
      <SubscribeButton />
    )  
    expect(screen.getByText('Subscribe now')).toBeInTheDocument()
  })  

  it('redirects user to sign in when not authenticated ', () => {
    const signInMocked = jest.mocked(signIn)
    const useSessionMocked = jest.mocked(useSession);
    useSessionMocked.mockReturnValueOnce([null, false])

    render(
      <SubscribeButton />
    )  

    const subscribeButton = screen.getByText('Subscribe now')
    fireEvent.click(subscribeButton)

    expect(signInMocked).toHaveBeenCalled()
  })  

  it('redirects to posts when user already has subscription', () => {
    const useRouterMocked = jest.mocked(useRouter)
    const useSessionMocked = jest.mocked(useSession)
    const pushMock = jest.fn();

    useSessionMocked.mockReturnValueOnce([
      { 
        user: { name:'John Doe', email: 'johndoe@example.com'}, 
        activeSubscription: 'fake-active-subscription',
        expires: 'fake-expires' 
      }, 
      false
    ])
    useRouterMocked.mockReturnValueOnce({ push: pushMock } as any)
    render(
      <SubscribeButton />
    )  
    const subscribeButton = screen.getByText('Subscribe now')
    fireEvent.click(subscribeButton)

    expect(pushMock).toHaveBeenCalled()
  })  

})
