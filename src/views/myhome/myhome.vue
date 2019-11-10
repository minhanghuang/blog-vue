<style lang="scss" scoped>

</style>

<template>
	<Row style="height: 100%;width: 100%;">
		<Col span="24" style="height: 100%;width: 100%;">
			<Layout>
				<Header style="height: 64px;width: 100%;background-color: #9caebf">
					<my-head></my-head>
				</Header>
					<my-main></my-main>
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
	import MyMain from "@/views/mymain/mymain"

    export default {
        name: "myhome",
        components: {
            MyHead,
            MyTitle,
            MyContent,
            MyFooter,
            MyMain,
        },
        data() {
            return {}
        },
    }
</script>

