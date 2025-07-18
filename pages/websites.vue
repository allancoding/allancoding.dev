<style scoped>
@import url("assets/css/websites.css");
</style>

<template>
    <div class="page">
        <Content title="Websites" subText="Some useful websites I have created or just linked.">
            <RotatingCube />
        </Content>
        <Content title="Friend Sites" subText="My friends have some cool sites too!">
            
        </Content>
    </div>
</template>

<script setup>
const { $setTitle } = useNuxtApp();
$setTitle('Websites');
</script>