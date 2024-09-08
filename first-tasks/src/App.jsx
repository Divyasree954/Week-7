import React from 'react';


const User = ({ id, name }) => <div>User: {name}</div>;

t
const UserList = ({ users }) => (
  <div>
    {users.map(user => <User key={user.id} {...user} />)}
  </div>
);


const Article = ({ id, title, content }) => (
  <div>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);


const ArticleList = ({ articles }) => (
  <div>
    {articles.map(article => <Article key={article.id} {...article} />)}
  </div>
);

const Task = ({ id, description, completed }) => (
  <div>
    <p>{description} - {completed ? 'Completed' : 'Not Completed'}</p>
  </div>
);


const TaskList = ({ tasks }) => (
  <div>
    {tasks.map(task => <Task key={task.id} {...task} />)}
  </div>
);


const Message = ({ id, text }) => <div>Message: {text}</div>;


const MessageList = ({ messages }) => (
  <div>
    {messages.map(message => <Message key={message.id} {...message} />)}
  </div>
);


const Comment = ({ id, author, content }) => (
  <div>
    <h4>{author}</h4>
    <p>{content}</p>
  </div>
);

const CommentList = ({ comments }) => (
  <div>
    {comments.map(comment => <Comment key={comment.id} {...comment} />)}
  </div>
);

const Photo = ({ id, url, description }) => (
  <div>
    <img src={url} alt={description} />
    <p>{description}</p>
  </div>
);


const PhotoGallery = ({ photos }) => (
  <div>
    {photos.map(photo => <Photo key={photo.id} {...photo} />)}
  </div>
);


const Order = ({ id, productName, quantity }) => (
  <div>
    <p>Order: {productName} - Quantity: {quantity}</p>
  </div>
);


const OrderList = ({ orders }) => (
  <div>
    {orders.map(order => <Order key={order.id} {...order} />)}
  </div>
);


const Event = ({ id, name, date }) => (
  <div>
    <h3>{name}</h3>
    <p>Date: {date}</p>
  </div>
);


const EventList = ({ events }) => (
  <div>
    {events.map(event => <Event key={event.id} {...event} />)}
  </div>
);


const Song = ({ id, title, artist }) => (
  <div>
    <h4>{title} - {artist}</h4>
  </div>
);

const Playlist = ({ songs }) => (
  <div>
    {songs.map(song => <Song key={song.id} {...song} />)}
  </div>
);


const Notification = ({ id, message }) => <div>Notification: {message}</div>;


const NotificationList = ({ notifications }) => (
  <div>
    {notifications.map(notification => <Notification key={notification.id} {...notification} />)}
  </div>
);


const App = () => {
  const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
  const articles = [{ id: 1, title: 'React Basics', content: 'Learn React step by step.' }];
  const tasks = [{ id: 1, description: 'Complete project', completed: false }];
  const messages = [{ id: 1, text: 'Hello World!' }];
  const comments = [{ id: 1, author: 'John', content: 'Great article!' }];
  const photos = [{ id: 1, url: 'https://via.placeholder.com/150', description: 'Sample Photo' }];
  const orders = [{ id: 1, productName: 'Laptop', quantity: 2 }];
  const events = [{ id: 1, name: 'Conference', date: '2024-09-15' }];
  const songs = [{ id: 1, title: 'Song One', artist: 'Artist A' }];
  const notifications = [{ id: 1, message: 'You have a new message.' }];

  return (
    <div>
      <UserList users={users} />
      <ArticleList articles={articles} />
      <TaskList tasks={tasks} />
      <MessageList messages={messages} />
      <CommentList comments={comments} />
      <PhotoGallery photos={photos} />
      <OrderList orders={orders} />
      <EventList events={events} />
      <Playlist songs={songs} />
      <NotificationList notifications={notifications} />
    </div>
  );
};

export default App;
