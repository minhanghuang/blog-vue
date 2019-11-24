<style lang="scss" scoped>
	.content{
		min-height: 400px;
		margin: 0 auto; /*水平居中*/
		position: relative; /*脱离文档流*/
		top: 50%; /*偏移*/
		transform: translateY(-50%);
		.content-box{
			width: 100%;
			height: 100%;
			padding: 5px;
			.log_div{
				img{
					height: 120px;
					border-radius:60px;
				}
			}
			.log_img:hover{
				cursor:pointer
			}
			.title{
				text-decoration-style:solid;
				font-weight: 700;
				font-family:Raleway, "Lucida Grande", "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
				margin: 8px 0;
			}
			.title:hover {
				color: white;
			}
			.bt_group{
				margin-top: 25px;
				.home_bt{
					margin: 0 6px;
					background: rgba(81,90,110,0.5);
					border-color: #515a6e;
				}
				.home_bt:hover {
					background: white;
					color: #515a6e;
				}
			}

		}
	}

</style>

<template>
	<Row style="height: 100%;width: 100%;">
		<Col span="24" style="height: 100%;">
			<Row style="height: 100%;">
				<Col span="8" offset="8" style="height: 100%;text-align: center">
					<div class="content">
						<div class="content-box">
							<div class="log_div" >
								<img class="log_img" @click="log_bt" src="../../../../src/assets/logo.png">
							</div>
							<div class="title">
								<h1>
									#Minhang的博客#
								</h1>
							</div>
							<div class="bt_group">
								<Button class="home_bt" @click="home_bt" type="primary" shape="circle" size="large">Home</Button>
								<Button class="home_bt" @click="timeline_bt" type="primary" shape="circle" size="large">Timeline</Button>
								<Button class="home_bt" @click="about_bt" type="primary" shape="circle" size="large">About</Button>
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
        name: "mycontent",
        components: {},
        data() {
            return {

            }
        },
	    methods:{
            home_bt:function () {
                this.$router.push("main");
            },
            log_bt:function () {
                this.$router.push("main");
            },
            timeline_bt:function () {
                this.$router.push("/main/timeline");
            },
            about_bt:function () {
                this.$router.push("/main/about");
            }
	    }
    }
</script>

