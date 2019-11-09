<style lang="scss" scoped>

	.myhead{
		a{
			color: white;
			font-family: Lato, 微软雅黑, "Helvetica Neue", Arial, Helvetica, sans-serif;
			line-height: 24px;
			text-decoration-style:solid;
		}
	}
</style>

<template>
	<Row style="height: 100%;width: 100%;">
		<Col span="24" style="height: 100%;width: 100%;">
			<Row style="height: 100%;width: 100%;">
				<Col span="8" style="background-color: #9caebf">
					<Row class="myhead">
						<Col span="4" offset="8" style="background-color: #9caebf;">
							<a>
								文章
							</a>
						</Col>
						<Col span="4"style="background-color: #9caebf">
							<a>
								分享
							</a>
						</Col>
						<Col span="4"style="background-color: #9caebf">
							<a>
								文档
							</a>
						</Col>
						<Col span="4"style="background-color: #9caebf">
							<a>
								例子
							</a>
						</Col>
					</Row>
				</Col>

				<Col span="6" offset="10" style="background-color: #9caebf">
					<div>
						<Input size="large" suffix="ios-search" placeholder="搜索" style="width: 172px;border: 1px;background-color: #9caebf" />
					</div>
				</Col>
			</Row>
		</Col>
	</Row>
</template>

<script>
    export default {
        name: "myhead",
        components: {},
        data() {
            return {}
        },
    }
</script>

