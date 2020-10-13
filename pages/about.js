// static files like images arre in /public folder and accessed with simply "/file-name"
// a public/static folder is optional

import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'
import Error from './_error'
import { Component } from 'react'

export default class About extends Component {
  static async getInitialProps() {
    const res = await fetch('https://api.github.com/users/markkauffman22')
    const statusCode = res.status > 200 ? res.status : false
    const data = await res.json()

    return { user: data, statusCode }
  }

  render() {
    const { user, statusCode } = this.props // destructure props

    if (statusCode) {
      return <Error statusCode={statusCode} />
    }

    return (
      <Layout title="About">
        {JSON.stringify(this.props.user)}
        <p>Mark Kauffman</p>
        <img src={user.avatar_url} alt="Mark" height="140px" />
        <img src="/static/js-logo2.png" alt="Reed" height="80px" />
      </Layout>
    )
  }
}
