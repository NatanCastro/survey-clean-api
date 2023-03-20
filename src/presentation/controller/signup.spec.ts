import { SignUpController } from './signup'

const sut = new SignUpController()

describe('SignUp Controller', () => {
  it('Should return 400 if no name is provided', () => {
    const httpRequest = {
      body: {
        email: 'any_email@email.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
  it('Should return 400 if no email is provided', () => {
    const httpRequest = {
      body: {
        name: 'any_name',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
  it.todo('Should return 400 if no password is provded')
  it.todo('Should return 400 if no password confirmation is provided')
})
