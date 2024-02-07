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
				<div class="contact">
					<h1>Contact</h1>
					<h2>DO NOT HESITATE TO CONTACT US</h2>
					
					<form @submit.prevent="submitForm">
						<input type="text" v-model="name" name="Name" placeholder="Name" required  />
						<input type="text" v-model="email" name="Email Address" placeholder="Email Address" required />
						<input type="text" v-model="subject" name="Subject" placeholder="Subject" required />
						<textarea v-model="messageBody" cols="50" rows="7" placeholder="Message" required></textarea>
						<input type="submit" value="Send" id="submit" />
					</form>
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
  name: 'contactComp',
  methods: {
    getImagePath(imageName) {
      // Assuming your assets are in the 'src/assets/images/' directory
      return require(`@/assets/images/${imageName}`);
    },
    submitForm() {
      // You can handle the form submission logic here
      console.log('Form submitted with data:', {
        message: this.message,
        name: this.name,
        email: this.email,
        subject: this.subject,
        messageBody: this.messageBody,
      });
    },
  },
  data() {
    return {
      message: '',
      name: '',
      email: '',
      subject: '',
      messageBody: '',
    };
  },
};
</script>
