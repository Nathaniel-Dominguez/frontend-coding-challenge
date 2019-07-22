import Layout from '../components/MyLayout.js';
import Link from 'next/link';

const PostLink = props => (
	<li>
		<Link href='/p/[id]' as={`/p/${props.id}`}>
			<a>{props.id}</a>
		</Link>
	</li>
);

export default function Cards() {
	return (
		<Layout>
			<h1>Campaigns</h1>
			<ul>
				<PostLink id='hello-nextjs' />
				<PostLink id='learn-nextjs' />
				<PostLink id='deploy-nextjs' />
			</ul>
		</Layout>
	);
}