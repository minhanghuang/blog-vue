<style lang="scss" scoped>
	.log_ul{
		font-size: 18px;
		font-weight: bold;
		width: 100%;
		height: 24px;
		li{
			text-decoration: none;  /*去掉前面的圆点*/
			list-style: none;
			float: left;
			height: 24px;
			a{
				text-decoration: none;
				margin:0;
				display: block;
				padding:0 10px;
				height:24px;
				line-height:30px;
				text-align:center;
			}
		}
	}
	a{
		text-decoration: none;
		margin:0;
		display: block;
		color: white;
	}
</style>

<template>
	<Row style="height: 100%;width: 100%;">
		<Col span="24" style="height: 100%;width: 100%;">
			<Row style="height: 100%;">
				<Col span="8" offset="8" style="height: 100%;padding: 0 10px;">
					<Row style="height: 24px;width: 100%;margin-bottom: 12px">
						<Col span="8" offset="8" style="height: 100%;text-align: center">
							<ul class="log_ul">
								<li>
									<a>
										<Icon type="ios-home-outline" size="24" style="color: white" />
									</a>
								</li>
								<li>
									<a>
										<Icon type="logo-github" size="24" style="color: white" />
									</a>
								</li>
								<li>
									<a>
										<Icon type="logo-whatsapp" size="24" style="color: white" />
									</a>
								</li>
							</ul>
						</Col>
					</Row>
					<Row style="height: 24px;width: 100%;margin-bottom: 12px">
						<Col span="12" offset="6" style="height: 100%;text-align: center">
							<Row style="height: 24px;width: 100%;">
								<Col span="8">
									<a style="font-weight:600">
										友情链接
									</a>
								</Col>
								<Col span="8" offset="8">
									<a style="font-weight:600">
										关于我
									</a>
								</Col>
							</Row>
						</Col>
					</Row>
					<Row style="height: 24px;width: 100%;margin-bottom: 12px">
						<Col span="24" style="height: 100%;text-align: center">
							<Row style="height: 24px;width: 100%;">
								<Col span="24">
									<a style="font-weight:600">
										© Pig Jian 2016. All rights reserved. 粤ICP备16020344号-1
									</a>
								</Col>
							</Row>
						</Col>
					</Row>
				</Col>
			</Row>
		</Col>
	</Row>
</template>

<script>
    export default {
        name: "myfooter",
        components: {},
        data() {
            return {}
        },
    }
</script>

