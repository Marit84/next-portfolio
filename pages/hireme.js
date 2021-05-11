import Layout from '../components/Layout';

const HireMe = () => (
    <Layout title="Hire Me">
        
        <p>You can hire me at{" "}
        <a href="mailto:marit_jp@hotmail.com">marit_jp@hotmail.com</a></p>
        <style jsx>{`
a {
  color: darkslategrey;
}
a:hover {
    color: darkgrey;
}
`}</style>
    </Layout>
)

export default HireMe;

