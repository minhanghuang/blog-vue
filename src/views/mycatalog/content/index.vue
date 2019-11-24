<style lang="scss" scoped>
	.content{
		min-height: 700px;
		width: 100%;
		padding: 0;
		margin: 0;
		background-color: #eee;
		.box{
			height: 100%;
			max-width: 800px;
			margin: 0 auto;
			padding: 0;
			.block{
				background-color: white;
				height: 300px;
				width: 100%;
				padding: 0;
				margin: 0;
				border-radius:10px;
				box-shadow:0 0 20px #c0bfba;
				.block_item{
					height: 100%;
					width: 100%;
					margin: 40px 0;
					padding: 0;
					display: flex;
					flex-direction: row;
					.img_article{
						/*display: inline-block;*/
						border-bottom-left-radius: 10px;
						border-top-left-radius: 10px;
						width: 55%;
						height: 100%;
						background-color: #9caebf;
						img{
							height: 100%;
							width: 100%;
							border-bottom-left-radius: 10px;
							border-top-left-radius: 10px;
						}
					}
					.centent_article{
						display: block;
						box-sizing: border-box;
						width: 40%;
						height: 100%;
						.con_centent_article{
							height: 270px;
							width: 100%;
							margin: 20px 10px 10px 0;
							padding-left: 30px;
							.box_centent_article{
								/*background-color: #61aeee;*/
								height: 100%;
								width: 100%;
								padding: 0;
								margin: 0;
								overflow:hidden;
								.title{
									height: 26px;
									/*background-color: #9caebf;*/
									h3{
										font-weight: bold;
										font-size: 17.55px;
										color: #504E4E;
									}
								}
								.box_centent_article_time{
									height: 20px;
									margin: 10px 0;
								}
								.box_centent_article_centent{
									max-height: 180px;
									/*background-color: #56b6c2;*/
									/*margin: 15px 0 22.5px 0 ;*/
								}
								.box_centent_article_tags{
									margin-top: 10px;
								}
							}
						}
					}
				}
			}
		}
		.foot{
			height: 100px;
			.page{
				height: 35px;
				padding: 32.5px 0;
				text-align: center;
			}
		}
	}
	/*@media only screen and (min-width: 768px){*/
	/*	.box{*/
	/*		width: 700px;*/
	/*	}*/
	/*}*/
	/*@media only screen and (min-width: 992px){*/
	/*	.box{*/
	/*		width: 900px;*/
	/*	}*/
	/*}*/
	/*@media only screen and (min-width: 1200px){*/
	/*	.box{*/
	/*		width: 1100px;*/
	/*	}*/
	/*}*/
</style>

<template>
	<Row style="">
		<Col style="">
			<Row style="min-height: 700px;width: 100%;margin-top: 30px">
				<Col style="">
					<div class="content">
						<div class="box">
							<div class="block" v-for="k in 4">
								<div class="block_item">
									<div class="img_article">
										<img src="@/assets/demo_article_img.png">
									</div>
									<div class="centent_article">
										<div class="con_centent_article">
											<div class="box_centent_article">
												<div class="title">
													<div style="float: right">
														<h3>Docker的安装以及简单使用</h3>
													</div>
												</div>
												<div class="box_centent_article_time">
<!--													<Icon type="ios-time" />-->
													<div style="float: right">
														<Icon type="ios-time-outline" />
														1天前,
													</div>
												</div>
												<div class="box_centent_article_centent">
													<p>
														Docker的安装以及简单使用 ，没错，最近突然想学一下Docker。简单的安装和使用之后发现，简直不要太舒服，真的是太方便了，专门写博客记录一下。这一篇
													</p>
												</div>
												<div class="box_centent_article_tags">
													<div style="float: right">
														<Icon type="ios-bookmark-outline" size="16"/>
														Ubuntu, Linux, Mac, Docker
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="foot">
							<div class="page">
								<Page :total="100" />
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
        name: "mycatalogcontent",
        components: {},
        data() {
            return {}
        },
    }
</script>

