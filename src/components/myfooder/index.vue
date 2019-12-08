<style lang="scss" scoped>
	.footer{
		/*background-color: rgb(180, 193, 204);*/
		background-color: rgb(33, 33, 33);
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
						/*background-color: black;*/
					}
					.footer-main-sponsor{
						/*background-color: #98c379;*/
					}
				}
			}
		}
		.footer-copyright{
			height: 86px;
			width: 90%;
			margin: 32px auto 0;
			padding: 32px 0;
			/*border-top: 1px solid #eee;*/
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
									<div style="height: auto;padding-left: 8px;margin-bottom: 5px">
										<div style="height: 72px;padding: 20px 0">
											<Row>
												<Col span="5">
													<div>
														<img style="height: 32px;width: 32px" src="https://file.iviewui.com/dist/c69ec08c402317033b98fd63280a1a3e.svg">
													</div>
												</Col>
												<Col span="5">
													<div>
														<img style="height: 32px;width: 32px" src="https://file.iviewui.com/dist/2cf4276d77f895fc06354af1eb480b8e.svg">
													</div>
												</Col>
												<Col span="5">
													<div>
														<img style="height: 32px;width: 32px" src="https://file.iviewui.com/dist/1dc5a4ffa3f5c21adcbb3464dd9a8021.svg">
													</div>
												</Col>
											</Row>
										</div>
										<div style="height: 32px;padding: 0">
											<Row>
												<Col span="5">
													<div>
														<img style="height: 32px;width: 32px" src="https://file.iviewui.com/dist/5db80e8196980d550153dcc3a33934b3.svg">
													</div>
												</Col>
												<Col span="5">
													<div>
														<img style="height: 32px;width: 32px" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTQ3NTQzODgzNzMzIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEyNzIgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE2ODMxIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjQ5Ni44NzUiIGhlaWdodD0iNDAwIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik03MjkuNjQxMTYzNDUgMTY1LjI3NjkzOTkxTDYzNC4zMjY1MDg4MSA5MC4xMjVsLTk5LjU2MjUgNzguNTI2OTM5OTEtNS4xNzg4Nzk4MSA0LjE2MDU2MDA5IDEwNC43NDEzNzk4MSA4My41MDIxNTU0NiAxMDUuMDkwNTE2ODItODMuNTAyMTU1NDYtOS43NzU4NjIxOC03LjUzNTU2MDA5eiBtMzYxLjIxMjI4NDQ1IDI5MS40NzE5ODIzNmwtNDU2Ljc4ODc5MjQ1IDM2MC4xOTM5NjU1NS00NTYuNDk3ODQ1MzctMzU5Ljk5MDMwMTI4TDExMC4xMjUgNTExLjEyNzE1NTQ3bDUyMy45Mzk2NTU0NiA0MTMuMTE3NDU2NzEgNTI0LjIzMDYwMzM1LTQxMy4zNTAyMTU1NS02Ny40NDE4MTA5MS01NC4xNDU0NzQzNnogbS00NTYuNzg4NzkyNDUgMjkuMjExMjA2NzNMMzg1LjQ3ODQ0NzkgMjkwLjAwNjQ2NTU0IDMxOC4wNjU3MzIzNyAzNDQuMTIyODQ0NTRsMzE1Ljk2OTgyNzcxIDI0OS4xNjgxMDMzNiAzMTYuMjg5ODcxMDEtMjQ5LjQwMDg2MTM2LTY3LjQxMjcxNTU1LTU0LjE0NTQ3NDM2LTI0OC44NDgwNjAwOCAxOTYuMjE1NTE2ODJ6IiBmaWxsPSIjMDA2Y2ZmIiBwLWlkPSIxNjgzMiI+PC9wYXRoPjwvc3ZnPg==">
													</div>
												</Col>
												<Col span="5">
													<div>
														<img style="height: 32px;width: 32px" src="https://file.iviewui.com/dist/2054f5af8012b54926ed6b5cfd1f166c.svg">
													</div>
												</Col>
											</Row>
										</div>
									</div>
								</Col>
								<Col class="footer-main-github" span="5" offset="2">
									<div style="height: 24px;margin-bottom: 8px;font-size: 15px">
										<Icon type="ios-chatbubbles" size="22" />
										帮助
									</div>
									<div style="height: 21px;padding-left: 8px;margin-bottom: 5px">
										<a>
											更新日志
										</a>
									</div>
									<div style="height: 21px;padding-left: 8px;margin-bottom: 5px">
										<a>
											使用教程
										</a>
									</div>
									<div style="height: 21px;padding-left: 8px;margin-bottom: 5px">
										<a>
											报告bug
										</a>
									</div>
								</Col>
								<Col class="footer-main-sponsor" span="5" offset="2">
									<div style="height: 45px;width: 100%;margin: 10px 0;text-align: center">
										<img src="../../assets/logo.png" style="height: 45px;width: 45px;border-radius: 25px">
									</div>
									<div style="height: 32px;width: 100%;margin-top: 20px;text-align: center">
										<img src="../../assets/images/又拍云_logo6.png" style="height: 45px;width: auto">
									</div>
									<div style="height: 18px;width: 100%;text-align: center;color: #666;font-size: 12px;margin-top: 8px">
										<p>
											又拍云提供CDN
										</p>
									</div>
									<Row style="height: 45px">
										<Col style="height: 45px;text-align: center;display: inline-block">
											<img style="height: 45px;width: auto" src="https://camo.githubusercontent.com/728ce9f78c3139e76fa69925ad7cc502e32795d2/68747470733a2f2f7675656a732e6f72672f696d616765732f6c6f676f2e706e67" >
										</Col>
										<Col style="height: 45px;width: 100px;text-align: center;display: inline-block">
											<p style="font-size: 30px;color: white">
												django
											</p>
										</Col>
									</Row>
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

