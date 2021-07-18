<template>
	<div id="questionaire">

		<transition name="slide-fade">
			<div v-if="page == 1" class="page-content">
				<div class="left">
					<div class="heading-container">
						<h1 class="title">What's your project?</h1>
						<p class="description">What type of project are you looking to do?</p>
					</div>

					<page-nav :page="page" :pages="pages" @next="goto(page+1, project_index !== null)"></page-nav>
				</div>
				<div class="right">
					<div class="image-grid">
						<div v-for="(project, index) in projects" :key="project.title" class="item" :class="{ selected: index === project_index }">
							<input type="radio" name="project" :id="`project-${project.title}`" v-model="project_index" :value="index" />
							<label :for="`project-${project.title}`">
								<img :src="project.image.sizes.medium" />
								<p class="title">{{ project.title }}</p>

								<span class="icon-check">
									<svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
									</svg>
								</span>
							</label>
						</div>
					</div>
				</div>
			</div>
		</transition>

		<transition name="slide-fade">
			<div v-if="page == 2" class="page-content">
				<div class="left">
					<div class="heading-container">
						<h1 class="title">Select the looks you love</h1>
						<p class="description">Pack as many as you like</p>
					</div>
					<page-nav :page="page" :pages="pages" @send="sendForm" @next="goto(page+1, form.looks)" @back="goto(page-1, form.looks)"></page-nav>
				</div>
				<div class="right">
					<div class="image-grid">
						<div v-for="look in looks" :key="look.title" class="item" :class="{ selected: isSelected(look.title, form.looks) }">
							<input type="checkbox" name="looks" :id="`look-${look.title}`" v-model="form.looks" :value="look.title" />
							<label :for="`look-${look.title}`">
								<img :src="look.image.sizes.medium" />
								<span class="icon-check">
									<svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
									</svg>
								</span>
							</label>
						</div>
					</div>
				</div>
			</div>
		</transition>

		<transition name="slide-fade">
			<div v-if="page == 3" class="page-content">
				<div class="left">
					<div class="heading-container">
						<h1 class="title">What does your space need?</h1>
						<p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>

					<page-nav :page="page" :pages="pages" @send="sendForm" @next="goto(page+1)" @back="goto(page-1)"></page-nav>
				</div>
				<div class="right">
					<div class="box-list">
						<div v-for="need in needs" :key="need.title" class="item" :class="{ selected: need.title === form.need }">
							<input type="radio" name="need" :id="`need-${need.id}`" v-model="form.need" :value="need.title" />
							<label :for="`need-${need.id}`">
								<!-- <img :src="project.image.sizes.medium" /> -->
								<h3 class="title">{{ need.title }}</h3>
								<p class="description">{{ need.description }}</p>

								<span class="icon-check">
									<svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
									</svg>
								</span>
							</label>
						</div>
					</div>
				</div>
			</div>
		</transition>

		<transition name="slide-fade">
			<div v-if="page == 4" class="page-content">
				<div class="left">
					<div class="heading-container">
						<h1 class="title">Tell us your budget and finish level</h1>
						<p class="description">This will give us a better understanding of your project</p>
					</div>

					<page-nav :page="page" :pages="pages" @send="sendForm" @next="goto(page+1)" @back="goto(page-1)"></page-nav>
				</div>
				<div class="right">

					<div class="form-group text_input label-shift">
						<input class="text_input_field" v-model="form.space" required placeholder="How big is your space?" />
						<label class="input_text_label">How big is your space (sq. ft.)</label>
					</div>

					<div class="form-group text_input label-shift">
						<input class="text_input_field" v-model="form.budget" placeholder="" />
						<label class="input_text_label">Do you have a budget for furnishings?</label>
					</div>

					<label>What level of finish are you looking or?</label>
					<div class="box-list">
						<div v-for="finish in finishes" :key="finish.title" class="item" :class="{ selected: finish.title === form.finish }">
							<input type="radio" name="finish" :id="`finish-${finish.id}`" v-model="form.finish" :value="finish.title" />
							<label :for="`finish-${finish.id}`">
								<!-- <img :src="project.image.sizes.medium" /> -->
								<h3 class="title">{{ finish.title }}</h3>
								<p class="description">{{ finish.description }}</p>

								<span class="icon-check">
									<svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
									</svg>
								</span>
							</label>
						</div>
					</div>
				</div>
			</div>
		</transition>

		<transition name="slide-fade">
			<div v-if="page == 5" class="page-content">
				<div class="left">
					<div class="heading-container">
						<h1 class="title">Almost done</h1>
						<p class="description">Just a few more details</p>
					</div>

					<page-nav :page="page" :pages="pages" @send="sendForm" @next="goto(page+1)" @back="goto(page-1)"></page-nav>
				</div>
				<div class="right">

					<div class="form-group text_input label-shift">
						<input class="text_input_field" v-model="form.name" placeholder="" />
						<label class="input_text_label">Name</label>
					</div>

					<div class="form-group text_input label-shift">
						<input type="email" class="text_input_field" v-model="form.email" placeholder="" />
						<label class="input_text_label">Email</label>
					</div>

					<div class="form-group text_input label-shift">
						<input type="text" class="text_input_field" v-model="form.phone" v-mask="'###-###-####'" placeholder="" />
						<label class="input_text_label">Phone</label>
					</div>

					<div class="form-group text_input label-shift">
						<input class="text_input_field" v-model="form.company" placeholder="" />
						<label class="input_text_label">Company</label>
					</div>

					<div class="form-group text_input">
						<label class="input_text_label">When do you need the project completed by?</label>
						<input class="text_input_field" type="date" v-model="form.date" />
					</div>

					<div class="form-group">
						<label>
							<input type="checkbox" v-model="form.notimeline" value=1 />
							We're not in a rush, no timeline yet
						</label>
					</div>

				</div>
			</div>
		</transition>

		<transition name="slide-fade">
			<div v-if="page == 6" class="page-content">
				<div class="left">
					<div class="heading-container">
						<h1 class="title">What else would you like us to know?</h1>
						<p class="description">Tell us about your company, your location, your brand, your ideas for the space, what you want the end product to be like, and whatever else you'd like us to know</p>
					</div>

					<page-nav :page="page" :pages="pages" @send="sendForm()" @next="goto(page+1)" @back="goto(page-1)"></page-nav>
				</div>

				<div class="right">
					<div class="form-group" style="width: 400px;">
						<label>Tell Us</label>
						<textarea v-model="form.message" rows="20" />
					</div>

					<div class="form-group" style="text-align: left;">
						<p><a v-if="!form.file" href="#" @click.prevent="uploadFile" style="color: black; text-decoration: underline; margin-top: 10px">upload a file</a></p>
						<input ref="fileUpload" type="file" @change="onFileChange" style="display: none;">
						<p v-if="form.file && form.file.name">{{ form.file.name }} <span @click="form.file = null" style="cursor: pointer;">&times;</span></p>
						<p class="description">valid file formats: png, jpg, pdf</p>
					</div>
				</div>
			</div>
		</transition>

		<transition name="slide-fade">
			<div v-if="page == 7" class="page-content" style="justify-content: center;">

				<div class="thanks" style="text-align: center;">

					<span class="icon-check" style="background: #e9edf1; border-radius: 50%; height: 48px; width: 48px; display: grid; place-items: center; margin: 0 auto 30px;">
						<svg height="36" width="36" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
						</svg>
					</span>

					<h1>We'll be in touch</h1>
					<p style="max-width: 400px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>

			</div>
		</transition>

	</div>

