import { useRouter } from 'next/router';
import Markdown from 'react-markdown';
import Layout from '../../components/MyLayout.js';

export default () => {
	const router = useRouter();
	return (
		<Layout>
			<h1>{router.query.id}</h1>
			<div className='markdown'>
				<Markdown source={`
					This is our campaign post.
					Yes. We can have a [link](/link).
					And we can have a title as well.

					### This is a title

					And here's the content.
					`}
				/>
			</div>
			<style jsx global>{`
				.markdown {
					font-family: 'Arial';
				}

				.markdown a {
					text-decoration: none;
					color: blue;
				}

				.markdown a:hover {
					opacity: 0.6;
				}

				.markdown h3 {
					margin: 0;
					padding: 0;
					text-transform: uppercase;
				}
			`}</style>
		</Layout>
	);
};

/*
how to load data from an api for dynamic pages of info 
import Layout from '../../components/MyLayout.js';
import fetch from 'isomorphic-unfetch';

const Post = props => (
	<Layout>
		<h1>{props.show.name}</h1>
		<p>{props.show.summary.replace(/<[/]?p/g, '')}</p>
		<img src={props.show.image.medium} />
	</Layout>	
);

Post.getInitialProps = async function(context) {
	const { id } = context.query;
	const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
	const show = await res.json();

	console.log(`Fetched show: ${show.name}`);

	return { show };
};

export default Post;
*/