<style lang="scss" scoped>
	.bg{
		background-size:100% 100%;
		background-attachment:fixed;
		height: 100%;
		width: 100%;
		/*opacity:0.5;*/
	}
</style>

<template>
	<Row style="height: 100%;width: 100%;">
		<Col style="height: 100%;width: 100%;">
			<div class="bg" :style="{backgroundImage:'url('+require('../../assets/2.png')+')'}">
				<my-content></my-content>
			</div>
		</Col>
	</Row>
</template>

<script>
	import MyContent from "@/views/myhome/content"

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

