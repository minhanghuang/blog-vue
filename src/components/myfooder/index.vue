<style lang="scss" scoped>
	.footer{
		background-color: rgb(180, 193, 204);
		height: 351px;
		font-size: 14px;
		font-weight: 400;
		color: white;
		.footer-main-height{
			height: 233px;
		}
		.footer-main{
				width: 100%;
			.footer-main-box{
				width: 90%;
				padding: 0;
				margin: 0 auto;
				.footer-main-con{
					padding: 20px 0;
					.footer-main-github{
						/*background-color: yellow;*/
					}
					.footer-main-communicate{
						/*background-color: #61aeee;*/
					}
					.footer-main-help{
						background-color: black;
					}
					.footer-main-sponsor{
						background-color: #98c379;
					}
				}
			}
		}
		.footer-copyright{
			height: 86px;
			width: 90%;
			margin: 32px auto 0;
			padding: 32px 0;
			border-top: 1px solid #eee;
			text-align: center;
		}
		a{
			color: white;
			font-size: 15px;
		}
	}
</style>

<template>
	<Row  class="footer">
		<Col class="footer">
			<Row  class="footer-main footer-main-height">
				<Col class="footer-main-col">
					<div class="footer-main-box footer-main-height">
						<div class="footer-main-con footer-main-height">
							<Row>
								<Col class="footer-main-github" span="5">
									<div style="height: 24px;margin-bottom: 8px;font-size: 15px">
										<Icon type="logo-github" size="22" />
										GitHub
									</div>
									<div style="height: 21px;padding-left: 8px;margin-bottom: 5px">
										<a>
											Blog &nbsp;Web
										</a>
									</div>
									<div style="height: 21px;padding-left: 8px;margin-bottom: 5px">
										<a>
											Blog &nbsp;Admin
										</a>
									</div>
									<div style="height: 21px;padding-left: 8px;margin-bottom: 5px">
										<a>
											Blog &nbsp;Api
										</a>
									</div>
								</Col>
								<Col class="footer-main-communicate" span="5">
									<div style="height: 24px;margin-bottom: 8px;font-size: 15px">
										<Icon type="ios-link-outline" size="22" />
											社区
									</div>
								</Col>
								<Col class="footer-main-help" span="5" offset="2">
									c
								</Col>
								<Col class="footer-main-sponsor" span="5" offset="2">
									d
								</Col>
							</Row>
						</div>
					</div>
				</Col>
			</Row>
			<Row  class="footer-copyright">
				<Col class="footer-copyright-col">
					<p>
						Copyright © 2019 minhang. All rights reserved.
					</p>
				</Col>
			</Row>
		</Col>
	</Row>
</template>

<script>
    export default {
        name: "myfooder",
        components: {},
        data() {
            return {}
        },
    }
</script>

