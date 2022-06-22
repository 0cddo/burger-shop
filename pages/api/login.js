import cookie from 'cookie';

const handler = async (req, res) => {
  // 쿠키 이용해서 로그인 이용하기
  if (req.method === 'POST') {
    const { username, password } = req.body;
    if (
      username === process.env.USERNAME &&
      password === process.env.PASSWORD
    ) {
      res.setHeader(
        'Set-Cookie',
        cookie.serialize('token', process.env.TOKEN, {
          maxAge: 60 * 60,
          sameSite: 'strict',
          path: '/',
        })
      );
      res.status(200).json('Successful');
    } else {
      res.status(400).json('Wrong Credentials');
    }
  }
};

export default handler;