</template>

<script>
import axios from 'axios';
import PageNav from './components/PageNav.vue';

export default {
	name: "App",
	components: {
		PageNav,
	},
	data() {
		return {
			loading: false,
			page: 1,
			pages: 7,
			projects: [],
			looks: [],
			needs: [
				{
					id: 1,
					title: "A little pick me up",
					description: "Need to spruce up the place",
					icon: null,
				},
				{
					id: 2,
					title: "A whole new look",
					description: "It's ancient",
					icon: null,
				},
				{
					id: 3,
					title: "Custom",
					description: "It's not what it used to be",
					icon: null,
				},
			],
			finishes: [
				{
					id: 'Economical',
					title: 'We need to go super economical',
					description: '$19-24/SF',
				},
				{
					id: 'Average',
					title: 'Average is fine by us',
					description: '$25-32/SF',
				},
				{
					id: 'Quality',
					title: "Quality stuff that won't break the bank",
					description: '$32-44/SF',
				},
				{
					id: 'Upscale',
					title: 'Upscale all the way!',
					description: '$45+/SF',
				},
			],
			project_index: null,
			form: {
				project: null,
				looks: [],
				need: null,
				space: null,
				budget: null,
				finish: null,
				name: null,
				email: null,
				phone: null,
				company: null,
				date: null,
				file: null,
				notimeline: 0,
				message: null,
			}
		}
	},
	methods: {
		goto(page, condition = true) {
			if (!condition) return;
			if (page < 0 || page > this.pages) return;

			this.page = page;
		},
		isSelected(val, list) {
			return list.indexOf(val) > -1;
		},
		uploadFile() {
			this.$refs.fileUpload.click();
		},
		onFileChange(e) {
			this.form.file = e.target.files[0];
			console.log(this.form.file);
		},
		sendForm() {
			this.loading = true;
			let formData = new FormData();

			formData.set('project', this.selectedProject.title);
			formData.set('looks', this.form.looks);
			formData.set('need', this.form.need);
			formData.set('space', this.form.space);
			formData.set('budget', this.form.budget);
			formData.set('finish', this.form.finish);
			formData.set('name', this.form.name);
			formData.set('email', this.form.email);
			formData.set('phone', this.form.phone);
			formData.set('company', this.form.company);
			formData.set('date', this.form.date);
			formData.set('file', this.form.file);
			formData.set('notimeline', this.form.notimeline);
			formData.set('message', this.form.message);

			axios.post('/wp-admin/admin-ajax.php?action=add-user', formData)
				.then(response => {
					console.log(response);
					this.goto(this.page+1);
				})
				.catch(error => {
					console.log(error);
				})
				.finally(() => {
					this.loading = false;
				});
		},
	},
	computed: {
		selectedProject() {
			return this.project_index ? this.projects[this.project_index] : null;
		},
	},
	mounted() {
		this.loading = true;
		axios.get('/wp-admin/admin-ajax.php?action=projects')
			.then(response => {
				this.projects = response.data.projects;
				this.looks = response.data.looks;
			})
			.catch(() => {
				this.projects = [];
				this.looks = [];
			})
			.finally(() => {
				this.loading = false;
			});
		}
}
</script>

