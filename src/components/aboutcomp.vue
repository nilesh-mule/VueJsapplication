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
		<div id="body" class="about">
			<div class="header">
				<div>
					<h1>About</h1>
					<h2>We Have Free Templates for Everyone</h2>
					<p>Our website templates are created with inspiration, checked for quality and originality and meticulously sliced and coded. What’s more, they’re absolutely free! You can do a lot with them. You can modify them. You can use them to design websites for clients, so long as you agree with the <a href="https://freewebsitetemplates.com/about/terms/">Terms of Use</a>. You can even remove all our links if you want to.</p>
				</div>
			</div>
			<div class="body">
				<div>
					<img :src="getImagePath('earth-satellite.jpg')" alt="earth satellite">
					<h2>We Have More Templates for You</h2>
					<p>Looking for more templates? Just browse through all our <a href="https://freewebsitetemplates.com/">Free Website Templates</a> and find what you’re looking for. But if you don’t find any website template you can use, you can try our <a href="https://freewebsitetemplates.com/freewebdesign/">Free Web Design</a> service and tell us all about it. Maybe you’re looking for something different, something special. And we love the challenge of doing something different and something special.</p>
				</div>
			</div>
			<div class="footer">
				<div>
					<img :src="getImagePath('space-shuttle.png')" alt="Space Shuttle">
					<h2>Be Part of Our Community</h2>
					<p>If you’re experiencing issues and concerns about this website template, join the discussion <a href="https://freewebsitetemplates.com/forums/">on our forum</a> and meet other people in the community who share the same interests with you.</p>
				</div>
			</div>
			<div class="section">
				<div>
					<h2>Template Details</h2>
					<p>Design Version 1. Code version 3. Website Template details, discussion and updates for this <a href="https://freewebsitetemplates.com/discuss/spacescience/"> Space Science Website Template</a>. Website Template design by <a href="https://freewebsitetemplates.com/">Free Website Templates</a>. Please feel free to remove some or all the text and links of this page and replace it with your own About content.</p>
				</div>
			</div>
		</div>
		<div id="footer">
			<div class="connect">
				<div class="text-xs">
					<h1>FOLLOW OUR  MISSIONS ON</h1>
					<div>
						<a href="#" class="facebook">facebook</a>
						<a href="#" class="twitter">twitter</a>
						<a href="#" class="googleplus">googleplus</a>
						<a href="#" class="pinterest">pinterest</a>
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
    name:'aboutComp',
    methods: {
    getImagePath(imageName) {
      // Assuming your assets are in the 'src/assets/images/' directory
      return require(`@/assets/images/${imageName}`);
    },
  },
};
 
</script>