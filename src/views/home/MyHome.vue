<style lang="scss" scoped>
	.bg{
		background-size:100% 100%;
		background-attachment:fixed;
		height: 100%;
		width: 100%;
	}
</style>

<template>
	<Row style="height: 100%;width: 100%;">
		<Col style="height: 100%;width: 100%;">
			<div class="bg" style="background-image: url(https://cdn.pupboss.com/images/blog/2017/02/blog-cover.jpg)">
				<my-content></my-content>
			</div>
		</Col>
	</Row>
</template>

<script>
	import MyContent from "@/views/home/content"

    export default {
        name: "MyHome",
        components: {
            MyContent,
        },
        data() {
            return {}
        },
    }
</script>

