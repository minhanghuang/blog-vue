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
			<div class="bg" :style="{backgroundImage:'url('+require('../../assets/header-bg.jpg')+')'}">
				<div style="height: 100%;width: 100%;">
<!--				<div style="height: 100%;width: 100%;background: rgba(81,90,110,0.4)">-->
					<my-content></my-content>
				</div>
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

