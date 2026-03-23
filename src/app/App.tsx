import { RouterProvider } from 'react-router';
import { router } from './routes';

if (router && !router.basename) {
  router.basename = "/Conner";
}

export default function App() {
  return <RouterProvider router={router} />;
}
