<template>
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
		<div id="body">
			<div class="header">
				<div>
					<h1>Blog</h1>
					<div class="article">
						<ul>
							<li>
								<a href="#"><img :src="getImagePath('astronaut.jpg')" alt="astronaut"></a>
								<h1>SUCCESFUL REPAIR OF THE MX-1 SAT</h1>
								<span>FEBRUARY 6, 2023</span>
								<p>This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text.</p>
								<a href="#" class="more">Read More</a>
							</li>
							<li>
								<a href="#"><img :src="getImagePath('satellite-dish.jpg')" alt="satellite dish"></a>
								<h1>ALIEN SIGNAL DISCOVERY</h1>
								<span>FEBRUARY 3, 2023</span>
								<p>You can remove any link to our website from this website template, you're free to use this website template without linking back to us.</p>
								<a href="#" class="more">Read More</a>
							</li>
						</ul>
					</div>
					<div class="sidebar">
						<ul>
							<li>
								<h1>FEATURED POSTS</h1>
								<a href="#"><img :src="getImagePath('moon-satellite.jpg')" alt="moon satellite"></a>
								<h2>SOYUZ TMA-M</h2>
								<span>FEBRUARY 6, 2023</span>
							</li>
							<li>
								<h1>RECENT POSTS</h1>
								<ul>
									<li>
										<a href="#"><img :src="getImagePath('alien-life.jpg')" alt="alien life"></a>
										<h2>ALIEN LIFE</h2>
										<span>FEBRUARY 3, 2023</span>
									</li>
									<li>
										<a href="#"><img :src="getImagePath('galaxy.jpg')" alt="galaxy"></a>
										<h2>THE GALAXY</h2>
										<span>FEBRUARY 1, 2023</span>
									</li>
								</ul>
							</li>
						</ul>
					</div>
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
 export default{
    name: 'blogComp',
	methods: {
    getImagePath(imageName) {
      // Assuming your assets are in the 'src/assets/images/' directory
      return require(`@/assets/images/${imageName}`);
    },
  },
};
</script>