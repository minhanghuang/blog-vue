<style lang="scss" scoped>
	.mytitle{
		h3{
			color: white;
			font-size: 32px;
			line-height: 35px;
			text-align: center;
			font-family:lato-regular, "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
		}
		h6{
			color: white;
			font-size: 19px;
			text-align: center;
			font-family:lato-regular, "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
		}
	}
</style>

<template>
	<Row style="height: 100%;width: 100%;" class="mytitle">
		<Col span="24" style="height: 100%;width: 100%;">
			<Row style="height: 38px;width: 100%;margin: 24px 0 12px 0;">
				<Col span="24" style="height: 100%;width: 100%;">
					<h3 >
						Nothing is impossible.
					</h3>
				</Col>
			</Row>
			<Row style="height: 22px;width: 100%;margin: 12px 0;">
				<Col span="24" style="height: 100%;width: 100%;">
					<h6>
						https://pigjian.com
					</h6>
				</Col>
			</Row>
		</Col>
	</Row>
</template>

<script>
    export default {
        name: "mytitle",
        components: {},
        data() {
            return {}
        },
    }
</script>

