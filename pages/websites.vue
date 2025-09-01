<style scoped>
@import url("assets/css/websites.css");
</style>

<template>
    <div class="page">
        <Content title="Websites" subText="Some useful websites I have created or just linked.">
            <div class="cube-row">
                <RotatingCube :links="sites1"/>
                <RotatingCube :links="sites2"/>
            </div>
        </Content>
        <Content title="Friend Sites" subText="My friends have some cool sites too!">
            <div class="cube-row">
                <RotatingCube :links="friends"/>
            </div>
        </Content>
    </div>
</template>

<script setup>
const { $setTitle } = useNuxtApp();
$setTitle('Websites');

const sites1 = [
    { label: 'Games', url: 'https://games.allancoding.dev' },
    { label: 'Webserver', url: 'https://webserver.allancoding.dev' },
    { label: 'Bfoot-calc', url: 'https://bfoot-calc.allancoding.dev' },
    { label: 'Minecraft', url: 'https://mc.allancoding.dev' },
    { label: 'Pi Sugar', url: 'https://pi-sugar.allancoding.dev' },
    { label: 'EmulatorJS', url: 'https://emulatorjs.allancoding.dev' },
];

const sites2 = [
    { label: 'Tor Site', url: 'https://allan2klcpgcpoozbko3dmm22o2dg5n3grqfpdafarav74hu2uxcvtyd.onion' },
    { label: 'Status', url: 'https://status.allancoding.dev' },
    { label: 'Git', url: 'https://git.allancoding.dev' },
    { label: 'Racer', url: 'https://racer.allancoding.dev' },
    { label: '600 API', url: 'https://600api.allancoding.dev' },
    { label: 'Movies', url: 'https://movies.allancoding.dev' },
];

const friends = [
    { label: 'The Calculator Guy', url: 'https://thecalculatorguy.net' },
    { label: 'Motor Truck 1221', url: 'https://motortruck1221.com' },
    { label: 'Nate Washburn', url: 'https://natewashburn.is-a.dev' },
    //{ label: 'Void Book', url: 'https://voidbook.net' },
    { label: 'Ethan', url: 'https://ethanthesleepy.one' },
    { label: 'Flibbles Hex Eyes', url: 'https://www.mrgtech.net' },
    { label: 'Crosby', url: 'https://lordstickman543.is-not.cool' },
];
</script>