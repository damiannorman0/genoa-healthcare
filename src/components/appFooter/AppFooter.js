import React from 'react';
import {footerContainer} from "components/appFooter/footer.module.css";

const AppFooter = (props) => {
	return (
		<footer className={footerContainer}>
			<div>privacy</div>
			<div>contact us</div>
		</footer>
	);
};

AppFooter.propTypes = {
};

AppFooter.defaultProps = {
};

export default (AppFooter);
