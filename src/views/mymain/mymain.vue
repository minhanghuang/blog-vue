<style lang="scss" scoped>

</style>

<template>
	<Row style="height: auto;width: 100%;">
		<Col style="height: auto;width: 100%;">
			<Content style="height: 188px;width: 100%;padding: 30px 60px 50px 60px;background-color: #9caebf">
				<my-title></my-title>
			</Content>
			<Content style="height: auto;width: 100%;background-color: #f9f9fb">
				<my-content></my-content>
			</Content>
			<Row style="background-color: white;height: 150px;padding: 50px;text-align: center;">
				<Col>
					<Page :total="100" />
				</Col>
			</Row>
		</Col>
	</Row>
</template>

<script>
	// 主要:标题+博文列表+分页; 因为在点击博文详细后,这几个组件是一体的;需要通过路由区分
    import MyTitle from "@/views/mytitle/mytitle"
    import MyContent from "@/views/mycontent/mycontent"

    export default {
        name: "mymain",
        components: {
            MyTitle,
            MyContent,
        },
        data() {
            return {}
        },
    }
</script>

