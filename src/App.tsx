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
        <Footer />
      </div>
    </Layout>
  );
}

function Footer() {
  return (
    <div className="text-center text-sm text-stone-400">
      <div>© 2022 Илья Судаков.</div>
      <div>Сделано с React, Redux/Redux-Toolkit, TypeScript, Tailwind.</div>
    </div>
  );
}
