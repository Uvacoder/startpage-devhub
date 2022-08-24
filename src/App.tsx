import ToDoList from '@components/ToDoList';
import ArticlesList from '@components/Articles';

import Links from '@components/UserLinks';
import Layout from '@components/Layout/MainLayout';
import Header from '@components/Layout/Header';

export default function App() {
  return (
    <Layout className="pt-0">
      <Header />
      <div className="z-0 flex flex-col gap-4">
        <Links />
        <ToDoList />
        <ArticlesList />
      </div>
    </Layout>
  );
}
