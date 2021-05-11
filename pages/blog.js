import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = ({ slug, title }) => (
    <li>
    <Link as={`/${slug}`} href={`/post?title=${title}`}>
    <a>{title}</a>
    </Link>
    <style jsx>{`
a {
  text-decoration: none;
  color: darkslategrey;
}
a:hover {
    color: darkgrey;
}
`}</style>
</li>
);

export default () => (
    <Layout title= "My blog">
        <ul>
         <PostLink slug="react-post" title="React" />
         <PostLink slug="angular-post" title="Angular" />
         <PostLink slug="vue-post" title="Vue" />
        </ul>
    </Layout>
)