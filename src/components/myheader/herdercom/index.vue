<style lang="scss" scoped>
	.top{
		height: 401px;
		/*background-color:#9caebf;*/
		/*background-image: url("https://yremp.live/wp-content/uploads/2019/08/sea-e1566225879119.jpg"); // mycatalog_background.jpg*/
		/*background-position: center;*/ // 居中显示
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
</style>

<template>
<Row>
	<Col span="24" class="top" :style="{backgroundImage: 'url(' + require('@/assets/header-bg.jpg') + ')'}">
		<Row style="height: 100%;background: rgba(40, 42, 45, 0.1)">
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
</template>

<script>
    export default {
        name: "headercom",
        components: {},
        data() {
            return {}
        },
	    methods:{
            home_bt:function () {
                this.$router.push("/main");
            },
            timeline_bt:function () {
                this.$router.push("/main/timeline");
            },
            about_bt:function () {
                this.$router.push("/main/about");
            },
	    }
    }
</script>

