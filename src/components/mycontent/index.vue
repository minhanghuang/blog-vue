<style lang="scss" scoped>

</style>

<template>
	<Row style="background-color: #eee">
		<Col style="background-color: #eee">
			<router-view></router-view>
		</Col>
	</Row>
</template>

<script>
    import ArticleList from "@/views/mycatalog/content/"

    export default {
        name: "mycontent",
        components: {
            ArticleList,
        },
        data() {
            return {}
        },
    }
</script>

