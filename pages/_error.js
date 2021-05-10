import Layout from '../components/Layout';

export default ({ statusCode }) => (
    <Layout title="Error!">
        {statusCode ? `Could not load your user date: Status Code ${statusCode}` : `Could'nt get that page, sorry!`}
    </Layout>
);