/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
  // console.log(request.query)

  // const user = request.query.id;
  // console.log(user);

  const users = [
    {id: 1, name: 'vitor1'},
    {id: 2, name: 'vitor2'},
    {id: 3, name: 'vitor3'}
  ]  

  return response.json(users);
}