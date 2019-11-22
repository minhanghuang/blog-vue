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
						font-size: 27px;
						line-height: 25px;
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
			<Row style="min-height: 700px;width: 100%;margin-top: 30px">
				<Col style="">
					<div class="content">
						<div class="box">
							<div class="block" v-for="k in 4">
								<div class="img_article">
									<img src="../../../assets/Sierra2.jpg" style="height: 200px;width: 528px">
								</div>
								<div class="centent_article">
									<div class="ititle">
										<h3>开通了一个 Instagram 账户</h3>
									</div>
									<div class="icontent">
										<p>印象中我在 2015 年就有一个 Ins 账户，后来在一次清理过程中，关闭了绝大多数社交账户，比如知乎，微博，Ins，能删账户的都删了账户，不能删账户的就删了所有内容。至于 Ins 账户，后面其实注册过一次，但是因为不常用还是选择了注销账户。

											从注册微信那天起，我想把微信的聊天功能和朋友圈功能分离开，也就是说，我的微信从好几年前注册，就没发过一次动态，所以我的微信主页点开没有任何东西，连朋友圈的入口都没有。不发朋友圈，并不代表我不发任何动态，有的事件还是需要发出来记录一下体现仪式感，我只是不想把他和微信这么一个聊天工具揉在一起。</p>
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

