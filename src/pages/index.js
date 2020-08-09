import React from "react"
import { Link } from "gatsby"

const IndexPage = () => (
	<div className="hero">
		<div className="bloomberg">
			<a className="bloomberg-title" href="/">Diego Segura</a>
		</div>
		<div className="topbar">
			<a href="/">
				<img class="profile-picture" src="https://blot.im/cdn/blog_51c1129e9c0c4c98abcbba21b06dbd10/_avatars/5335a610-fd14-4aa6-90d9-fc2baa1c709f.jpg"></img>
			</a>
			<div className="segura-nav">
			<a href="/" class="logo">Diego Segura</a>
				<a href="/" class="nav">AAA</a>
				<a href="/" class="nav">AAA</a>
				<a href="/" class="nav">AAA</a>
			</div>
		</div>
		<div className="hero-group">
			<h1>Hi Ryan</h1>
			<p>It's working, sort of.</p>
			<p>This is fun</p>
			<Link to="/page-2/">Go fuck yaself</Link> <br />
		</div>
	</div>
)

export default IndexPage
