<style scoped>
@import url("assets/css/websites.css");
</style>

<template>
    <div class="page">
        <Content title="Websites" subText="Some useful websites I have created or just linked.">
            <div class="cube-row">
                <RotatingCube :links="sites"/>
                <RotatingCube :links="sites"/>
                <RotatingCube :links="sites"/>
                <RotatingCube :links="sites"/>
                <RotatingCube :links="sites"/>
            </div>
        </Content>
        <Content title="Friend Sites" subText="My friends have some cool sites too!">
            
        </Content>
    </div>
</template>

<script setup>
const { $setTitle } = useNuxtApp();
$setTitle('Websites');

const sites = [
    { label: 'Site 1', url: 'https://example.com' },
    { label: 'Site 2', url: 'https://example2.com' },
    { label: 'Site 3', url: 'https://example3.com' },
    { label: 'Site 4', url: 'https://example4.com' },
    { label: 'Site 5', url: 'https://example5.com' },
    { label: 'Site 6', url: 'https://example6.com' },
];
</script>