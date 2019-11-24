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
					background-color: #9caebf;
					font-size: 20px;
					padding: 0;
					border: 0;
				}
				.bt:hover{
					color: white;
				}
				.bt_{
					background-color: #9caebf;
					font-size: 20px;
					padding: 0;
					border: 0;
				}
				.bt_:hover{
					color: black;
				}
			}
		}
	}
	.content{
		height: auto;
	}
	.footer{
		height: 100px;
		background-color: #9caebf;
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
										# 想好再说 #
									</h1>
								</div>
								<div class="button">
									<Button class="bt" type="text">Home</Button>
									<Button class="bt_" type="text">&nbsp;&nbsp;|&nbsp;&nbsp;</Button>
									<Button class="bt" type="text">Timeline</Button>
									<Button class="bt_" type="text">&nbsp;&nbsp;|&nbsp;&nbsp;</Button>
									<Button class="bt" type="text">About</Button>
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
				<Col span="24" class="content">
					<mymain-content></mymain-content>
				</Col>
			</Row>
			<Row>
				<Col span="24" class="footer">
					ccc
				</Col>
			</Row>
		</Col>
	</Row>
</template>

<script>
	import MymainContent from "@/views/mymain/content/"

    export default {
        name: "MyMain",
        components: {
            MymainContent,
        },
        data() {
            return {}
        },
    }
</script>

