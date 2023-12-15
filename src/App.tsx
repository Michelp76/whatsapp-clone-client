import React from 'react';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
  RouteComponentProps,
} from 'react-router-dom';
import ChatRoomScreen from './components/ChatRoomScreen';
import ChatsListScreen from './components/ChatsListScreen';

const App: React.FC = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/chats" component={ChatsListScreen} />
        <Route
          exact
          path="/chats/:chatId"
          component={({ match }: RouteComponentProps<{ chatId: string }>) => (
            <ChatRoomScreen chatId={match.params.chatId} />
          )}
        />
      </Switch>
      <Route exact path="/" render={redirectToChats} />
    </div>
  </BrowserRouter>
);

const redirectToChats = () => <Redirect to="/chats" />;
export default App;
