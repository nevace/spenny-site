exports.createPages = ({ actions }) => {
	const { createRedirect } = actions;

	createRedirect({
		fromPath: 'http://modest-hopper-bf748b.netlify.com/*',
		toPath: 'http://www.spenny.io/:splat',
		isPermanent: true,
		force: true
	});
};
