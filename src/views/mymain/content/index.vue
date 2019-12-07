<style lang="scss" scoped>

</style>

<template>
	<Row style="">
		<Col style="">
			<mavon-editor
				v-model="value"
				:editable="false"
				:toolbarsFlag="false"
				:subfield="false"
				:boxShadow="false"
				defaultOpen="preview"
				style="min-height: 700px"
			>
			</mavon-editor>
		</Col>
	</Row>

</template>

<script>
    export default {
        name: "MymainContent",
        components: {},
        data() {
            return {
                value:"# app"
            }
        },
    }
</script>

