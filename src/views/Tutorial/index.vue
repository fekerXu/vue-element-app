<template>
	<div id="main">
		<Header title="教程"></Header>
		<AList></AList>
		<TabBar></TabBar>
	</div>
</template>

<script>
	import Header from '@/components/Header';
	import TabBar from '@/components/TabBar';
	import AList from '@/components/AList';
	
	export default {
		name: 'Home',
		components: {
			Header,
			TabBar,
			AList
		}
	}
</script>

<style scoped>

</style>
