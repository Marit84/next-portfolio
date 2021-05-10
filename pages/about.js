
import Layout from '../components/Layout';
import fetch from "isomorphic-unfetch";
import Error from './_error'
import { Component } from "react";


export default class About extends Component {
  
   static async getInitialProps() {
       const res = await fetch('https://api.github.com/users/marit84');
       const statusCode = res.status > 200 ? res.status : false;
       const data = await res.json();
  
    return { user: data, statusCode };

    }

   /*  componentDidMount() {
        fetch('https://api.github.com/users/marit84')
        .then(res => res.json())
        .then(data => {
            this.setState({
                user: data
            });
        }) */
    
    render() {
        const { user, statusCode} = this.props;

        if (statusCode) {
            return <Error statusCode={statusCode}/>
        }

        return (
            <Layout title="About">
          
            <h3>{user.name}Marit Pedersen</h3>
            <p className="about-text">I'm a JavaScript Junior with a background from Graphic Design. I love to make things in general, and are now working on improving my JavaScript skills.</p>
            <img src="/static/javascript-logo.jpg" alt="JavaScript" height="200px"/>

            <style jsx>{`
.about-text {
  width: 30rem;
  text-align: center;
}
`}</style>
        </Layout>

        );

        }}
