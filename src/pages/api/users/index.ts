/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next'

//Autenticação:
//JWT (STORAGE)
//Next Auth (redes sociais => api)
//Cognito, Auth0 (Serviço Externo)


export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    {id: 1, name: 'vitor1'},
    {id: 2, name: 'vitor2'},
    {id: 3, name: 'vitor3'}
  ]  

  return response.json(users);
}