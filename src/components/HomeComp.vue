<template>
    <!-- Add this line in the head section of your HTML file -->
    <div id="page">
		<div id="header">
			<div>
				<a href="index.html" class="logo"><img :src="getImagePath('logo.png')" alt="logo"></a>
				<ul id="navigation">
					<li class="selected">
						<router-link to="/" class="pr-6 pl-2">Home</router-link>
						
					</li>
					<li>
                        <router-link to="/about" class="pr-6 pl-2">About</router-link>
					</li>
					<li class="menu">
						<router-link to="/blog" class="pr-6 pl-2">Blog</router-link>
					</li>
					<li>
						<router-link to="/contact" class="pr-6 pl-2">Contact</router-link>
					</li>
				</ul>
			</div>
		</div>
		<div id="body" class="home">
			<div class="header">
				<div>
					<img :src="getImagePath('satellite.png')" alt="satellite" class="satellite">
					<h1>SOYUZ TMA-M</h1>
					<h2>SPACECRAFT</h2>
					<a href="blog.html" class="more">Read More</a>
					<h3>FEATURED PROJECTS</h3>
					<ul>
						<li>
							<a href="projects.html"><img :src="getImagePath('project-image1.jpg')" alt="project image1"></a>
						</li>
						<li>
							<a href="projects.html"><img :src="getImagePath('project-image2.jpg')" alt="project image2"></a>
						</li>
						<li>
							<a href="projects.html"><img :src="getImagePath('project-image3.jpg')" alt="project image3"></a>
						</li>
						<li>
							<a href="projects.html"><img :src="getImagePath('project-image4.jpg')" alt="project image4"></a>
						</li>
					</ul>
				</div>
			</div>
			<div class="body">
				<div>
					<h1>OUR MISSION</h1>
					<p>This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text.</p>
				</div>
			</div>
			<div class="footer">
				<div>
					<ul>
						<li>
							<h1>FEATURED VIDEO</h1>
							<a href="blog.html"><img :src="getImagePath('mars-rover.jpg')" alt="mars rover"><span></span></a>
						</li>
						<li>
							<h1>LATEST BLOG</h1>
							<ul>
								<li>
									<a href="blog.html"><img :src="getImagePath('finding-planet.jpg')" alt="finding planet"></a>
									<h1>FINDING PLANET X-123</h1>
									<span>FEBRUARY 6, 2023</span>
									<a href="blog.html" class="more">Read More</a>
								</li>
								<li>
									<a href="blog.html"><img :src="getImagePath('new-satellitedish.jpg')" alt="new satellitedish"></a>
									<h1>NEW SATELLITE DISH</h1>
									<span>FEBRUARY 3, 2023</span>
									<a href="blog.html" class="more">Read More</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div id="footer">
			<div class="connect">
				<div>
					<h1>FOLLOW OUR  MISSIONS ON</h1>
					<div>
						<a href="http://freewebsitetemplates.com/go/facebook/" class="facebook">facebook</a>
						<a href="http://freewebsitetemplates.com/go/twitter/" class="twitter">twitter</a>
						<a href="http://freewebsitetemplates.com/go/googleplus/" class="googleplus">googleplus</a>
						<a href="http://pinterest.com/fwtemplates/" class="pinterest">pinterest</a>
					</div>
				</div>
			</div>
			<div class="footnote">
				<div>
					<p>&copy; 2023 BY SPACE PROSPECTION | ALL RIGHTS RESERVED</p>
				</div>
			</div>
		</div>
	</div>
    </template>
  <script>
  
  export default {  
    name: 'homecompA',
	methods: {
    getImagePath(imageName) {
      // Assuming your assets are in the 'src/assets/images/' directory
      return require(`@/assets/images/${imageName}`);
    },
  },
};
  </script>
  <style src="@/assets/css/style.css">
      </style>
   <style src="@/assets/css/mobile.css">
  </style>
  
  