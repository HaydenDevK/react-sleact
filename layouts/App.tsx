import React, { FC } from 'react';

import { Switch, Route, Redirect } from 'react-router';

import loadable from '@loadable/component'; // @types/loadable__component 
const SignIn = loadable(() => import('@pages/SignIn'));
const SignUp = loadable(() => import('@pages/SignUp'));
/*
  loadable :
  코드 스플리팅
  import SignIn from '@pages/SignIn';
  import SignUp from '@pages/SignUp';
*/

const App: FC = () => {
  {/* FC : 함수형 컴포넌트 */}
  return (
    <Switch> 
    {/* Switch: tab처럼 여러 개 중 한 개만 화면에 표시해주는 라우터 */}
      <Redirect exact path='/' to='/signin' /> 
      {/* 
        Redirect :
        path로 접속 시 to(다른 페이지)로 보내줌
        ('/' 경로 접속 시 '/signin' 으로)
        exact 빼먹으면 안됨
      */}
      <Route path='/signin' component={SignIn} />
      <Route path='/signup' component={SignUp} />
    </Switch>
  )
};

export default App;