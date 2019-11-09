<style lang="scss" scoped>
	.container{
		height:100%;
		width: 100%;
		padding: 0 15px;
		margin: 0 auto;
		.box{
			position:relative;
			height:100%;
			padding: 0 15px;
		}
	}
	@media (min-width: 768px) {
		.container{
			width: 750px;
		}
	}
	@media (min-width: 992px) {
		.container{
			width: 970px;
		}
		.box{
			width: 90%;
			float: right;
		}
	}
	@media (min-width: 1200px) {
		.container{
			width: 1170px;
		}
	}
</style>

<template>
	<Row style="height: auto;width: 100%;margin-top: 30px">
		<Col span="24" style="height: auto;width: 100%;">
			<Row class="container">
				<Col span="24" style="height: auto;width: 100%;">
					<Row class="box">
						<Col span="24" style="height: auto;width: 100%;">
							<blog-list></blog-list>
						</Col>
					</Row>
				</Col>
			</Row>
		</Col>
	</Row>
</template>

<script>
    import BlogList from "@/components/blog/list/bloglist"


    export default {
        name: "mycontent",
        components: {
            BlogList,
        },
        data() {
            return {}
        },
    }
</script>

