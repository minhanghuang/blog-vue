<style lang="scss" scoped>
	.top{
		height: 401px;
		/*background-color:#9caebf;*/
		/*background-image: url("https://yremp.live/wp-content/uploads/2019/08/sea-e1566225879119.jpg"); // mycatalog_background.jpg*/
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
		height: auto;
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
				<Col span="24" class="top" :style="{backgroundImage: 'url(' + require('@/assets/mycatalog_background.jpg') + ')'}">
					<Row style="height: 100%;">
						<Col span="8" offset="8" style="height: 100%;text-align: center;">
							<div class="title">
								<div class="blog_name">
									<h1>
										# 起风了 #
									</h1>
								</div>
								<div class="button">
									<Button class="bt" @click="home_bt" type="text">Home</Button>
									<Button class="bt_" type="text">&nbsp;&nbsp;|&nbsp;&nbsp;</Button>
									<Button class="bt" @click="timeline_bt" type="text">Timeline</Button>
									<Button class="bt_" type="text">&nbsp;&nbsp;|&nbsp;&nbsp;</Button>
									<Button class="bt" @click="about_bt" type="text">About</Button>
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
					<mymain-content
						@get_list="update_list"
					></mymain-content>
				</Col>
			</Row>
			<Row>
				<Col span="24" class="footer">
					<Row>
						<Col span="8" offset="8" style="text-align: center;margin-top: 25px">
							<img style="height: 45px;width: 105px" src="@/assets/iview_logo.png" />
						</Col>
					</Row>
				</Col>
			</Row>
		</Col>
	</Row>
</template>

<script>
	import MymainContent from "@/views/mycatalog/content/"

    export default {
        name: "MyMain",
        components: {
            MymainContent,
        },
        data() {
            return {
                blog:{
                    response_data:{}
                }
            }
        },
	    methods:{
            home_bt:function () {
                this.$router.push("main");
            },
            timeline_bt:function () {
                this.$router.push("/main/timeline");
            },
            about_bt:function () {
                this.$router.push("/main/about");
            },
            update_list:function (response_data) {
                this.blog.response_data = response_data.results; // 后端接口博文列表
            }
	    }
    }
</script>

