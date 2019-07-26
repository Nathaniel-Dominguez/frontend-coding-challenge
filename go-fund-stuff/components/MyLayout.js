import Header from './Header';
import { Container } from 'reactstrap'

const layoutStyle = {
	margin: 20,
	padding: 20,
	border: '1px solid #DDD'
};

const Layout = props => (
	<div style={layoutStyle}>
		<Header>
			<title>Go-Fund-Stuff</title>
			<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			<link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'/>
		</Header>
		{props.children}
	</div>
);

export default Layout;