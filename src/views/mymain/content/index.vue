<style lang="scss" scoped>
	.content{
		min-height: 700px;
		width: 100%;
		padding: 0;
		margin: 0;
		background-color: #eee;
		.box{
			height: 100%;
			margin: 0 auto;
			padding: 0;
			display: flex; // 弹性布局
			justify-content:space-around;
			flex-wrap:wrap;
			.block{
				background-color: white;
				height: 540px;
				width: 48%;
				margin: 0 0 20px 0;
				.img_article{
					height: 200px;
					width: 100%;
				}
				.centent_article{
					height: 290px;
					width: 100%;
					padding: 10px 30px 20px 30px;
					.ititle{
						height: 25px;
						margin: 32px 0;
					}
					.icontent{
						height: 180px;
						margin: 0 0 17px 0 ;
					}
				}
				.footer_article{
					height: 50px;
					width: 100%;
				}
			}
		}
	}
	@media only screen and (min-width: 768px){
		.box{
			width: 700px;
		}
	}
	@media only screen and (min-width: 992px){
		.box{
			width: 900px;
		}
	}
	@media only screen and (min-width: 1200px){
		.box{
			width: 1100px;
		}
	}
</style>

<template>
	<Row style="">
		<Col style="">
			<Row style="min-height: 700px;width: 100%;">
				<Col style="">
					<div class="content">
						<div class="box">
							<div class="block" v-for="k in 4">
								<div class="img_article">
									<img src="../../../assets/Sierra2.jpg" style="height: 200px;width: 528px">
								</div>
								<div class="centent_article">
									<div class="ititle">

									</div>
									<div class="icontent">

									</div>
									<Divider style="background-color: #abb2bf" ></Divider>

								</div>
								<div class="footer_article">

								</div>
							</div>
						</div>
					</div>
				</Col>
			</Row>
		</Col>
	</Row>
</template>

<script>
    export default {
        name: "mymaincontent",
        components: {},
        data() {
            return {}
        },
    }
</script>

