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
				<Content style="height: 800px;width: 100%;background-color: white">
					Content
				</Content>
				<Footer style="height: 220px;width: 100%;background-color: #9caebf">
					Footer
				</Footer>
			</Layout>
		</Col>
	</Row>
</template>

<script>
	import MyHead from "@/views/myhead/myhead"
	import MyTitle from "@/views/mytitle/mytitle"

    export default {
        name: "myhome",
        components: {
            MyHead,
            MyTitle,
        },
        data() {
            return {}
        },
    }
</script>

