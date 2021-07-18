<template>
	<div class="page-nav">
		<button v-if="page > 1" @click.prevent="$emit('back')" class="inverse">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
			</svg>&nbsp;&nbsp;
			Back
		</button>
		<span v-else>&nbsp;</span>

		<button v-if="page < pages - 1" @click.prevent="$emit('next')">Next</button>
		<button v-else-if="page === pages - 1" @click.prevent="$emit('send')">Submit</button>
		<span v-else>&nbsp;</span>
	</div>
</template>

<script>
export default {
	props: ['page', 'pages']
}
</script>
