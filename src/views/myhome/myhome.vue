<style lang="scss" scoped>

</style>

<template>
	<Row style="height: 100%;width: 100%;">
		<Col span="24" style="height: 100%;width: 100%;">
			<Layout>
				<Header style="height: 64px;width: 100%;background-color: #9caebf">
					<my-head></my-head>
				</Header>
				<Content style="height: 188px;width: 100%;padding: 30px 60px 50px 60px;background-color: #9caebf">
					<my-title></my-title>
				</Content>
				<Content style="height: auto;width: 100%;;background-color: #f9f9fb">
					<my-content></my-content>
				</Content>
				<Row style="background-color: white;height: 150px;padding: 50px;text-align: center;">
					<Col>
						<Page :total="100" />
					</Col>
				</Row>
				<Footer style="height: 150px;width: 100%;background-color: #9caebf">
					<my-footer></my-footer>
				</Footer>
			</Layout>
		</Col>
	</Row>
</template>

<script>
	import MyHead from "@/views/myhead/myhead"
	import MyTitle from "@/views/mytitle/mytitle"
	import MyContent from "@/views/mycontent/mycontent"
	import MyFooter from "@/views/myfooter/myfooter"

    export default {
        name: "myhome",
        components: {
            MyHead,
            MyTitle,
            MyContent,
            MyFooter,
        },
        data() {
            return {}
        },
    }
</script>

