<style lang="scss" scoped>

</style>

<template>
	<Row>
		<Col>
			<article-list></article-list>
		</Col>
	</Row>
</template>

<script>
    import ArticleList from "@/views/mycatalog/content/"

    export default {
        name: "main_article",
        components: {
            ArticleList
        },
        data() {
            return {}
        },
    }
</script>

