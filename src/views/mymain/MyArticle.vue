<style lang="scss" scoped>
	.top{
		height: 401px;
		/*background-color:#9caebf;*/
		background-image: url("https://yremp.live/wp-content/uploads/2019/08/sea-e1566225879119.jpg");
		background-position: center;
		background-size: cover;
		.title{
			min-height: 130px;
			margin: 0 auto; /*水平居中*/
			position: relative; /*脱离文档流*/
			top: 50%; /*偏移*/
			transform: translateY(-50%);
			.blog_name{
				color: white;
				margin: 10px 0;
			}
			.button{
				margin: 15px 0;
				.bt{
					background: rgba(81,90,110,0);
					/*border-color: #515a6e;*/
					color: white;
					/*background-color: #9caebf;*/
					font-size: 20px;
					padding: 0;
					border: 0;
				}
				.bt:hover{
					color: #515a6e;
				}
				.bt_{
					background: rgba(81,90,110,0);
					/*background-color: #9caebf;*/
					color: white;
					font-size: 20px;
					padding: 0;
					border: 0;
				}
				.bt_:hover{
					color: white;
				}
			}
		}
	}
	.content{
		min-height: 700px;
		background-color: rgb(251, 251, 251);

	}
	.footer{
		height: 100px;
		background-color: rgb(251, 251, 251);
	}
</style>

<template>
	<Row style="height: 100%;background-color: #eee">
		<Col span="24" style="height: 100%;">
			<Row>
				<Col span="24" class="top">
					<Row style="height: 100%;">
						<Col span="8" offset="8" style="height: 100%;text-align: center;">
							<div class="title">
								<div class="blog_name">
									<h1>
										标题
									</h1>
								</div>
								<div class="button">
									<div style="color: white">
										<Icon type="ios-bookmark-outline" size="16"/>
										Ubuntu, Linux, Mac, Docker
									</div>
								</div>
								<div>
									<Icon type="logo-github" size="25" ></Icon>
								</div>
							</div>
						</Col>
					</Row>
				</Col>
			</Row>
			<Row>
				<Col span="24">
					<div  class="content" >
						<div class="content_box">
							<Row>
								<Col span="18" offset="3" style="min-height: 700px">
									<router-view></router-view>
								</Col>
							</Row>
						</div>
					</div>
				</Col>
			</Row>
			<Row>
				<Col span="24" class="footer">
					<Row>
						<Col span="8" offset="8" style="text-align: center;margin-top: 25px">
							<img style="height: 45px;width: 105px;background-color: transparent" src="@/assets/iview_logo.png" />
						</Col>
					</Row>
				</Col>
			</Row>
		</Col>
	</Row>
</template>

<script>

    import MyarticleContent from "@/views/mymain/content"

    export default {
        name: "MyArticle",
        components: {
            MyarticleContent,
        },
        data() {
            return {

            }
        },
    }
</script>

