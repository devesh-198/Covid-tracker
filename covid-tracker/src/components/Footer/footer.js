import React from 'react';

import classes from './footer.module.css';

const Footer = () => {
	return (
		<div className={classes.footer}>
			<div>
				<h2>This website is a part of Devesh Gupta's portfolio, not meant for commercial use</h2>
			</div>
			<div className={classes.lowerFooter}>
				<div className={classes.projectTeam}>
					<h3>Developed by:</h3>
					<p>Devesh Gupta</p>
				</div>
				<div className={classes.about}>
					<h3>About</h3>
					<p>Language: Javascript</p>
					<p>Framework: React(Create react app)</p>
					<p>Other npm Libraries:</p>
					<ul>
						<li>Redux</li>
						<li>Redux saga</li>
						<li>Axios</li>
						<li>React-redux</li>
					</ul>
					<p>API:
						<a href="https://rapidapi.com/Gramzivi/api/covid-19-data/" target="_blank" rel="noreferrer">
							Covid-19-data
						</a>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Footer;