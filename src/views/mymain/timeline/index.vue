<style lang="scss" scoped>

</style>

<template>
	<Row style="height: 100%;width: 100%;min-height: 700px;background-color: white">
		<Col style="height: 100%;width: 100%;">
			<div class="block">
				<el-timeline>
					<el-timeline-item timestamp="2018/4/12" placement="top">
						<el-card>
							<h4>更新 Github 模板</h4>
							<p>王小虎 提交于 2018/4/12 20:46</p>
						</el-card>
					</el-timeline-item>
					<el-timeline-item timestamp="2018/4/3" placement="top">
						<el-card>
							<h4>更新 Github 模板</h4>
							<p>王小虎 提交于 2018/4/3 20:46</p>
						</el-card>
					</el-timeline-item>
					<el-timeline-item timestamp="2018/4/2" placement="top">
						<el-card>
							<h4>更新 Github 模板</h4>
							<p>王小虎 提交于 2018/4/2 20:46</p>
						</el-card>
					</el-timeline-item>
				</el-timeline>
			</div>
		</Col>
	</Row>
</template>

<script>
    import MyHeadercom from "@/components/myheader/herdercom/"

    export default {
        name: "MymainTimeline",
        components: {},
        data() {
            return {}
        },
    }
</script>

