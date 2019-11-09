<style lang="scss" scoped>
	.container{
		box-sizing: border-box;
		height: auto;
		width: 100%;
		margin: 0;
		padding: 0;
		.box{
			height: 100%;
			width: 100%;
			margin: 0;
			padding: 28px 0;
			.content{
				display: flex;
				flex-flow:row; /*伸缩项目单行排列*/
				height: 100%;
				width: 100%;
				padding: 0;
				margin: 0;
				.imgcls{
					height: 100%;
					width: 270px;
					margin: 0;
					padding: 0 10px 0 0;
				}
				.title{
					height: 100%;
					flex:1;/*这里设置为占比1，填充满剩余空间*/
					margin: 0;
					padding: 0;
					color: rgb(99, 107, 111);
					h2{
						a{
							
						}
					}
					.tag{
						display: inline-block;
						font-weight:bold;
						font-size:14px;
						text-align:center;
						margin: 5px 5px;
						padding: 4px 8px;
						background-color: #e8e8e8;
						color: rgba(0,0,0,.6);
						border-radius: 5px
					}
				}
			}
		}
	}
</style>

<template>
	<div class="container">
		<div  v-for="count in 10">
			<div class="box">
				<div class="content">
					<div class="imgcls">
						<img style="height: 100%;width: 100%" src="https://cdn.pigjian.com/cover/2018/10/11/mzcJBgfUXAJWC7E4YOqcysOP4L7vXvadI71nSCtS.jpg">
					</div>
					<div class="title">
						<h2 style="margin-bottom: 5px">
							<a>
								Ubuntu 16.04 环境安装部署
							</a>
						</h2>
						<div style="margin: 9.8px 0">
						<span>
							项目部署文档
						</span>
						</div>
						<div style="width: 100%;height: auto">
							<div style="width: 100%;height: auto">
								<a>
									<div class="tag">
										<Icon type="md-pricetag" />
										入门
									</div>
								</a>
								<a>
									<div class="tag">
										<Icon type="md-pricetag" />
										Linux
									</div>
								</a>
							</div>
							<div class="info" style="color: #95a5a6">
								<Icon type="md-person" />
								admin ,
								<Icon type="ios-time-outline" />
								一天前 ,
								<Icon type="ios-eye-outline" />
								1000
								<a style="float: right">
									Read More >
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Divider style="margin: 0;top:0" v-if="count != 10"></Divider>
		</div>
	</div>
</template>

<script>
    export default {
        name: "bloglist",
        components: {},
        data() {
            return {}
        },
    }
</script>

