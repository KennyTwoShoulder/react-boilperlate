import { useSelector } from "react-redux";
import { formatDistanceToNow, parseISO } from "date-fns";

import MainPage from 'app/MainPage';
import { selectAllUsers } from 'features/users/usersSlice';
import { selectAllNotifications } from './notificationsSlice';

function NotificationsListPage() {
  const notifications = useSelector(selectAllNotifications);
  const users = useSelector(selectAllUsers);

  const renderedNotifications = notifications.map(notification => {
    const date = parseISO(notification.date);
    const timeAgo = formatDistanceToNow(date);
    const user = users.find(user => user.id === notification.user) || {
      name: 'Unknown User'
    };

    return (
      <div key={notification.id} className="notification">
        <div>
          <b>{user.name}</b> {notification.message}
        </div>
        <div title={notification.date}>
          <i>{timeAgo} ago</i>
        </div>
      </div>
    );
  });

  return (
    <MainPage id="notifications-list-page">
      <h2>Notifications</h2>
      {renderedNotifications}
    </MainPage>
  );
}

export default NotificationsListPage;