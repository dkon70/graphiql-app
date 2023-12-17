import Layout from './layout';
import Editor from '@/components/Editor/Editor';

const Graphiql = () => {
  return (
    <Layout>
      <div className="w-[100%] h-[500px]">
        <Editor />
      </div>
    </Layout>
  );
};

export default Graphiql;
