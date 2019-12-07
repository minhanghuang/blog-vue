<style lang="scss" scoped>

</style>

<template>
	<Row style="height: 100%;width: 100%;">
		<Col style="height: 100%;width: 100%;">
			<my-headercom></my-headercom>
			<my-content></my-content>
			<my-fooder></my-fooder>
		</Col>
	</Row>
</template>

<script>
    import MyHeadercom from "@/components/myheader/herdercom/"
    import MyContent from "@/components/mycontent/"
    import MyFooder from "@/components/myfooder/"

    export default {
        name: "MyMain",
        components: {
            MyHeadercom,
            MyContent,
            MyFooder,
        },
        data() {
            return {}
        },
    }
</script>

